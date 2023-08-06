import * as React from 'react';
import { Container } from 'reactstrap';
import './Main.scss';

// @nhancv: Simple block
interface SimpleProps {
  header: string;
  description: string;
}

class Simple extends React.Component<SimpleProps, {}> {
  render() {
    const { header, description } = this.props;

    return (
      <div>
        <h2>{header}</h2>
        <div className={'Text-justify'} dangerouslySetInnerHTML={{ __html: description }} />
      </div>
    );
  }
}

export default class Main extends React.Component {
  render() {
    return (
      <Container className="App-body">
        <section className="App-section" data-aos="fade-up" data-aos-duration="4000">
          <Simple
            header={'Abstract'}
            description={`
              <div>
                We are TopX.Dev | Uranus a reliable software outsourcing company. <br /><br />
                We are expert full-stack programmers led by @nhancv who has a wide knowledge covering almost every aspect of the IT field and ensures a 100% success rate.
                <br />
              </div>
            `}
          />
        </section>
        <section className="App-section" data-aos="fade-right" data-aos-duration="4000">
          <Simple
            header={'Services'}
            description={`
              <div>
                Blockchain ⭐ Mobile ⭐ Web ⭐ Cloud
              </div>
            `}
          />
        </section>
        <section className="App-section" data-aos="fade-up" data-aos-duration="4000">
          <Simple
            header={'Contact'}
            description={`
              <div>
                <p>
                  <a href="mailto: me@topx.dev">me@topx.dev</a>
                </p>
              </div>
            `}
          />
        </section>
      </Container>
    );
  }
}
