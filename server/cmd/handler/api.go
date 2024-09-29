package handler

import (
	"server/cmd/model"

	"github.com/gofiber/fiber/v2"
)

func Hello(c *fiber.Ctx) error {
	body := model.ApiRequest{
		Status:  "success",
		Message: "Hello, i am ok",
		Data:    nil,
	}
	c.GetRespHeader("Content-Type", "application/json")

	return c.Status(fiber.StatusAccepted).JSON(body)
}
