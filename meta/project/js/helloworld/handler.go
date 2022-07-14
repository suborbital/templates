package main

import "net/http"


// Handlehelloworld handles the incoming request
func Handlehelloworld(r *http.Request, w http.ResponseWriter) {

	w.Write([]byte("hello, world!"))
}
