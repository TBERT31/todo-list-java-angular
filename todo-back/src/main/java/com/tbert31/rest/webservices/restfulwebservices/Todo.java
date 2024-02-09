package com.tbert31.rest.webservices.restfulwebservices;

import java.util.Date;

public class Todo {
    public long id;

    public String description;
    public String user;
    public Date targetDate;
    public boolean isDone;

    public Todo(long id, String description, String user, Date targetDate, boolean isDone) {
        this.id = id;
        this.description = description;
        this.user = user;
        this.targetDate = targetDate;
        this.isDone = isDone;
    }


    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Date getTargetDate() {
        return targetDate;
    }

    public void setTargetDate(Date targetDate) {
        this.targetDate = targetDate;
    }

    public boolean isDone() {
        return isDone;
    }

    public void setDone(boolean done) {
        isDone = done;
    }

    public String getUser() {
        return user;
    }

    public void setUser(String user) {
        this.user = user;
    }
}
