import { Component } from 'react';
import PropTypes from 'prop-types';
import toast from 'react-hot-toast';
// import { Formik, Field, Form } from 'formik';
import {
  SearchbarHeader,
  SearchForm,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchFormInput,
} from './Searchbar.styled';

export default class SearchBar extends Component {
  state = {
    searchQuery: '',
  };

  handleOnChage = evt => {
    const query = evt.currentTarget.value;
    this.setState({ searchQuery: query.toLowerCase().trim() });
  };

  handleOnSubmit = evt => {
    const { searchQuery } = this.state;
    if (!searchQuery) {
      toast.error('Please, enter find name', { duration: 1000 });
    }
    evt.preventDefault();
    this.props.onSubmit(searchQuery);
    this.reset();
  };

  reset() {
    this.setState({ searchQuery: '' });
  }

  render() {
    return (
      <SearchbarHeader>
        <SearchForm onSubmit={this.handleOnSubmit}>
          <SearchFormButton type="submit">
            <SearchFormButtonLabel>Search</SearchFormButtonLabel>
          </SearchFormButton>
          <SearchFormInput
            type="text"
            name="searchQuery"
            onChange={this.handleOnChage}
            value={this.state.searchQuery}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </SearchForm>
      </SearchbarHeader>
    );
  }
}

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
