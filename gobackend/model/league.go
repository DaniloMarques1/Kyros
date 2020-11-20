package model

import "github.com/satori/go.uuid"

type League struct {
	Id           uuid.UUID `json:"id"`
	Name         string    `json:"name"`
	Participants int       `json:"participants"`
	Admin        string    `json:"admin_id"`
}
