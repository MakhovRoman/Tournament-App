package db

import (
	"fmt"
	"os/user"
	"server/config"

	"github.com/labstack/echo/v4"
	"gorm.io/driver/postgres"

	"gorm.io/gorm"
)

var db *gorm.DB
var err error

func Init(e *echo.Echo, config config.Config) {
	dsn := fmt.Sprintf("host=%s user=%s password=%s dbname=%s port=%s sslmode=disable", config.DB_HOST, config.POSTGRES_USER, config.POSTGRES_PASSWORD, config.POSTGRES_DB, config.DB_PORT)
	db, err = gorm.Open(postgres.Open(dsn), &gorm.Config{})

	// Логируем ошибку при подключении
	if err != nil {
		panic("failed to connect to database")
	}

	// Автоматическая миграция
	db.AutoMigrate(&user.User{})

	// Логируем успешное подключение
	e.Logger.Info("Successfully connected to the database")
}

func GetDB() *gorm.DB {
	return db
}
