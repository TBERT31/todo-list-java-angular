package com.tbert31.rest.webservices.restfulwebservices.helloworld;


import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class HelloWorldController {

    @GetMapping(path="/hello-world")
    public String helloWorld(){
        return "Hello World";
    }

    @GetMapping(path="/hello-world-bean")
    public HelloWorldBean helloWorldBean(){
        return new HelloWorldBean("Hello World - Changed");
    }

    @GetMapping(path="/hello-world/path-variable/{name}")
    public HelloWorldBean helloWorldPathVariable(@PathVariable String name){
        return new HelloWorldBean(String.format("Hello World, %s", name));
    }

}
