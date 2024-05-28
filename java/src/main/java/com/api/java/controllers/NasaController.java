package com.api.java.controllers;

import com.api.java.models.APOD;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.client.RestTemplate;

import java.io.IOException;
import java.io.InputStream;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;

@RestController
@CrossOrigin("*")
@RequestMapping("/nasa")
public class NasaController {

    @GetMapping
    public ResponseEntity<APOD> getNasaPicture() {

        // Create a neat value object to hold the URL
        URL url = null;
        try {
            url = new URL("https://api.nasa.gov/planetary/apod?api_key=5sSMgTDcT2QZDyWbfmf9E7BqQtmoDHyr8rFNLvjg");
        } catch (MalformedURLException e) {
            throw new RuntimeException(e);
        }

// Open a connection(?) on the URL(??) and cast the response(???)
        HttpURLConnection connection = null;
        try {
            connection = (HttpURLConnection) url.openConnection();
        } catch (IOException e) {
            throw new RuntimeException(e);
        }

// Now it's "open", we can set the request method, headers etc.
        connection.setRequestProperty("accept", "application/json");

// This line makes the request
        InputStream responseStream = null;
        try {
            responseStream = connection.getInputStream();
        } catch (IOException e) {
            throw new RuntimeException(e);
        }

// Manually converting the response body InputStream to APOD using Jackson
        ObjectMapper mapper = new ObjectMapper();
        APOD apod = null;
        try {
            apod = mapper.readValue(responseStream, APOD.class);
        } catch (IOException e) {
            throw new RuntimeException(e);
        }


        return ResponseEntity.status(HttpStatus.OK).body(apod);
    }

}
