package controller

import (
	"encoding/json"
	"fmt"
	"net/http"

	"kyros/db"
	"kyros/model"
	"kyros/response"

	"github.com/satori/go.uuid"
	"golang.org/x/crypto/bcrypt"
)

type signUpDto struct {
	Name            string `json:"name"`
	Email           string `json:"email"`
	Password        string `json:"password"`
	ConfirmPassword string `json:"confirmPassword"`
}

type signInDto struct {
	Email    string `json:"email"`
	Password string `json:"password"`
}

func SignUp(w http.ResponseWriter, r *http.Request) {
	userDto := signUpDto{}
	json.NewDecoder(r.Body).Decode(&userDto)

	if userDto.Password != userDto.ConfirmPassword {
		response.BadRequest(w, "Passwords incorrect")
		return
	}
	hashedPassword, _ := bcrypt.GenerateFromPassword([]byte(userDto.Password), bcrypt.MinCost)
	user := model.User{
		Id:       uuid.NewV4(),
		Name:     userDto.Name,
		Email:    userDto.Email,
		Password: hashedPassword,
	}

	_, err := db.Db.Exec("insert into users(id, name, email, password) values($1, $2, $3, $4)", user.Id, user.Name, user.Email, user.Password)
	if err != nil {
		fmt.Printf("Error creating the user %v\n", err)
		response.BadRequest(w, "Error creating the user")
		return
	}

	w.WriteHeader(http.StatusCreated)
	json.NewEncoder(w).Encode(user)
}

func SignIn(w http.ResponseWriter, r *http.Request) {
	signIn := signInDto{}
	json.NewDecoder(r.Body).Decode(&signIn)
	var user model.User
	db.Db.QueryRow("select id, name, email, password from users where email = $1", signIn.Email).Scan(&user.Id, &user.Name, &user.Email, &user.Password)
	if user.Email == "" {
		response.BadRequest(w, "Email invalid")
		return
	}
	if err := bcrypt.CompareHashAndPassword(user.Password, []byte(signIn.Password)); err != nil {
		fmt.Printf("Invalid password %v\n", err)
		response.BadRequest(w, "Password invalid")
		return
	}

	// @@@ return jwt
	json.NewEncoder(w).Encode("Opa")
}
