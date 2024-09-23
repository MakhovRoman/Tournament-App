package config

import (
	"github.com/joho/godotenv"
	"log"
	"os"
	"strconv"
)

func Load() int {
	err := godotenv.Load()

	if err != nil {
		log.Fatal("Error loading .env file")
	}

	PORT := os.Getenv("PORT")
	result, err := strconv.Atoi(PORT)

	return result
}
