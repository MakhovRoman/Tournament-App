package router

import (
	"server/cmd/handler"

	"github.com/gofiber/fiber/v2"
)

func SetupRouter(app *fiber.App) {
	// Middleware
	api := app.Group("/api")
	api.Get("/", handler.Hello)

	// Auth
	auth := api.Group("/auth")
	auth.Post("/login", handler.Login)
	auth.Post("/register", handler.CreateUser)
}
