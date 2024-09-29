package handler

import (
	"errors"
	"net/mail"
	"server/cmd/config"
	"server/cmd/database"
	"server/cmd/model"
	"time"

	"github.com/gofiber/fiber/v2"
	"github.com/golang-jwt/jwt/v5"
	"golang.org/x/crypto/bcrypt"
	"gorm.io/gorm"
)

func CheckPasswordHash(password, hash string) bool {
	err := bcrypt.CompareHashAndPassword([]byte(hash), []byte(password))
	return err == nil
}

func getUserByEmail(e string) (*model.UserModel, error) {
	db := database.DB
	var user model.UserModel

	if err := db.Where(&model.UserModel{Email: e}).First(&user).Error; err != nil {
		if errors.Is(err, gorm.ErrRecordNotFound) {
			return nil, nil
		}

		return nil, err
	}

	return &user, nil
}

func getUserByUsername(n string) (*model.UserModel, error) {
	db := database.DB
	var user model.UserModel

	if err := db.Where(&model.UserModel{Username: n}).First(&user).Error; err != nil {
		if errors.Is(err, gorm.ErrRecordNotFound) {
			return nil, nil
		}

		return nil, err
	}

	return &user, nil
}

func isEmail(email string) bool {
	_, err := mail.ParseAddress(email)

	return err == nil
}

// Login get user and password
func Login(c *fiber.Ctx) error {
	type LoginInput struct {
		Identity string `json:"identity"`
		Password string `json:"password"`
	}

	type UserData struct {
		ID       uint   `json:"id"`
		Username string `json:"username"`
		Email    string `json:"email"`
		Password string `json:"password"`
	}

	input := new(LoginInput)
	var userData UserData

	if err := c.BodyParser(&input); err != nil {
		body := model.ApiRequest{
			Status:  "error",
			Message: "Error on login request",
			Data:    nil,
		}

		return c.Status(fiber.StatusBadRequest).JSON(body)
	}

	identity := input.Identity
	password := input.Password
	userModel, err := new(model.UserModel), *new(error)

	if isEmail(identity) {
		userModel, err = getUserByEmail(identity)
	} else {
		userModel, err = getUserByUsername(identity)
	}

	if err != nil {
		body := model.ApiRequest{
			Status:  "error",
			Message: "Internal Server Error",
			Data:    err,
		}
		return c.Status(fiber.StatusInternalServerError).JSON(body)
	} else if userModel == nil {
		CheckPasswordHash(password, "") //???????
		body := model.ApiRequest{
			Status:  "error",
			Message: "Invalid username or password",
			Data:    nil,
		}

		return c.Status(fiber.StatusUnauthorized).JSON(body)
	} else {
		userData = UserData{
			ID:       userModel.ID,
			Username: userModel.Username,
			Email:    userModel.Email,
			Password: userModel.Password,
		}
	}

	if !CheckPasswordHash(password, userData.Password) {
		body := model.ApiRequest{
			Status:  "error",
			Message: "Invalid username or password",
			Data:    nil,
		}

		return c.Status(fiber.StatusUnauthorized).JSON(body)
	}

	token := jwt.New(jwt.SigningMethodHS256)
	claims := token.Claims.(jwt.MapClaims)
	claims["username"] = userData.Username
	claims["email"] = userData.Email
	claims["exp"] = time.Now().Add(time.Hour * 72).Unix()

	t, err := token.SignedString([]byte(config.Config("SECRET")))
	if err != nil {
		body := model.ApiRequest{
			Status:  "error",
			Message: "Internal Server Error",
			Data:    err,
		}

		return c.Status(fiber.StatusInternalServerError).JSON(body)
	}

	return c.JSON(model.ApiRequest{
		Status:  "success",
		Message: "success login",
		Data:    t,
	})
}
