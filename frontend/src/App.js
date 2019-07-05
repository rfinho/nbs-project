import React, { Component } from 'react';
import './App.css';
import ImageList from './ImageList';
import Home from './Home';
import ImageService from './service/ImageService';
import ImageAdd from './ImageAdd';
import ImageEdit from './ImageEdit';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//import PetsList from './PetsList';
//import TodoContainer from './component/TodoContainer';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      images: [],
      isLoading: false,
    }

  }

  componentDidMount() {
    this.featchImages();
    this.setState({ isLoading: true });
  }


  deleteImage = (id) => {
    ImageService.executeDeleteService(id)
      .then(() => {
        let updatedImages = [...this.state.images].filter(i => i._id !== id);
        this.setState({
          images: updatedImages,
          isLoading: false,
        })
      });
  }

  featchImages() {
    ImageService.executeGetService()
      .then(response => {
        this.setState({
          images: response.data,
          isLoading: false
        })
      })
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route path='/' exact={true} component={Home} />
          <Route path='/images' render={props => <ImageList {...props} images={this.state.images} deleteImage={this.deleteImage.bind(this)} />} />
          <Route path='/add-image' component={ImageAdd} />
          <Route path='/edit-image/:id' render={props => <ImageEdit {...props} images={this.state.images} />} />
        </Switch>
      </Router>
      //<Route path='/pets/:id' component={ImageEdit} />

      // <PetsTest pets={this.state.pets} />
    )
  }
}

export default App;