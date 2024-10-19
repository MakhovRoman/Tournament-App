package config

import (
	"log"
	"os"
	"regexp"

	"github.com/joho/godotenv"
)

const projectDirName = "Tournament-App"

func Config(key string) string {
	projectName := regexp.MustCompile(`^(.*` + projectDirName + `)`)
	currentWorkDirectory, _ := os.Getwd()
	rootPath := projectName.Find([]byte(currentWorkDirectory))

	// load .env file
	err := godotenv.Load(string(rootPath) + `/.env`)

	if err != nil {
		log.Fatalf("err loading: %v", err)
	}

	value, exec := os.LookupEnv(key)

	if !exec {
		log.Fatal("err loading env variables")
	}

	return value
}
