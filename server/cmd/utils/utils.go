package utils

import (
	"fmt"
	"server/cmd/config"
)

func GetHost() string {
	host := config.Config("HOST")
	port := config.Config("PORT")

	return fmt.Sprintf("%s:%s", host, port)
}
