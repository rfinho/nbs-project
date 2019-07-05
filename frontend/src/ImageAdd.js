import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ImageService from './service/ImageService';
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';
import AppNavbar from './AppNavbar';

class ImageAdd extends Component {

    newImage = {
        title: '',
        description: '',
        link: ''
    };

    constructor(props) {
        super(props);
        this.state = {
            image: this.newImage
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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

        ImageService.executePostService(image)
            .then(() => {
                this.props.history.push('/images')
            })
    }

    render() {
        const title = <h2 color="#563d7c" > {'Add image'}</h2 >;

        return <div>
            <AppNavbar />
            <Container>
                {title}
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label>Title</Label>
                        <Input type="text" name="title" id="title" placeholder="Type title..." required
                            onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="description">Description</Label>
                        <Input type="textarea" name="description" id="description" placeholder="Type description..." required
                            onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="link">Link</Label>
                        <Input type="text" name="link" id="link" placeholder="Type link..." required
                            onChange={this.handleChange} />
                    </FormGroup>

                    <FormGroup>
                        <Button color="primary" type="submit">Add</Button>{' '}
                        <Button color="secondary" tag={Link} to="/images">Cancel</Button>
                    </FormGroup>
                </Form>
            </Container>
        </div>
    }
}

export default (ImageAdd);