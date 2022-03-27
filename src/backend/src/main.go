package main

import (
	"github.com/luke-h1/advice-slip/controller"
	"github.com/luke-h1/advice-slip/model"
)

func main() {
	model.Init()
	controller.Start()
}
