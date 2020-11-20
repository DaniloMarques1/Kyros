package db

import "database/sql"

var Db *sql.DB

func Connect() error {
	config_str := "host=0.0.0.0 dbname=gokyros user=fitz password=123Mudar port=5432 sslmode=disable"
	var err error
	Db, err = sql.Open("postgres", config_str)
	if err != nil {
		return err
	}

	return nil
}
