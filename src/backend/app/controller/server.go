package controller

import (
	"fmt"
	"net/http"

	"github.com/gorilla/mux"
	controller "github.com/luke-h1/advice-slip/controller/advice"
	"github.com/rs/cors"
)

var router *mux.Router

func initHandlers() {
	router.HandleFunc("/api/advices", controller.GetAllAdvice).Methods("GET")
	router.HandleFunc("/api/advice/{id}", controller.GetAdvice).Methods("GET")
	router.HandleFunc("/api/advice", controller.CreateAdvice).Methods("POST")
	router.HandleFunc("/api/advice/{id}", controller.UpdateAdvice).Methods("PUT")
	router.HandleFunc("/api/advice/{id}", controller.DeleteAdvice).Methods("DELETE")
}

func Start() {
	router = mux.NewRouter().StrictSlash(true)

	c := cors.New(cors.Options{
		AllowedOrigins: []string{"http://localhost:3000"},
		AllowedMethods: []string{"GET", "POST", "PUT", "DELETE"},
	})

	initHandlers()

	http.ListenAndServe(":8050", c.Handler(router))

	fmt.Printf("Router initialized & listening on port 8050\n")
}
