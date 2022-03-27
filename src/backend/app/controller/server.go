package controller

import (
	"fmt"
	"net/http"

	"github.com/gorilla/mux"
	controller "github.com/luke-h1/advice-slip/controller/advice"
)

var router *mux.Router

func initHandlers() {
	router.HandleFunc("/api/advices", controller.GetAllAdvice).Methods("GET")
}

func Start() {
	router = mux.NewRouter().StrictSlash(true)
	initHandlers()
	http.ListenAndServe(":8050", router)
	fmt.Printf("Router initialized & listening on port 8050\n")
}
