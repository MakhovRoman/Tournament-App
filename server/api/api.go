package api

import "github.com/labstack/echo/v4"

func loginHelper(c echo.Context) error {
	return c.String(200, "Login Page")
}

func registerHelper(c echo.Context) error {
	return c.String(200, "Register Page")
}

func GetRoutes(e *echo.Echo) {
	authGroup := e.Group("/auth")

	authGroup.GET("/login", loginHelper)
	authGroup.GET("/register", registerHelper)
}
