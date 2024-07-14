import InputForm from '../components/inputForm';
import Results from '../components/results';
import './App.css';
import { LINK } from '../store/enum';
import { AppState } from '../store/interface';
import { Component } from 'react';
import fetchData from '../services/fetchData';

class App extends Component<Record<string, never>, AppState> {
  constructor(props: Record<string, never>) {
    super(props);
    this.state = {
      resultsData: [],
      error: false,
    };
    this.fetch = this.fetch.bind(this);
  }

  componentDidMount() {
    this.fetch();
  }

  async fetch(searchingWord: string = '') {
    try {
      const data = await fetchData(`${LINK.POKEAPI}${searchingWord}`);
      this.setState({ resultsData: data });
    } catch (error) {
      this.setState({ error: true });
    }
  }

  handleError = (error: Error, info: { componentStack: string }) => {
    console.error('Error caught in App: ', error, info);
    this.setState({ error: true });
  };

  render() {
    const { resultsData, error } = this.state;

    if (error) {
      throw new Error('Simulated error from App component');
    }

    return (
      <>
        <InputForm onSearch={this.fetch} onError={this.handleError} />
        <Results data={resultsData} />
      </>
    );
  }
}

export default App;
