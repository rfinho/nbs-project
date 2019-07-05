import React, { Component } from 'react'
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
//import ImageService from './service/ImageService';
import './ImageList.css'
import AppNavbar from './AppNavbar';

class ImageList extends Component {

    state = {
        isLoading: true,
        images: []
    };


    // async componentDidMount() {
    //     await this.fetchImages();
    //     console.log('CDM');
    // }

    // fetchImages = () => {
    //     fetch('/images')
    //         .then(response => response.json())
    //         .then((data) => {
    //             this.setState({ images: data, isLoading: false })
    //         })
    // }


    render() {
        const images = this.props.images || [];

        return (
            <div>
                <AppNavbar />
                <h1 id="heading">Welcome to the world of random images!</h1>
                <div className="row" id="cardContainers">
                    {images.map((image, i) => (
                        <div key={i} className="col-md-6 col-lg-4" id="card-size-control">
                            <div className="card text-white bg-dark text-center" >
                                <img className="card-img-top" src={image.link} alt="hello" width="450px" height="300px" />
                                <div className="card-body">
                                    <h5 className="card-title"> {image.title}</h5>
                                    {/* <h6 className="card-text" >{image.species}</h6> */}
                                    <p className="card-text" >{image.description}</p>
                                    <Button size="md" color="info" tag={Link} to={"/edit-image/" + image._id}>Edit</Button>{'  '}
                                    <Button size="md" color="danger" onClick={() => this.props.deleteImage(image._id)}>Delete</Button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div >
        )
    };
}

export default ImageList