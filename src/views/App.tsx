import axios from 'axios';
import InputForm from '../components/inputForm';
import Results from '../components/results';
import './App.css';
import { LINK } from '../store/enum';
import { AppState, InputFormProps, Pokemon } from '../store/interface';
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

  fetchData = async (pokemonName?: string) => {
    const lastRequest = pokemonName || localStorage.getItem('lastRequest')?.trim();

    try {
      if (lastRequest) {
        const response = await axios.get<Pokemon>(`${LINK.POKEAPI}/${lastRequest}`);
        this.setState({ resultsData: [response.data] });
      } else {
        const response = await axios.get<{ results: Pokemon[] }>(LINK.POKEAPI);
        this.setState({ resultsData: response.data.results });
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  render() {
    const { resultsData } = this.state;

    return (
      <>
        <InputForm onSearch={this.fetchData} />

        <Results data={resultsData} />
      </>
    );
  }
}

export default App;
