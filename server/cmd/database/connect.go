package database

import (
	"fmt"
	"log"
	"server/cmd/config"
	"server/cmd/model"
	"strconv"

	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

func ConnectDB() {
	var err error

	// TODO: Возвращать при запросе конфига все поля, чтобы обращаться к файлу 1 раз
	dbHost := config.Config("DB_HOST")
	p := config.Config("DB_PORT")
	dbPort, err := strconv.ParseUint(p, 10, 32)
	dbUser := config.Config("POSTGRES_USER")
	dbPassword := config.Config("POSTGRES_PASSWORD")
	dbName := config.Config("POSTGRES_DB")

	if err != nil {
		log.Fatal("\nfailed to parse database port\n")
	}

	dsn := fmt.Sprintf("host=%s port=%d user=%s password=%s dbname=%s sslmode=disable", dbHost, dbPort, dbUser, dbPassword, dbName)
	DB, err = gorm.Open(postgres.Open(dsn), &gorm.Config{})

	if err != nil {
		log.Fatal("\nfailed to connect database\n")
	}

	fmt.Print("\nConnection opened to database\n")
	DB.AutoMigrate(&model.UserModel{})
	fmt.Print("Database Migrated\n")
}
