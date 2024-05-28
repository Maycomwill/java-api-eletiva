package com.api.java.controllers;
import com.api.java.models.Pokemon;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.io.InputStream;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;

@CrossOrigin("*")
@RestController
@RequestMapping("/pokemon")
public class PokemonController {

    @GetMapping
    public ResponseEntity<Pokemon> getPokemonPicture(@RequestParam String ref){

        HttpURLConnection connection = getHttpURLConnection(ref);

// This line makes the request
        InputStream responseStream = null;
        try {
            responseStream = connection.getInputStream();
        } catch (IOException e) {
            throw new RuntimeException(e);
        }

// Manually converting the response body InputStream to APOD using Jackson
        ObjectMapper mapper = new ObjectMapper();
        mapper.configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);
        Pokemon pokemon = null;
        try {
            pokemon = mapper.readValue(responseStream, new TypeReference<Pokemon>() {
            });
        } catch (IOException e) {
            throw new RuntimeException(e);
        }

    return ResponseEntity.status(HttpStatus.OK).body(pokemon);

    }

    private static HttpURLConnection getHttpURLConnection(String ref) {


        // Create a neat value object to hold the URL
        URL url = null;
        try {
            url = new URL("https://pokeapi.co/api/v2/pokemon/"+ref);
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
        return connection;
    }
}
