package database

import (
	"fmt"
	"log"
	"server/cmd/config"
	"strconv"

	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

func ConnectDB() {
	var err error

	dbHost := config.Config("DB_HOST")
	p := config.Config("DB_PORT")
	dbPort, err := strconv.ParseUint(p, 10, 32)
	dbUser := config.Config("DB_USER")
	dbPassword := config.Config("DB_PASSWORD")
	dbName := config.Config("DB_NAME")

	if err != nil {
		log.Fatal("failed to parse database port")
	}

	dsn := fmt.Sprintf("host=%s port=%d user=%s password=%s dbname=%s sslmode=disable", dbHost, dbPort, dbUser, dbPassword, dbName)
	_, err = gorm.Open(postgres.Open(dsn), &gorm.Config{})

	if err != nil {
		log.Fatal("failed to connect database")
	}

	fmt.Print("Connection opened to database")

}
