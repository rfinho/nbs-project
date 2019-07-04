package com.nbs.repository;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;

import com.nbs.domain.Image;;

public interface ImageRepository extends MongoRepository<Image, Long> {

    Image findBy_id(ObjectId _id);
}
