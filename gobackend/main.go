package main

import (
	"fmt"
	"net/http"

	"kyros/controller"
	"kyros/db"

	"github.com/gorilla/mux"
	_ "github.com/lib/pq"
)

const (
	table_user = `
        CREATE TABLE IF NOT EXISTS users(
            id UUID PRIMARY KEY,
            name VARCHAR(50) NOT NULL,
            email VARCHAR(60) NOT NULL,
            password VARCHAR(100) NOT NULL
        )
    `
	table_league = `
        CREATE TABLE IF NOT EXISTS league(
            id UUID PRIMARY KEY,
            name varchar(50) not null,
            participants integer not null,
            admin uuid,
            foreign key(admin) references users(id)
        )
    `
)

func main() {
	var err error
	if err = db.Connect(); err != nil {
		fmt.Println("cannot open connection to database")
	}
	createTableStr := fmt.Sprintf("%s; %s;", table_user, table_league)
	_, err = db.Db.Exec(createTableStr)
	if err != nil {
		fmt.Printf("Error creating the tables %v", err)
	}

	router := mux.NewRouter()
    route(router)
	if err = http.ListenAndServe(":8080", router); err != nil {
		fmt.Println(err)
	}
}

func route(router *mux.Router) {
    // user
	router.HandleFunc("/user", controller.SignUp).Methods(http.MethodPost)
	router.HandleFunc("/session", controller.SignIn).Methods(http.MethodPost)

    // league
	router.HandleFunc("/league", controller.CreateLeague).Methods(http.MethodPost)
	router.HandleFunc("/league", controller.GetLeagues).Methods(http.MethodGet)
	router.HandleFunc("/myleagues", controller.GetMyLeagues).Methods(http.MethodGet)
	router.HandleFunc("/league/{pomodoro_id}", controller.RemoveLeague).Methods(http.MethodDelete)
}
