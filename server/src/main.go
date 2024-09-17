package main

import (
	"fmt"
	"net/http"
	"server/src/api/helpers"
	"server/src/config"

	"github.com/gookit/slog"
)

func main() {
	slog.Info("Server starting")

	http.HandleFunc("/", helpers.RootHandler)
	http.HandleFunc("/test", helpers.TestHandler)

	PORT := config.Load()

	err := http.ListenAndServe(fmt.Sprintf(":%d", PORT), nil)
	if err != nil {
		slog.Error("Internal error. %s", err)
		return
	}
}
