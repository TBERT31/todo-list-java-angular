package com.tbert31.rest.webservices.restfulwebservices;


import org.springframework.web.bind.annotation.*;

@RestController
public class HelloWorldController {

    @GetMapping(path="/hello-world")
    public String helloWorld(){
        return "Hello World";
    }

    @GetMapping(path="/hello-world/path-variable/{name}")
    public HelloWorldBean helloWorldPathVariable(@PathVariable String name){
        return new HelloWorldBean(String.format("Hello World, %s", name));
    }

}
