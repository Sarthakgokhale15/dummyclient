import React, { Component } from 'react';
import './App.css';
import Home from './Home';
import data from './data/data'
import { CSSTransition } from "react-transition-group";

// class component
class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      front:true,
      appearHome: true,
      property: data.properties[0]
    }
  }
  handleFront=()=>{
    if(this.state.front){
      this.nextProperty();
      this.state.front=false;
    }
    else{
      this.state.front=true;
    }
  }

  toggleAppear = () => {
    this.setState({
      appearHome: !this.state.appearHome
    })
  }

  nextProperty = () => {
    const newIndex = this.state.property.index+1;
    this.setState({
      property: data.properties[newIndex]
    })
  }

  prevProperty = () => {
    const newIndex = this.state.property.index-1;
    this.setState({
      front: false
    })
    this.setState({
      property: data.properties[newIndex]
    })
    this.setState({
      front:true
    })
  }

  render() {
    const {appearHome, property} = this.state;
    return (
      <div className="App">
        {/* <button onClick={() => this.toggleAppear()}>Appear: {`${appearHome}`}</button>
        <button onClick={() => this.nextProperty()} disabled={property.index === data.properties.length-1}>Next</button>
        <button onClick={() => this.prevProperty()} disabled={property.index === 0}>Prev</button> */}

        <CSSTransition
          in={appearHome}
          appear={true}
          timeout={1000}
          classNames="fade"
        >
          <div onClick={this.handleFront}>
          <Home property={property} onClickCallback={() => this.prevProperty()}/>
          </div>
        </CSSTransition>
      </div>
    );
  }
}

export default App;