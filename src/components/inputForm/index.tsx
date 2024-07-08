import { Component, ChangeEvent, FormEvent } from 'react';
import './inputForm.css';
import { InputFormPropsExtended, InputFormState } from '../../store/interface';

class InputForm extends Component<InputFormPropsExtended, InputFormState> {
  constructor(props: InputFormPropsExtended) {
    super(props);
    this.state = {
      textValue: '',
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
    localStorage.setItem('lastRequest', this.state.textValue);
  };

  render() {
    return (
      <form onSubmit={this.handleSearchInput}>
        <input type="text" name="search" value={this.state.textValue} onChange={this.changeText} />
        <button type="submit">Search</button>
      </form>
    );
  }
}

export default InputForm;
