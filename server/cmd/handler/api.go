package handler

import (
	"server/cmd/model"

	"github.com/gofiber/fiber/v2"
)

func Hello(c *fiber.Ctx) error {
	body := model.ApiRequest{
		Status:  200,
		Message: "Hello, i am ok",
		Data:    nil,
	}
	c.GetRespHeader("Content-Type", "application/json")

	return c.JSON(body)
}
