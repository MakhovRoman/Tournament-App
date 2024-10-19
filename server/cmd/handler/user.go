package handler

import (
	"server/cmd/database"
	"server/cmd/model"

	"github.com/gofiber/fiber/v2"
	"golang.org/x/crypto/bcrypt"
)

func hashPassword(password string) (string, error) {
	bytes, err := bcrypt.GenerateFromPassword([]byte(password), 14)
	return string(bytes), err
}

func CreateUser(c *fiber.Ctx) error {
	type NewUser struct {
		Username string `json:"username"`
		Email    string `json:"email"`
	}

	db := database.DB
	user := new(model.UserModel)

	if err := c.BodyParser(user); err != nil {
		body := model.ApiRequest{
			Status:  "error",
			Message: "Review your input",
			Data:    err,
		}
		return c.Status(500).JSON(body)
	}

	hash, err := hashPassword(user.Password)
	if err != nil {
		body := model.ApiRequest{
			Status:  "error",
			Message: "Failed to hash password",
			Data:    err,
		}
		return c.Status(500).JSON(body)
	}

	user.Password = hash
	if err := db.Create(&user).Error; err != nil {
		body := model.ApiRequest{
			Status:  "error",
			Message: "Failed to create user",
			Data:    err,
		}
		return c.Status(500).JSON(body)
	}

	newUser := NewUser{
		Email:    user.Email,
		Username: user.Username,
	}

	request := model.ApiRequest{
		Status:  "success",
		Message: "Created user",
		Data:    newUser,
	}

	return c.Status(200).JSON(request)
}
