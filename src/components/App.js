import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RegistrationPage from './RegistrationPage';
import DetailsPage from './DetailsPage';
import saveUsername from './SaveResults';

const Username = sessionStorage.getItem('Username');
const firstName = JSON.parse(Username);
console.log(firstName);

class App extends Component {
  constructor(props) {
    super(props);
    this.nextPage = this.nextPage.bind(this);
    this.previousPage = this.previousPage.bind(this);
    this.state = {
      page: 1,
      firstName: '',
      lastName:''
    };
  }
  nextPage() {
    this.setState({ page: this.state.page + 1 });
  }

  previousPage() {
    this.setState({ page: this.state.page - 1 });
  }

  render() {
    const { onSubmit } = this.props;
    const { page, firstName, lastName } = this.state;
    return (
      <div>
        {page === 1 && <RegistrationPage onSubmit={this.nextPage}/>}
        {page === 2 && <DetailsPage previousPage={this.previousPage} onSubmit={onSubmit} firstName={ firstName } lastName={ lastName }/>}
      </div>
    );
  }
}

App.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default App;
