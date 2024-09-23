package database

import (
	"fmt"
	"log"
	"time"

	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

type User struct {
	gorm.Model
	ID        uint      `json:"id" gorm:"primaryKey"`
	Login     string    `json:"login" gorm:"login"`
	Password  string    `json:"password" gorm:"password"`
	CreatedAt time.Time `json:"created_at" gorm:"created_at"`
}

var UserDataBase *gorm.DB

func Connect() {
	dsn := "host=localhost user=admin password=admin_1988 dbname=users port=8080 sslmode=disable"

	db, err := gorm.Open(postgres.Open(dsn), &gorm.Config{})

	if err != nil {
		panic("failed to connect database")
	}

	db.AutoMigrate(&User{})
	user := User{ID: 2232432, Login: "admin", Password: "4444", CreatedAt: time.Now()}
	db.Create(&user)

	log.Println("connect to User DB")
	fmt.Println(db.Statement.TableExpr.Vars...)

	UserDataBase = db
}
