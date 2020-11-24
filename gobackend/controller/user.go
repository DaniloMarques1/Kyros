package controller

import (
	"encoding/json"
	"fmt"
	"net/http"

	"kyros/db"
	"kyros/model"
	"kyros/response"

	uuid "github.com/satori/go.uuid"
	"golang.org/x/crypto/bcrypt"
)

type SignUpDto struct {
	Name            string `json:"name"`
	Email           string `json:"email"`
	Password        string `json:"password"`
	ConfirmPassword string `json:"confirmPassword"`
}

type SignInDto struct {
	Email    string `json:"email"`
	Password string `json:"password"`
}

func SignUp(w http.ResponseWriter, r *http.Request) {
    var userDto SignUpDto
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

	_, err := db.Db.Exec("INSERT INTO users(id, name, email, password) VALUES($1, $2, $3, $4)", user.Id, user.Name, user.Email, user.Password)
	if err != nil {
		fmt.Printf("Error creating the user %v\n", err)
		response.BadRequest(w, "Error creating the user")
		return
	}

	w.WriteHeader(http.StatusCreated)
	json.NewEncoder(w).Encode(user)
}

func SignIn(w http.ResponseWriter, r *http.Request) {
	var signIn SignInDto
	json.NewDecoder(r.Body).Decode(&signIn)
	var user model.User
    db.Db.QueryRow("SELECT id, name, email, password FROM users WHERE email = $1", 
        signIn.Email).Scan(&user.Id, &user.Name, &user.Email, &user.Password)
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
    json.NewEncoder(w).Encode(map[string]string{"token": user.Id.String()})
}
