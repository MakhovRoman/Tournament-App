package config

import (
	"fmt"
	"log"
	"os"
	"server/cmd/model"

	"github.com/joho/godotenv"
)

func LoadConfig() *model.ConfigParams {
	err := godotenv.Load()
	if err != nil {
		log.Fatalf("err loading: %v", err)
	}

	HOST, exHost := os.LookupEnv("HOST")
	PORT, exPort := os.LookupEnv("PORT")

	if !exHost || !exPort {
		log.Fatal("err loading env variables")
	}
	fmt.Print(HOST)
	result := &model.ConfigParams{
		HOST: HOST,
		PORT: PORT,
	}

	return result
}
