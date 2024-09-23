package main

import (
	"server/cmd/utils"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
)

func main() {
	// slog.Info("Server starting")

	// http.HandleFunc("/", helpers.RootHandler)
	// http.HandleFunc("/test", helpers.TestHandler)

	// PORT := config.Load()

	// err := http.ListenAndServe(fmt.Sprintf(":%d", PORT), nil)
	// if err != nil {
	// 	slog.Error("Internal error. %s", err)
	// 	return
	// }
	app := fiber.New()
	app.Use(cors.New())

	type Data struct {
		Body string `json:"body`
	}

	app.Get("/api", func(c *fiber.Ctx) error {
		body := Data{
			Body: "hello, world",
		}

		return c.JSON(body)
	})

	port := utils.GetFormatPort()
	app.Listen(port)
}
