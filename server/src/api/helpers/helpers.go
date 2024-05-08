package helpers

import (
	"encoding/json"
	"log"
	"net/http"
)

func RootHandler(w http.ResponseWriter, r *http.Request) {
	log.Println("Welcome to homepage!")
}

func TestHandler(w http.ResponseWriter, r *http.Request) {

	w.WriteHeader(http.StatusCreated)
	w.Header().Set("Content-Type", "application/json")

	resp := make(map[string]string)
	resp["message"] = "Testing"

	jsonResp, err := json.Marshal(resp)

	if err != nil {
		log.Fatalf("Error happened in JSON marshal. Err %s", err)
	}

	w.Write(jsonResp)
	return
}
