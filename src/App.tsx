import React from 'react';
import './App.scss';
import { Main } from './Component';

type AppProps = {};
type AppState = {};

class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {};

    // /?redirect_uri=https://nhancv.com
    const queryParameters = new URLSearchParams(window.location.search);
    const isValidUrl = (uri: any) => {
      const pattern = new RegExp(
        '^([a-zA-Z]+:\\/\\/)?' + // protocol
          '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
          '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR IP (v4) address
          '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
          '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
          '(\\#[-a-z\\d_]*)?$', // fragment locator
        'i',
      );
      return pattern.test(uri);
    };
    const redirectURI = queryParameters.get('redirect_uri');
    if (isValidUrl(redirectURI)) {
      window.location.replace(redirectURI!);
    }
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
