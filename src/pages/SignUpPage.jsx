import { Component } from 'react';
import { connect } from 'react-redux';
import { getUser } from '../store/actions/userAction';

class _SignUpPage extends Component {
  state = {
    user: null,
  };

  handleChange = ({ target }) => {
    const user = target.value === 'number' ? +target.value : target.value;
    this.setState({ user });
  };

  saveUser = () => {
    this.props.getUser(this.state.user);
    this.props.history.push('/homepage');
  };
  render() {
    return (
      <section className='login-container'>
        <img src='assets/img/bitcoins.png' alt='' />
        <div className='login'>
          <h1>Sign in</h1>
          <h3>To start transaction</h3>
        </div>
        <input
          onChange={this.handleChange}
          type='text'
          name='user'
          id='user'
          placeholder='User Name'
        />
        <button onClick={this.saveUser}>Start</button>
      </section>
    );
  }
}

const mapDispatchToProps = {
  getUser,
};

export const SignUpPage = connect(null, mapDispatchToProps)(_SignUpPage);
