import InputForm from '../components/inputForm';
import Results from '../components/results';
import './App.css';
import { LINK } from '../store/enum';
import { AppState } from '../store/interface';
import { Component } from 'react';
import fetchData from '../services/fetchData';
import Loading from '../components/loading';

class App extends Component<Record<string, never>, AppState> {
  constructor(props: Record<string, never>) {
    super(props);
    this.state = {
      resultsData: [],
      error: false,
      isLoading: false,
    };
    this.fetch = this.fetch.bind(this);
  }

  componentDidMount() {
    this.fetch();
  }

  async fetch(searchingWord: string = '') {
    this.setState({ isLoading: true });
    try {
      const data = await fetchData(`${LINK.POKEAPI}${searchingWord}`);
      this.setState({ resultsData: data });
    } catch (error) {
      this.setState({ error: true });
    }
    this.setState({ isLoading: false });
  }

  handleError = (error: Error, info: { componentStack: string }) => {
    console.error('Error caught in App: ', error, info);
    this.setState({ error: true });
  };

  render() {
    const { resultsData, error, isLoading } = this.state;

    if (error) {
      throw new Error('Simulated error from App component');
    }

    if (isLoading) {
      return <Loading />;
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
