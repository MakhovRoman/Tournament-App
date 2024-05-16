package database

import (
	"log"

	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
)

type User struct {
	gorm.Model
	Login    string
	Password string
}

var UserDataBase *gorm.DB

func Connect() {
	db, err := gorm.Open(sqlite.Open("users.db"), &gorm.Config{})

	if err != nil {
		panic("failed to connect database")
	}

	db.AutoMigrate(&User{})

	log.Println("connect to User DB")

	UserDataBase = db
}
