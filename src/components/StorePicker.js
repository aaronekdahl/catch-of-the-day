import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
	myInput = React.createRef();
	//access 'this' with custome method
	goToStore = (event) => {
		//Stop the form from submitting
		event.preventDefault();
		//Get text from input - binding
   	const storeName = this.myInput.value;
		//change page to /store/'storename'
		this.props.history.push(`/store/${this.storeName}`)
	};
	render() {
		return (
			<form className='store-selector' onSubmit={this.goToStore}>
				<h2>Please Enter A Store</h2>
				<input
				type='text'
				ref={this.myInput}
				required
				placeholder="Store Name"
				defaultValue={getFunName()}
				/>
				<button type='submit'>Visit Store</button>
			</form>
		);
	}
}

export default StorePicker;
