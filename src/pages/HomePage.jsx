import React, { Component } from 'react';
import { userService } from '../services/userService';
import { bitcoinService } from '../services/bitcoinService';
import MovesList from '../cmps/MovesList';
import { connect } from 'react-redux';
import { signOut } from '../store/actions/userAction';

//Page with no hooks

class _HomePage extends Component {
  state = {
    user: null,
    rate: null,
  };

  componentDidMount() {
    // setTimeout(() => {
    this.loadUser();
    // }, 10000);
  }

  loadUser = async () => {
    this.setState(
      { user: await userService.getUser() },
      () => this.getBitcoinRate(),
      this.getMarketData()
    );
  };

  getBitcoinRate = async () => {
    const { user } = this.state;
    this.setState({
      rate: await bitcoinService.getRate(user.coins),
    });
  };

  signOut = () => {
    this.props.signOut();
    this.props.history.push('/');
  };

  getMarketData = async () => {
    this.setState({ marketData: await bitcoinService.getMarketPrice() });
  };

  render() {
    const { user, rate } = this.state;
    if (!user || !rate)
      return (
        <div className='loading'>
          <img src={require('../assets/img/loading.gif')} />
        </div>
      );
    return (
      <section className='homepage-container'>
        <section className='home-grid'>
          <button className='log-out-btn' onClick={this.signOut}>
            Log Out
          </button>

          <div className='market-details'>
            <h1>Market details</h1>
            <div>
              <span></span> ${(user.coins / rate).toFixed(2)}
            </div>
          </div>
          <div className='user-greet'>
            <img src={`assets/img/${user.img}`} alt='' />
            <h1 className='user-name'>Hey {user.name}!</h1>
          </div>
          <div className='user-wallet'>
            <h1>My Wallet</h1>
            <p>
              Balance: <span>${user.coins}</span>
            </p>
            <div>
              BTC:<span> {rate}</span>
            </div>
          </div>

          <div className='move-section'>
            <MovesList user={user} />
          </div>
        </section>
      </section>
    );
  }
}

const mapDispatchToProps = {
  signOut,
};

export const HomePage = connect(null, mapDispatchToProps)(_HomePage);
