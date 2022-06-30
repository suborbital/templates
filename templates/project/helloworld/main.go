package main

import (
	"bytes"
	"errors"
	"fmt"
	"net/http"

	"github.com/suborbital/reactr/api/tinygo/runnable"
	"github.com/suborbital/reactr/api/tinygo/runnable/req"
)

type httpHandler struct{}

func (h httpHandler) Run(input []byte) ([]byte, error) {
	request, err := http.NewRequest(req.Method(), req.URL(), bytes.NewBuffer(req.Body()))
	if err != nil {
		return nil, errors.New("failed to http.NewRequest:" + err.Error())
	}

	writer := &fakeWriter{
		buffer:       bytes.NewBuffer([]byte{}),
		responseCode: 200,
	}

	Handlehelloworld(request, writer)

	if writer.responseCode > 299 {
		return nil, fmt.Errorf("failed with status code: %d, message: %s", writer.responseCode, writer.buffer.String())
	}

	return writer.buffer.Bytes(), nil
}

type fakeWriter struct {
	buffer       *bytes.Buffer
	responseCode int
}

// Header returns nil
func (f *fakeWriter) Header() http.Header {
	return nil
}

// Write writes the provided contents to the buffer
func (f *fakeWriter) Write(contents []byte) (int, error) {
	f.buffer.Write(contents)
	return len(contents), nil
}

// WriteHeader writes the response code
func (f *fakeWriter) WriteHeader(statusCode int) {
	f.responseCode = statusCode
}

// initialize runnable, do not edit //
func main() {
	runnable.Use(httpHandler{})
}
