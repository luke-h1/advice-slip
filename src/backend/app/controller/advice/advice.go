package controller

import (
	"encoding/json"
	"net/http"

	"github.com/luke-h1/advice-slip/model"
)

func GetAllAdvice(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")

	advices, err := model.GetAllAdvice()

	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		w.Write([]byte(err.Error()))
	} else {
		w.WriteHeader(http.StatusOK)
		json.NewEncoder(w).Encode(advices)
	}
}
