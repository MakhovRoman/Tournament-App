package utils

import (
	"fmt"
	"server/cmd/config"
)

func GetFormatPort() string {
	PORT := config.Load()
	formattedPort := fmt.Sprintf("0.0.0.0:%d", PORT)

	return formattedPort
}
