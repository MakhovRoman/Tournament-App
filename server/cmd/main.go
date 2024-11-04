package main

import (
	"server/cmd/database"
	_ "server/cmd/docs"
	"server/cmd/router"
	"server/cmd/utils"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"github.com/gofiber/fiber/v2/middleware/logger"
	"github.com/gofiber/swagger"
)

// @title Tournament App API
// @version 1.0
// @description This is a sample swagger for Fiber
// @termsOfService http://swagger.io/terms/

// @contact.name API Support
// @contact.email fiber@swagger.io

// @license.name Apache 2.0
// @license.url http://www.apache.org/licenses/LICENSE-2.0.html

// @host localhost:8080
// @BasePath /api/v1

func main() {
	app := fiber.New(fiber.Config{
		Prefork: false,
		AppName: "Tournament App",
	})

	app.Get("/swagger/*", swagger.HandlerDefault)

	app.Use(cors.New())
	app.Use(logger.New())

	database.ConnectDB()

	router.SetupRouter(app)

	hostname := utils.GetHost()
	app.Listen(hostname)
}
