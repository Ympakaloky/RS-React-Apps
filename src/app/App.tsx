import InputForm from '../components/inputForm';
import Results from '../components/results';
import './App.css';
import { LINK } from '../store/enum';
import { AppState, InputFormProps } from '../store/interface';
import { Component } from 'react';
import fetchData from '../services/fetchData';

class App extends Component<InputFormProps, AppState> {
  constructor(props: InputFormProps) {
    super(props);
    this.state = {
      resultsData: [],
    };
    this.fetch = this.fetch.bind(this);
  }

  componentDidMount() {
    this.fetch();
  }

  async fetch(searchingWord: string = '') {
    const data = await fetchData(`${LINK.POKEAPI}${searchingWord}`);
    this.setState({ resultsData: data });
  }

  render() {
    const { resultsData } = this.state;

    return (
      <>
        <InputForm onSearch={this.fetch} />
        <Results data={resultsData} />
      </>
    );
  }
}

export default App;
