package logger

import (
	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
	"github.com/labstack/gommon/log"
)

func UseCustomLogger(e *echo.Echo) {
	// Включаем текстовый формат логов
	e.Logger.SetHeader("${time_rfc3339} | ${level} | ${prefix} | ${short_file}:${line} | ${message}")

	e.Logger.SetLevel(log.INFO)
	e.Use(middleware.Logger())
}
