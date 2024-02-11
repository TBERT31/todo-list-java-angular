package com.tbert31.rest.webservices.restfulwebservices;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

import java.util.Date;
import java.util.Objects;

@Entity
public class Todo {
    @Id
    @GeneratedValue
    public Long id;

    public String description;
    public String user;
    public Date targetDate;
    public boolean isDone;

    protected Todo(){

    }

    public Todo(Long id, String description, String user, Date targetDate, boolean isDone) {
        this.id = id;
        this.description = description;
        this.user = user;
        this.targetDate = targetDate;
        this.isDone = isDone;
    }


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
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

    public void setDone(boolean isDone) {
        this.isDone = isDone;
    }

    public String getUser() {
        return user;
    }

    public void setUser(String user) {
        this.user = user;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Todo todo = (Todo) o;
        return id == todo.id;
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }
}
