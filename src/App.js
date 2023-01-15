import "./App.css";
import NavBar from "./components/navbar";
import Counters from "./components/counters";
import React, { Component} from "react";

class App extends Component {
  //Mounting Phase
  constructor() {
    super();
    console.log("app costructor");
    //set state based on props recieved from outside
    //this.state = this.props.something -> pass props as parameter of constructor + param of super constructor
  }

  componentDidMount() {
    //perfect place to make AJAX call to get server data
    //then call setState
    console.log("app mounted");
  }

  //GOAL IS FOR NAVBAR + COUNTERS TO HAVE access to the amount of items
  //solution is to: lift the state up in this case to the parent which is the App (prolly bad idea make an intermidiate class
  //between navbar and counters to do this)
  
  state = {
    counters: [
      { id: 1, value: 0, name: "Milk" },
      { id: 2, value: 0, name: "Cereal" },
      { id: 3, value: 0, name: "Ham" },
      { id: 4, value: 0, name: "Bread" },
    ],
    valueToAdd: ""
  };

  handleDelete = (counterId) => {
    console.log("Event Handler Called", counterId);
    //DO NOT modify the state directly let react do it for you
    //make a new array and filter out the deleted element then call setState to react to do the work
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  handleIncrement = (counter) => {
    //can't modify state directly
    //so must clone the array and only in the cloned array set the counter at the needed position to the neccesary one
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    //const index = counter.id--;
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleAdd = () => {
    if(this.state.valueToAdd === ""){
      return;
    }
    //Maybe add functuonality to not return the same prodcut
    const counters = [...this.state.counters];
    let lastId = counters[counters.length - 1].id;
    lastId++;
    counters.push({ id: lastId, value: 0, name: this.state.valueToAdd});
    this.setState({ counters });
    //console.log("props",this.props);
    this.handleTyping("");

  };
  handleTyping = (userInput) => {
    console.log("DONE");
    const valueToAdd = userInput;
    this.setState({valueToAdd});
  };
  
  render() {
    console.log("app rendered");
    console.log(this.state.counters.filter((c) => c.value > 0).length);
    return (
      <React.Fragment>
        <NavBar 
          totalCounters={this.state.counters.reduce((prev, cur) => cur.value > 0 ? prev+cur.value : prev, 0)}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            inputBox={this.state.valueToAdd}
            onReset={this.handleReset}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            onAdd = {this.handleAdd}
            onTyping = {this.handleTyping}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
