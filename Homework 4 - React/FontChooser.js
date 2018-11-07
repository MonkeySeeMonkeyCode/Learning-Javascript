class FontChooser extends React.Component {

    constructor(props) {
	super(props);
	this.state = { 
		hide : false, 
		bold : this.props.bold, 
		min : this.props.min, 
		max : this.props.max, 
		size : this.props.size, 
		default : this.props.size}
    }
    
	handleTextClick() {
		console.log('Text Click')
		if ( this.state.hide == false ) {
			console.log('hide');
			this.setState( { hide : true } );
			console.log(this.state.hide);
		}
		else if ( this.state.hide == true ) {
			console.log('unhide');
			this.setState( { hide : false } );
			console.log(this.state.hide);
		}
	}
	
	handleBoldClick() {
		console.log('BoldClick')
		if ( this.state.bold == 'false' ) {
			console.log('checkbox being checked');
			this.setState( { bold : 'true' } );
			console.log(this.state.bold);
		}
		else if ( this.state.bold == 'true' ) {
			console.log('checkbox being unchecked');
			this.setState( { bold : 'false' } );
			console.log(this.state.bold);
		}
	}

	handleDecreaseButton() {
		console.log(this.state.size);
		console.log(this.state.min);
		console.log('wtf');
		if ( Number(this.state.size) > Number(this.state.min) ) {
			this.setState( { size : this.state.size- 1 });
		}
	}

	handleIncreaseButton(){
		if ( Number(this.state.siz) < Number(this.state.max) ) {
			this.setState( { size : this.state.size + 1 });
		}
	}

    render() {
		var hide = this.state.hide;
		var bold = this.state.bold == 'true' ? 'bold' : 'normal';
		var size = Number(this.state.size);
		var color = this.state.color == 'true' ? 'red' : 'black';
	return(
		   <div>
	       <input type="checkbox" id="boldCheckbox" onClick={this.handleBoldClick.bind(this)} hidden={hide}/>
	       <button id="decreaseButton" onClick={this.handleDecreaseButton.bind(this)} hidden={hide}>-</button>
	       <span id="fontSizeSpan" hidden={hide}>{this.props.size}</span>
	       <button id="increaseButton" onClick={this.handleIncreaseButton.bind(this)} hidden={hide}>+</button>
	       <span style={{fontWeight: bold, fontSize : size, color : color}} id="textSpan" onClick={this.handleTextClick.bind(this)} >{this.props.text}</span>
	       </div>
	);
    }
}

