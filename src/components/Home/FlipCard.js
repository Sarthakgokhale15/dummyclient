import React, { Component } from 'react';
import './FlipCard.css';
import Home from './FlippableCard';
import data from '../../data/data'
import { CSSTransition } from "react-transition-group";

// class component
class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      front1:true,

      appearHome1: true,

      property1: data.properties1[0],
 
    }
  }
  handleFront1=()=>{
    if(this.state.front1){
      this.nextProperty1();
      this.state.front1=false;
    }
   
  }

  toggleAppear1 = () => {
    this.setState({
      appearHome1: !this.state.appearHome1
    })
  }

  nextProperty1 = () => {
    const newIndex = this.state.property1.index+1;
    this.setState({
      property1: data.properties1[newIndex]
    })
  }

  prevProperty1 = () => {
    const newIndex = this.state.property1.index-1;
    this.setState({
      front1: false
    })
    this.setState({
      property1: data.properties1[newIndex]
    })
    this.setState({
      front1:true
    })
  }
 
  render() {
    const {appearHome1,appearHome2,appearHome3, property1,property2,property3} = this.state;
    return (
      <div className='main'>
      
      <div className="card2">
        {/* <button onClick={() => this.toggleAppear()}>Appear: {`${appearHome}`}</button>
        <button onClick={() => this.nextProperty()} disabled={property.index === data.properties.length-1}>Next</button>
        <button onClick={() => this.prevProperty()} disabled={property.index === 0}>Prev</button> */}

        <CSSTransition
          in={appearHome1}
          appear={true}
          timeout={1000}
          classNames="fade"
        >
          <div onClick={this.handleFront1}>
          <Home img={this.props.img} property={property1} onClickCallback={() => this.prevProperty1()}/>
          </div>
        </CSSTransition>

      </div>
      
      
      </div>
    );
  }
}

export default App;