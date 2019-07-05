import React, { Component } from 'react';
import AppNavbar from './AppNavbar';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import './App.css';


class Home extends Component {
    render() {

        return (
            <div>
                <AppNavbar />
                <div className="container fluid mx-auto" id="test">
                    <div className="innerContainer mx-auto">
                        <div className="row" id="text">
                            <h1 className="text-center mx-auto">imagify.</h1>
                        </div>
                        <div className="row text-center mx-auto text-p-color">
                            <p>welcome to the imagify. website where you can upload pictures to showcase beauties of our world.</p>
                        </div>
                        <div className="row text-center mx-auto text-p-color">
                            <p>enjoy your stay and make sure to upload as much as you wish because why not?</p>
                        </div>
                        <div className="row" id="lower">
                            <div className="col text-center">
                                <Button className="btn btn-light custom-btn2" tag={Link} to="/images">Go to Images</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;