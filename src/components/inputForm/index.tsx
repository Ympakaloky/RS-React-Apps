import { Component, ChangeEvent, MouseEventHandler } from 'react';
import './inputForm.css';
import { InputFormProps, InputFormState } from '../../store/Interface';

class InputForm extends Component<InputFormProps, InputFormState> {
  constructor(props: InputFormProps) {
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

  changeText(e: ChangeEvent<HTMLInputElement>) {
    const newValue = e.target.value;
    this.setState({
      textValue: newValue,
    });
  }

  handleSearchInput: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault();
    this.setState({
      textValue: this.state.textValue,
    });
    localStorage.setItem('lastRequest', this.state.textValue);
  };

  render() {
    return (
      <>
        <form>
          <input type="text" name="search" value={this.state.textValue} onChange={this.changeText.bind(this)} />

          <button type="submit" value="search" onClick={this.handleSearchInput}>
            Search
          </button>
        </form>
      </>
    );
  }
}

export default InputForm;
