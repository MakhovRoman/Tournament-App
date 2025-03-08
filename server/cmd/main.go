package main

import (
	"github.com/labstack/echo/v4"
	"server/api"
	"server/config"
	"server/internal/db"
	"server/internal/logger"
)

func main() {
	e := echo.New()

	logger.UseCustomLogger(e)

	conf := config.GetConfig()

	db.Init(e, conf)

	api.GetRoutes(e)

	e.Logger.Info(e.Start(":1323"))
}
