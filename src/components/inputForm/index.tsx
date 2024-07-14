import { Component, ChangeEvent, FormEvent } from 'react';
import './inputForm.css';
import { InputFormPropsExtended, InputFormState } from '../../store/interface';

class InputForm extends Component<InputFormPropsExtended, InputFormState> {
  constructor(props: InputFormPropsExtended) {
    super(props);
    this.state = {
      textValue: '',
      error: false,
    };
  }

  componentDidMount() {
    const lastRequest = localStorage.getItem('lastRequest');
    if (lastRequest) {
      this.setState({
        textValue: lastRequest,
      });
    }
  }

  changeText = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    this.setState({
      textValue: newValue,
    });
  };

  handleSearchInput = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    this.props.onSearch(this.state.textValue);
    localStorage.setItem('lastRequest', this.state.textValue.trim());
  };

  throwError = () => {
    console.log('ERROR');
    this.setState({ error: true });
  };

  render() {
    return (
      <form onSubmit={this.handleSearchInput}>
        <input type="text" name="search" value={this.state.textValue} onChange={this.changeText} />
        <button type="submit">Search</button>
        <button className="errorBtn" onClick={this.throwError}>
          Error
        </button>
      </form>
    );
  }
}

export default InputForm;
