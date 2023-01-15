import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  
  
  render() {
    console.log("counters rendered");
    // destrucute to only what you want to peek to avoid repetition
    const { onReset, counters, onDelete, onIncrement, onAdd, onTyping, inputBox } = this.props;
    return (
      <div>
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">
          Reset Quantity
        </button>
        <button onClick={onAdd} className="btn btn-warning btn-sm m-2">
          Add Product
        </button>
        <input onChange={(event) => onTyping(event.target.value)} type="text" placeholder="Product Name" value={inputBox}></input>
        {counters.map((counter) => (
          // key will not be a part of props
          //children prop is passed inside then call in passed class as {this.props.children} children also have their own props
          <Counter
            key={counter.id}
            counter={counter}
            onDelete={onDelete} //bubble up event to parent
            onIncrement={onIncrement}
          >
            <p className="badge pill bg-success m-2 fs-2">{counter.name}</p>
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
