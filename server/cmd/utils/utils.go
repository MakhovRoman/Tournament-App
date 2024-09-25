package utils

import (
	"fmt"
	"server/cmd/config"
)

func GetHost() string {
	config := config.LoadConfig()
	host := fmt.Sprintf("%s:%s", config.HOST, config.PORT)

	return host
}
