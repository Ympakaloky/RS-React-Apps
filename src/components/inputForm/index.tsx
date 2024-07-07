import { Component, ChangeEvent, MouseEventHandler } from 'react';
import './inputForm.css';

// const lastRequest = localStorage.getItem('lastRequest');

class InputForm extends Component {
  constructor(props: {}) {
    super(props);
    this.state = {
      textValue: '',
    };
  }

  // changeText(e: ChangeEvent<HTMLInputElement>) {
  // 	this.setState({
  // 		textValue: e.target.value,
  // 	});
  // }

  // handleSearchInput: MouseEventHandler<HTMLButtonElement> = (event) => {
  // 	event.preventDefault();
  // 	this.setState({
  // 		inputValue: this.state.textValue,
  // 	});
  // 	console.log(this.state.textValue);
  // 	localStorage.setItem('lastRequest', this.state.inputValue);
  // };

  // render() {
  // 	return (
  // <form>
  // 	<label>
  // 		<input
  // 			type="text"
  // 			name="search"
  // 			className="searchInput"
  // 			value={this.state.textValue}
  // 			onChange={this.changeText.bind(this)}
  // 		/>
  // 	</label>
  // 	<button type="submit" value="search" className="searchBtn" onClick={this.handleSearchInput}>
  // 		Search
  // 	</button>
  // </form>
  // 	);
  // }

  state = {
    age: 42,
  };

  handleAgeChange = () => {
    this.setState({
      age: this.state.age + 1,
    });
  };

  render() {
    return (
      <>
        <form>
          <label>
            <input
              type="text"
              name="search"
              className="searchInput"
              // value={this.state.textValue}
              // onChange={this.changeText.bind(this)}
            />
          </label>
          <button type="submit" value="search" className="searchBtn">
            Search
          </button>
        </form>
        <button onClick={this.handleAgeChange}>Increment age</button>
        <p>You are {this.state.age}.</p>
      </>
    );
  }
}

export default InputForm;
