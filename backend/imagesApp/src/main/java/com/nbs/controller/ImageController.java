package com.nbs.controller;

import java.util.List;

import javax.validation.Valid;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.nbs.domain.Image;

import com.nbs.repository.ImageRepository;;

@RequestMapping("/images")
@RestController
public class ImageController {

    @Autowired
    public ImageRepository imageRepository;

    @RequestMapping(value = "/", method = RequestMethod.GET)
    public List<Image> getAllImages() {
        System.out.println("get all images and display them!");
        return imageRepository.findAll();
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public Image getImageById(@PathVariable("id") ObjectId id) {
        System.out.println("find image by unique ID!");
        return imageRepository.findBy_id(id);
    }

    @PostMapping(value = "/")
    public Image createImage(@Validated @RequestBody Image image) {
        System.out.println("adding new image!");
        image.set_id(ObjectId.get());
        imageRepository.save(image);
        return image;
    }

    @PutMapping(value = "/{id}")
    public void modifyImageById(@PathVariable("id") ObjectId id, @Valid @RequestBody Image image) {
        System.out.println("updating existing image!");
        image.set_id(id);
        imageRepository.save(image);
    }

    @DeleteMapping(value = "/{id}")
    public void deleteImage(@PathVariable ObjectId id) {
        System.out.println("deleting existing image!");
        imageRepository.delete(imageRepository.findBy_id(id));
    }
}
