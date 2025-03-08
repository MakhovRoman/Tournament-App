package config

import (
	"log"
	"os"
	"regexp"

	"github.com/joho/godotenv"
)

type Config struct {
	DB_HOST           string
	DB_PORT           string
	POSTGRES_USER     string
	POSTGRES_PASSWORD string
	POSTGRES_DB       string
	SECRET            string
}

func GetConfig() Config {
	const projectDirName = "Tournament-App"
	configFields := [6]string{
		"DB_HOST",
		"DB_PORT",
		"POSTGRES_USER",
		"POSTGRES_PASSWORD",
		"POSTGRES_DB",
		"SECRET",
	}

	result := Config{}

	projectName := regexp.MustCompile(`^(.*` + projectDirName + `)`)
	currentWorkDirectory, _ := os.Getwd()
	rootPath := projectName.Find([]byte(currentWorkDirectory))

	// load .env file
	err := godotenv.Load(string(rootPath) + `/.env`)

	if err != nil {
		log.Fatalf("err loading: %v", err)
	}

	for _, key := range configFields {
		value, exec := os.LookupEnv(key)

		if !exec {
			log.Fatal("err loading env variables")
			continue
		}

		switch key {
		case "DB_HOST":
			result.DB_HOST = value
		case "DB_PORT":
			result.DB_PORT = value
		case "POSTGRES_USER":
			result.POSTGRES_USER = value
		case "POSTGRES_PASSWORD":
			result.POSTGRES_PASSWORD = value
		case "POSTGRES_DB":
			result.POSTGRES_DB = value
		case "SECRET":
			result.SECRET = value
		default:
			log.Printf("Warning: unknown environment variable %s\n", key)
		}
	}

	return result
}
