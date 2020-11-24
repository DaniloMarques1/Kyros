package controller

import (
	"encoding/json"
	"fmt"
	"net/http"

	"kyros/db"
	"kyros/model"
	"kyros/response"

	"github.com/gorilla/mux"
	"github.com/satori/go.uuid"
)

type createLeagueDto struct {
	Name         string `json:"name"`
	Participants int    `json:"participants"`
}

type adminDto struct {
    Id string `json:"id"`
    Name string `json:"name"`
    Email string `json:"email"`
}

type leagueDto struct {
    Id uuid.UUID `json:"id"`
    Name string `json:"name"`
    Participants string `json:"participants"`
    Admin adminDto `json:"admin,omitempty"`
}

func CreateLeague(w http.ResponseWriter, r *http.Request) {
	user_id := r.Header.Get("user_id")
	leagueDto := createLeagueDto{}
	json.NewDecoder(r.Body).Decode(&leagueDto)
	league := model.League{
		Id:           uuid.NewV4(),
		Name:         leagueDto.Name,
		Participants: leagueDto.Participants,
		Admin:        user_id,
	}
	_, err := db.Db.Exec("INSERT INTO league (id, name, participants, admin) VALUES($1, $2, $3, $4)", league.Id, league.Name, league.Participants, league.Admin)
	if err != nil {
		fmt.Printf("Error creating the league %v\n", err)
		response.BadRequest(w, "Error creating the league")
		return
	}

	w.WriteHeader(http.StatusCreated)
	json.NewEncoder(w).Encode(league)
}

// get all leagues i can participate
func GetLeagues(w http.ResponseWriter, r *http.Request) {
    user_id := r.Header.Get("user_id")
    rows, err := db.Db.Query(`SELECT l.id, l.name, l.participants, u.id, u.name, u.email 
                            FROM league l 
                            JOIN users as u ON l.admin = u.id
                            WHERE admin != $1`, user_id)
    if err != nil {
        response.BadRequest(w, "Unexpected error")
        return
    }

    var leagues []leagueDto
    // @@@
    for rows.Next() {
        league := leagueDto{}
        admin := adminDto{}
        rows.Scan(&league.Id, &league.Name, &league.Participants, &admin.Id, &admin.Name, &admin.Email)
        league.Admin = admin
        leagues = append(leagues, league)
    }

    json.NewEncoder(w).Encode(leagues)
}

// leagues i created
func GetMyLeagues(w http.ResponseWriter, r *http.Request) {
    user_id := r.Header.Get("user_id")
    rows, err := db.Db.Query(`SELECT l.id, l.name, l.participants, a.id, a.name, a.email 
                FROM league AS l 
                JOIN users AS a ON l.admin = a.id
                WHERE admin = $1`, user_id)
    if err != nil {
        response.BadRequest(w, "Unexpected error")
        return
    }
    var leagues []leagueDto
    for rows.Next() {
        var admin adminDto
        var league leagueDto
        rows.Scan(&league.Id, &league.Name, &league.Participants, &admin.Id, &admin.Name, &admin.Email)
        league.Admin = admin
        leagues = append(leagues, league)
    }

    json.NewEncoder(w).Encode(leagues)
}

func RemoveLeague(w http.ResponseWriter, r *http.Request) {
    user_id := r.Header.Get("user_id")
    params := mux.Vars(r)
    pomodoro_id := params["pomodoro_id"]
    result, err := db.Db.Exec("delete from league where admin = $1 and id = $2", user_id, pomodoro_id)

    if err != nil {
        response.BadRequest(w, "Task not found")
        return
    }

    if rows, err := result.RowsAffected(); err != nil || rows == 0 {
        response.BadRequest(w, "Task not found")
        return
    }

    json.NewEncoder(w).Encode(map[string]string{"message":"Deleted with success"})
}
