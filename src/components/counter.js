//imrc command
import React, { Component } from "react";
//cc command
class Counter extends Component {
  //after update
  componentDidUpdate(prevProps, prevState) {
    //decide if need to make an ajax call based on object state
    console.log("prevProps", prevProps);
    console.log("prevState", prevState);
    if (prevProps.counter.value !== this.props.counter.value) {
      //make an ajax request to get new data from server
      console.log("ajax");
    }
  }
  //just before component is removed
  componentWillUnmount() {
    console.log("counter gone");
    //opportunity to do cleanup of timers/event listeners to not end up with mem leaks
  }

  state = {
    //controled component - does not have it's own local state recieves all the date from props
    //and raises events when things needed to be changed to parent
    // tags : ['tag1','tag2','tag3'],
    // imageUrl : 'https://picsum.photos/200'
  };

  // constructor(){
  //     super();
  //     this.handleIncrment = this.handleIncrment.bind(this); //return a new instance of handleIncrement function
  //                                     //always refrencing the current counter object
  // }

  styles = {
    fontSize: 20,
    fontWeight: "bold",
  };
  render() {
    // console.log('props',this.props);
    console.log("counter rendered");
    return (
      <div>
        {/* <img src = {this.state.imageUrl} alt = ""></img> */}
        {/* style={{fontSize : 30}} */}
        {this.props.children}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        {/* when you need to pass an argument for event handler use empty arrow function and simply pass an argument */}
        {/*  <button onClick={() => this.handleIncrment(product)}  className="btn btn-secondary btn-sm">Increment</button> */}
        {/* passing a refrence instead of an id */}
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        {/* //the component that owns a piece of the state should be the one modifying it
            //our componenets can raise events onSomeEvent to their parent
            Here we will refrence the prop onDelete which is a function in the parent class */}
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>

        {/* Applying logical and operator to render non boolean values JS engine
            will convert non-empty string to truthy and return second operand */}
        {/* {this.state.tags.length === 0 && 'Please Create A new Tag'} */}

        {/* {this.renderTags()} */}
      </div>
      //can also be React.Fragment
    );
  }

  // renderTags(){
  //     if(this.state.tags.length === 0) return <p> No Tags</p>;
  //     return <ul>{this.state.tags.map(tag => <li key={tag}>{ tag }</li> )}</ul>;
  // }

  //using arrow function is simpler then constructor to define event handlers
  // handleIncrment = () =>{
  //     //console.log(this);
  //     //DO NOT modify state directly
  //     this.setState({value : this.state.value + 1});
  //     //will async call render() sometime in the future
  //     //new VRDOM will be compared to old DOM to find what was modified
  //     //reach into browser DOM and update only the span element that was changed

  //     //obj.method(); this -> obj
  //     //method(); this -> undefined on strict mode solve with constructor/arrow function

  // }

  getBadgeClasses() {
    let classes = "badge m-2 sm ";
    return (classes +=
      this.props.counter.value === 0 ? "bg-warning" : "bg-primary");
  }

  formatCount() {
    const { value: count } = this.props.counter; //destructuring
    return count === 0 ? "Zero" : count;
    //jsx exprssion can be returned as well <h1> zero </h1>
    //treat like normal JS objects
  }
}

export default Counter;
