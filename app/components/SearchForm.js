import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchForm extends Component {
  constructor() {
    super();

    this.state = {
      searchText: ''
    }

    this.submitForm = this.submitForm.bind( this );
    this.handleInputChange = this.handleInputChange.bind( this );
    this.handleLatestSearches = this.handleLatestSearches.bind( this );
  }

  handleInputChange( e ) {
    this.setState( { searchText: e.target.value } )
  }

  submitForm( e ) {
    const { searchText } = this.state;
    const { onHandleSearch } = this.props;
    e.preventDefault();
    if ( searchText !== '') {
      onHandleSearch(searchText);
    }
  }

  handleLatestSearches( e ) {
    const search = e.target.id;
    const { onHandleSearch } = this.props;

    onHandleSearch( search );
  }
  render() {
    const { searchText } = this.state;
    const { latestSearches } = this.props;

    return (
      <div className="search-form">
        <form onSubmit={ this.submitForm }>
          <input
            value={ searchText }
            onChange={ this.handleInputChange }
            placeholder='What are you looking for?'
            />

          <button onClick={ this.submitForm }>
            <i className="fa fa-search" aria-hidden="true"></i>
          </button>
        </form>

        { latestSearches.length !== 0 && <div className="latest-searches">
          <span>Latest searches:</span>
          <span className="search-list">
            { latestSearches.map( ( search, index ) => (
              <span key={ index }>
                { index !== 0  && ', '}
                <span
                  id={ search }
                  className='search'
                  onClick={ this.handleLatestSearches }
                  >
                  { search }
                </span>
              </span>
            ) ) }
          </span>
        </div> }
      </div>
    )
  }
}

SearchForm.propTypes = {
  onHandleSearch: PropTypes.func.isRequired,
  latestSearches: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default SearchForm;
