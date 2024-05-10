package main

import (
	"log"
	"net/http"
)

func handleBaseRoute(w http.ResponseWriter, r *http.Request) {
	log.Println("response to my server")
}

func main() {
	http.HandleFunc("/", handleBaseRoute)

	http.ListenAndServe(":8080", nil)
}
