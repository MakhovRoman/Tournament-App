package config

import (
	"log"
	"os"

	"github.com/joho/godotenv"
)

func Config(key string) string {
	// load .env file
	err := godotenv.Load()

	if err != nil {
		log.Fatalf("err loading: %v", err)
	}

	value, exec := os.LookupEnv(key)

	if !exec {
		log.Fatal("err loading env variables")
	}

	return value
}
