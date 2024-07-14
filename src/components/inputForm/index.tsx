import { Component, ChangeEvent, FormEvent } from 'react';
import './inputForm.css';
import { InputFormPropsExtended, InputFormState } from '../../store/Interface';

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
    try {
      throw new Error('Simulated error from InputForm');
    } catch (error) {
      this.props.onError(error as Error, { componentStack: '' });
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSearchInput}>
        <input type="text" name="search" value={this.state.textValue} onChange={this.changeText} />
        <button type="submit">Search</button>
        <button type="button" className="errorBtn" onClick={this.throwError}>
          Error
        </button>
      </form>
    );
  }
}

// function InputForm() {
//   const [textValue, setTextValue] = useState('');
//   const [errorStatus, setErrorStatus] = useState(false);

//   function handleSearchInput(e: FormEvent<HTMLFormElement>) {
//     e.preventDefault();
//     // this.props.onSearch(this.state.textValue);
//     localStorage.setItem('lastRequest', textValue.trim());
//   }

//   function changeText(e: ChangeEvent<HTMLInputElement>) {
//     const newValue = e.target.value;
//     setTextValue(newValue);
//   }

//   function throwError() {
//     setErrorStatus(true);
//     try {
//       throw new Error('Simulated error from InputForm');
//     } catch (error) {
//       // this.props.onError(error as Error, { componentStack: '' });
//     }
//   }

//   return (
//     <form onSubmit={handleSearchInput}>
//       <input type="text" name="search" value={textValue} onChange={changeText} />
//       <button type="submit">Search</button>
//       <button type="button" className="errorBtn" onClick={throwError}>
//         Error
//       </button>
//     </form>
//   );
// }

export default InputForm;
