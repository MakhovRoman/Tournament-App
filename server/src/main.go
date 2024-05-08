package main

import (
	"fmt"
	"log"
	"net/http"
	"server/src/api/helpers"
	"server/src/config"
)

func main() {

	http.HandleFunc("/", helpers.RootHandler)
	http.HandleFunc("/test", helpers.TestHandler)

	PORT := config.Load()

	err := http.ListenAndServe(fmt.Sprintf(":%d", PORT), nil)
	if err != nil {
		log.Fatalf("Iternal error. %s", err)
		return
	}
}
