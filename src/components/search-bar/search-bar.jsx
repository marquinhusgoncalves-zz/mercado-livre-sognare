import React, { PureComponent } from 'react';
// import PropTypes from 'prop-types';

class SearchBar extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.getValue(this.state.value);

  }

  render() {
    return (
      <form className="search-bar" onSubmit={this.handleSubmit}>
        <input type="text" className="search-input" value={this.state.value} onChange={this.handleChange} placeholder="O que você procura..." />
        <button type="submit" className="search-button" value="Submit">Buscar
          <i className="search-icon"></i>
        </button>
      </form>
    );
  }
}

export default SearchBar;
