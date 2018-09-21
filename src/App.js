import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        {/* <!-- component dashboard --> */}
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div className="result">
          <h1>Main metrics</h1>
          <div className="switcher">
            <a className="switcher__item">Last hour</a>
            <a className="switcher__item">Today</a>
            <a className="switcher__item active">Yesterday</a>
            <a className="switcher__item">Last 3 days</a>
        </div>
          <div className="stat-chart">
          <div className="logs">
            <div className="log__item">
              <div className="check-status">
                <span className="status--success"></span>
              </div>
              <div className="log__text">
                <p>Errors: 0,12%</p>
                <p className="text--lighten">Average: 0,11%</p>
              </div>

            </div>
            <div className="log__item">
              <div className="check-status">
                <span className="status--success"></span>
              </div>
              <div className="log__text">
                <p>Zeroes: 5,12%</p>
                <p className="text--lighten">Average: 0,11%</p>
              </div>
            </div>
            <div className="log__item">
              <div className="check-status">
                <span className="status--success"></span>
              </div>
              <div className="log__text">
                <p>Timeouts: 0,12%</p>
                <p className="text--lighten">Average: 0,11%</p>  
              </div>
            </div>
          </div>
          </div>
          <div className="item">
            <div className="item__image">
              <div className="image"></div>
              <div className="status status--online"></div>
              <div className="arrow"></div>
            </div>
            <div className="item__body">
              <div className="item__title">
                <h3>Searches</h3>
                <span className="add add--success">+5%</span>
                <p>29 380 yesterday</p>
                <p className="text--lighten">27 985 Last friday</p>
              </div>
              <div className="item__description">
                <p><b>Mobile traffic: 100%<br/>
                Web traffic: 100%</b></p>
                <p className="text--lighten">You get 100% traffic on mobile and desktop devices.</p>
                <p className="item__links">
                  <span>Help:</span>
                  <a href="">Searches</a>,
                  <a href="">Pessimistation</a>
                </p>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="item__image">
              <div className="image"></div>
              <div className="status status--online"></div>
              <div className="arrow"></div>
            </div>
            <div className="item__body">
              <div className="item__title">
                <h3 className="text--warning">Clicks</h3>
                <span className="add">-13%</span>
                <p>243 Yesterday</p>
                <p className="text--lighten">280 Last friday</p>
              </div>
              <div className="item__description">
                <p className="text--warning"><b>CTR: 0,04%</b></p>
                <p className="text--lighten">You get 100% traffic on mobile and desktop devices.</p>
                <p className="item__links">
                  <span>Help:</span>
                  <a href="">CTR</a>,
                  <a href="">Clicks</a>
                </p>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="item__image">
              <div className="image"></div>
              <div className="status status--offline"></div>
              <div className="arrow"></div>
            </div>
            <div className="item__body">
              <div className="item__title">
                <h3>Bookings</h3>
                <p>24 Yesterday</p>
                <p className="text--lighten">24 Last friday</p>
              </div>
              <div className="item__description">
                <p>Mobile traffic: 100%</p>
                <p>Web traffic: 100%</p>
                <p className="text--lighten">You get 100% traffic on mobile and desktop devices.</p>
                <p className="item__links">
                  <span>Help:</span>
                  <a href="">STR</a>,
                  <a href="">Bookings</a>,
                  <a href="">Avg. Check</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
