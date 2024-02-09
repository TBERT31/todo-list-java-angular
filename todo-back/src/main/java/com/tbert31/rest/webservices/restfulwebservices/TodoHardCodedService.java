package com.tbert31.rest.webservices.restfulwebservices;

import org.apache.catalina.User;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class TodoHardCodedService {

    private static List<Todo> todos = new ArrayList<>();
    private static int idCounter = 0;

    static {
        todos.add(new Todo(++idCounter, "tbert31", "Learn to dance", new Date(), false));
        todos.add(new Todo(++idCounter, "tbert31", "Learn about MS", new Date(), false));
        todos.add(new Todo(++idCounter, "tbert31", "Learn about Angular", new Date(), false));
    }

    public List<Todo> findAll(){
        return todos;
    }
}
