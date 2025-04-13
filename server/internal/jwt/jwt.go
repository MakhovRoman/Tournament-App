package jwt

import "github.com/dgrijalva/jwt-go"

type jwtCustomClaims struct {
	UserName string `json:"username"`
	Role string `json:"role"`
	jwt.StandardClaims
}

