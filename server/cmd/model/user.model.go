package model

import "gorm.io/gorm"

type UserModel struct {
	gorm.Model

	Username string `gorm:"uniqueIndex;not null" json:"user_name"`
	Email    string `gorm:"uniqueIndex;not null" json:"email"`
	Password string `gorm:"not null" json:"password"`
	Role     string `gorm:"not null" json:"role"`
}
