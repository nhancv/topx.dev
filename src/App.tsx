import React from 'react';
import './App.scss';
import { Main } from './Component';

type AppProps = {};
type AppState = {};

class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div data-aos="fade-up" data-aos-duration="500">
        <Main />
      </div>
    );
  }
}

export default App;
