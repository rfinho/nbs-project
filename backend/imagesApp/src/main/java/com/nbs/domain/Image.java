package com.nbs.domain;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;

public class Image {

    @Id
    private ObjectId _id;

    private String title;
    private String description;
    private String link;

    public Image() {
    }

    public Image(ObjectId _id, String title, String description, String link) {
        super();
        this._id = _id;
        this.title = title;
        this.description = description;
        this.link = link;
    }

    public String get_id() {
        return _id.toHexString();
    }

    public void set_id(ObjectId _id) {
        this._id = _id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getLink() {
        return link;
    }

    public void setLink(String link) {
        this.link = link;
    }

}
