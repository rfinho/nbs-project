package com.nbs.controller;

import static org.junit.Assert.assertEquals;
//import static org.junit.Assert.assertThat;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;
//import static org.mockito.Mockito.times;

// import static org.hamcrest.Matchers.*;
// import static org.hamcrest.MatcherAssert.assertThat;

// import java.util.Arrays;
// import java.util.List;

import com.nbs.domain.Image;
import com.nbs.repository.ImageRepository;

import org.bson.types.ObjectId;
import org.junit.Before;
import org.junit.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

/**
 * MockitoControllerTest
 */

public class MockitoControllerTest {

    @InjectMocks
    private ImageController imageController;

    @Mock
    private ImageRepository imageRepository;

    @Before
    public void init() {
        MockitoAnnotations.initMocks(this);
    }

    @Test
    public void testGetImageById() {

        ObjectId id = new ObjectId("5d1df653281b3d4fa4030a3a");
        System.out.println("id is: " + id);

        Image img = new Image();

        img.set_id(id);

        when(imageRepository.findBy_id(id)).thenReturn(img);

        Image image = imageController.getImageById(id);

        verify(imageRepository).findBy_id(id);

        assertEquals(id.toHexString(), image.get_id());

        // assertThat(image.get_id(), is(id.toHexString()));

    }

    // @Test
    // public void testGetAllObjects() {

    // ObjectId id = new ObjectId("5d1df653281b3d4fa4030a3a");
    // Image obj = new Image();
    // obj.set_id(id);

    // obj.setTitle("titleValue");
    // when(imageRepository.findAll()).thenReturn(Arrays.asList(obj));
    // List<Image> actual = imageController.getAllImages();
    // assertThat(actual).hasSize(1);
    // }

    // @Test
    // public void testDeleteObject() {

    // ObjectId id = new ObjectId("5d1df653281b3d4fa4030a3a");
    // Image deleted = new Image();
    // deleted.set_id(id);
    // when(imageRepository.findBy_id(id)).thenReturn(deleted);

    // imageController.deleteById(id);
    // // imageRepository.delete(id);

    // verify(imageRepository, times(1)).deleteById(id);
    // }

}