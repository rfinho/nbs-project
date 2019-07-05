import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import ImageService from './service/ImageService';
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';
import AppNavbar from './AppNavbar';
//import TodoComponent from './component/TodoComponent';

class ImageEdit extends Component {

    editedImage = {
        title: '',
        description: '',
        link: ''
    };

    constructor(props) {
        super(props);

        this.state = {
            image: this.editedImage,

        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }


    // fetchPets = () => {
    //     fetch(`pets/${this.props.match.params.id}`)
    //         .then(response => {
    //             console.log("Response is " + response);
    //             this.setState({
    //                 pet: response.data,
    //                 isLoading: false
    //             })
    //         })
    // }


    componentDidMount() {
        try {
            //this.fetchPets();
            const imageId = (`images/${this.props.match.params.id}`);
            //console.log("got id: " + petId);
            this.setState({ image: imageId });
        } catch (error) {
            console.log(error);
            this.props.history.push("/");
        }
    }

    handleChange = event => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        let image = { ...this.state.image };
        image[name] = value;
        this.setState({ image });
    }

    handleSubmit = event => {
        event.preventDefault();

        const { image } = this.state;

        const imageId = this.props.match.params.id;
        ImageService.executePutService(imageId, image);
        this.props.history.push('/images');

    }

    // updatePet = (id) => {
    //     const { pet } = this.state;
    //     TodoService.executePutService(id)
    //         .then(() => {
    //             let updatedPets = pet
    //             this.setState({
    //                 pets: updatedPets,

    //             })
    //         });
    //}

    render() {

        const index = this.props.images.findIndex(item => item._id === this.props.match.params.id);
        const title = this.props.images[index].title;

        return <div>
            <AppNavbar />
            <Container>
                <h2>{title}</h2>
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label>Title</Label>
                        <Input type="text" name="title" id="title" placeholder="Type title..." required
                            onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="breed">Description</Label>
                        <Input type="textarea" name="description" id="description" placeholder="Type description..." required
                            onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="link">Link</Label>
                        <Input type="text" name="link" id="link" placeholder="Type link..." required
                            onChange={this.handleChange} />
                    </FormGroup>

                    <FormGroup>
                        <Button color="primary" type="submit">Save</Button>{' '}
                        <Button color="secondary" tag={Link} to="/images">Cancel</Button>
                    </FormGroup>
                </Form>
            </Container>
        </div >
    }
}

export default withRouter(ImageEdit);