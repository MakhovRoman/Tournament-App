package logger

import (
	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
	"github.com/rs/zerolog"
	"github.com/rs/zerolog/log"
	"os"
	"time"
)

func UseCustomLogger(e *echo.Echo) {
	zerolog.TimeFieldFormat = time.RFC3339Nano
	log.Logger = log.Output(zerolog.ConsoleWriter{Out: os.Stderr})

	e.Use(middleware.RequestLoggerWithConfig(middleware.RequestLoggerConfig{
		LogStatus:   true,
		LogURI:      true,
		LogMethod:   true,
		LogRemoteIP: true,
		LogLatency:  true,
		LogValuesFunc: func(c echo.Context, v middleware.RequestLoggerValues) error {
			log.Info().
				Str("method", v.Method).
				Str("uri", v.URI).
				Int("status", v.Status).
				Str("ip", v.RemoteIP).
				Dur("latency", v.Latency).
				Msg("request")
			return nil
		},
	}))
}
