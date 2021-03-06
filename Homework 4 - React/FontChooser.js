class FontChooser extends React.Component {

    constructor(props) {
	super(props);
	this.state = { 
		hide : true, 
		bold : this.props.bold, 
		min : this.props.min, 
		max : this.props.max, 
		size : this.props.size, 
		color : 'black',
		check : this.props.bold
		}
		if (Number(this.props.min) <= 0) {
			this.setState({ min : 1 })
			if (Number(this.props.size) <= Number(this.props.min)) {
				this.setState({size: 1})
			}
		}
		if (Number(this.props.min) > Number(this.props.max)) {
			this.setState({max : this.props.min})
		}
		if (Number(this.props.size) < Number(this.props.min)) {
			this.setState({size : this.props.min})
		}
		if (Number(this.props.size) > Number(this.props.max)) {
			this.setState({size: this.props.max})
		}
    }
    
	handleTextClick() {
		if ( this.state.hide == false ) {
			this.setState( { hide : true } );
		}
		else if ( this.state.hide == true ) {
			this.setState( { hide : false } );
		}
	}
	
	handleBoldClick() {
		if ( this.state.bold == 'false' ) {
			this.setState( { bold : 'true' } );
			this.setState({check : 'true'});
		}
		else if ( this.state.bold == 'true' ) {
			this.setState( { bold : 'false' } );
			this.setState({check : 'false'});
		}
	}

	handleDecreaseButton() {
		if ( Number(this.state.size) > Number(this.state.min) ) {
			this.setState( { size : Number(this.state.size)-1 } );
			this.setState( { color : 'false' } );
		}
		if ( Number(this.state.size) == Number(this.state.min)+1 ) {
			this.setState( { color : 'true' } );
		}
	}

	handleIncreaseButton(){
		if ( Number(this.state.size) < Number(this.state.max) ) {
			this.setState( { size : Number(this.state.size)+1 } );
			this.setState( { color : 'false' } );
		}
		if ( Number(this.state.size) == Number(this.state.max)-1 ) {
			this.setState( { color : 'true' } );
		}
	}

	handleFontSizeSpan() {
		this.setState( { size : Number(this.props.size) } )
		this.setState( { color : 'false' } )
	}

    render() {
		var hide = this.state.hide;
		var bold = this.state.bold == 'true' ? 'bold' : 'normal';
		var size = Number(this.state.size);
		var color = this.state.color == 'true' ? 'red' : 'black';
		var check = this.state.check == 'false' ? false : true;
	return(
		   <div>
	       <input type="checkbox" id="boldCheckbox" checked={check} onChange={this.handleBoldClick.bind(this)} hidden={hide}/>
	       <button id="decreaseButton" onClick={this.handleDecreaseButton.bind(this)} hidden={hide}>-</button>
	       <span id="fontSizeSpan" style={{fontWeight: bold, fontSize : size, color : color}} onDoubleClick={this.handleFontSizeSpan.bind(this)}hidden={hide}>{size}</span>
	       <button id="increaseButton" onClick={this.handleIncreaseButton.bind(this)} hidden={hide}>+</button>
	       <span style={{fontWeight: bold, fontSize : size, color : color}} id="textSpan" onClick={this.handleTextClick.bind(this)} >{this.props.text}</span>
	       </div>
	);
    }
}

