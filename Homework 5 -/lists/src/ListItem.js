import React, { Component } from 'react';

class ListItem extends Component {

    constructor(props) {
	super(props);
	this.state = { color: 'black' };
    }

    handleClick() {
      console.log("ListItem handleClick");
      console.log(this);
      let colors = this.state.color;
      if (colors === "black") {
        this.setState({color: 'gray'});
        console.log("gray");
      }
      else {
        this.setState({color: 'black'});
        console.log("black");
      }
    }

  render() {
    var item = this.props.item;
    var name = item.name;

    return (
	    <span onClick={this.handleClick.bind(this)} style={{color: this.state.color}}>
        <strong>{name}</strong>
      </span>
    );

  }

}
export default ListItem;

