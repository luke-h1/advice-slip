package model

import (
	"database/sql"
	"fmt"
	"os"

	"github.com/joho/godotenv"
)

var db *sql.DB

type connection struct {
	Host     string
	Port     string
	User     string
	Password string
	DBName   string
}

func connToString(info connection) string {
	return fmt.Sprintf("host=%s port=%s user=%s password=%s dbname=%s sslmode=disable", info.Host, info.Port, info.User, info.Password, info.DBName)
}

func Init() {
	err := godotenv.Load("config/.env")

	if err != nil {
		fmt.Printf("Error loading .env file: %s\n", err.Error())
		return
	}

	conn := connection{
		Host:     os.Getenv("POSTGRES_URL"),
		Port:     os.Getenv("POSTGRES_PORT"),
		User:     os.Getenv("POSTGRES_USER"),
		Password: os.Getenv("POSTGRES_PASSWORD"),
		DBName:   os.Getenv("POSTGRES_DB"),
	}

	db, err = sql.Open("postgress", connToString(conn))

	if err != nil {
		fmt.Printf("Error connecting to database: %s\n", err.Error())
		return
	} else {
		fmt.Println("Connected to database")
	}

	err = db.Ping()

	if err != nil {
		fmt.Printf("Error pinging database: %s\n", err.Error())
		return
	} else {
		fmt.Println("Database is available")
	}
}
