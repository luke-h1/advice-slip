package model

import "database/sql"

var db *sql.DB

type connection struct {
	Host     string
	port     string
	User     string
	Password string
}

func Init() {

}
