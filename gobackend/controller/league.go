package controller

import (
	"encoding/json"
	"fmt"
	"net/http"

	"kyros/db"
	"kyros/model"
	"kyros/response"

	"github.com/satori/go.uuid"
)

type createLeagueDto struct {
	Name         string `json:"name"`
	Participants int    `json:"participants"`
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
	_, err := db.Db.Exec("insert into league (id, name, participants, admin) values($1, $2, $3, $4)", league.Id, league.Name, league.Participants, league.Admin)
	if err != nil {
		fmt.Printf("Error creating the league %v\n", err)
		response.BadRequest(w, "Error creating the league")
		return
	}

	w.WriteHeader(http.StatusCreated)
	json.NewEncoder(w).Encode(league)
}
