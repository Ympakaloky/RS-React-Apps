import axios from 'axios';
import InputForm from '../components/inputForm';
import Results from '../components/results';
import './App.css';
import { LINK } from '../store/enum';
import { AppState, InputFormProps, Pokemon } from '../store/Interface';
import { Component } from 'react';

class App extends Component<InputFormProps, AppState> {
  constructor(props: InputFormProps) {
    super(props);
    this.state = {
      resultsData: [],
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    try {
      const response = await axios.get<{ results: Pokemon[] }>(LINK.POKEAPI);
      this.setState({ resultsData: response.data.results });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  render() {
    const { resultsData } = this.state;

    return (
      <>
        <InputForm />
        <Results data={resultsData} />
      </>
    );
  }
}

export default App;
