package main

import (
	"server/cmd/router"
	"server/cmd/utils"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
)

type Data struct {
	Body string `json:"body`
}

func main() {
	app := fiber.New(fiber.Config{
		AppName: "Tournament App",
	})
	app.Use(cors.New())

	// app.Get("/api", func(c *fiber.Ctx) error {
	// 	body := Data{
	// 		Body: "hello, world",
	// 	}

	// 	return c.JSON(body)
	// })

	router.SetupRouter(app)

	hostname := utils.GetHost()
	app.Listen(hostname)
}
