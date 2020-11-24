package controller

import (
	"bytes"
	"net/http"
	"net/http/httptest"
	"testing"

	"kyros/db"

	_ "github.com/lib/pq"
)

// @@@ How good is this?
func TestSignIn(t *testing.T) {
    connect(t)
    signInDto := `{"email":"fitz@gmail.com", "password":"1234"}`

    req, err := http.NewRequest("POST", "/session", bytes.NewReader([]byte(signInDto)))
    if err != nil {
        t.Fatal(err)
    }

    rr := httptest.NewRecorder()
    handler := http.HandlerFunc(SignIn)
    handler.ServeHTTP(rr, req)
    if status := rr.Code; status != http.StatusOK {
        t.Errorf("Error sign in. Expect %v, got %v", http.StatusOK, status)
    }
}

// start a connection to the database
func connect(t *testing.T) {
    if err := db.Connect(); err != nil {
        t.Fatalf("Failed to connect to database %v", err)
    }
    
}
