package main

import (
	"server/cmd/database"
	"server/cmd/router"
	"server/cmd/utils"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"github.com/gofiber/fiber/v2/middleware/logger"
)

func main() {
	app := fiber.New(fiber.Config{
		Prefork: false,
		AppName: "Tournament App",
	})

	app.Use(cors.New())
	app.Use(logger.New())

	database.ConnectDB()

	router.SetupRouter(app)

	hostname := utils.GetHost()
	app.Listen(hostname)
}
