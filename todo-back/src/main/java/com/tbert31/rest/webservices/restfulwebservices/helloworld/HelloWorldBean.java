package com.tbert31.rest.webservices.restfulwebservices.helloworld;

public class HelloWorldBean {
    private String message;

    @Override
    public String toString() {
        return String.format("HelloWorldBean [message=%s]", message);
    }

    public String getMessage() {
        return message;
    }

    public HelloWorldBean(String message) {
        this.message = message;
    }

    public void setMessage(String message){
        this.message = message;
    }


}
