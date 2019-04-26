import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';

class SearchBox extends Component {
  handleSubmit = e => {
    e.preventDefault();
    const title = this.titleRef.value;
    const years = this.yearsRef.value;
    const genres = this.genresRef.state.value;
    const queryContent = {
      title,
      years,
      genres,
    };
    this.props.sendQuery(queryContent);
  };

  resetFilters = () => {
    const queryContent = {
      page: '1',
      title: '',
      years: '',
      genres: [],
    };
    this.props.sendQuery(queryContent);
    this.titleRef.value = '';
    this.yearsRef.value = '';
    this.genresRef.state.value = '';
  };

  render() {
    const { genres } = this.props;
    const options = genres.map(genre => {
      return { value: genre.slug, label: genre.name };
    });

    return (
      <form id="search-box" onSubmit={this.handleSubmit}>
        <label htmlFor="genres">Genres:</label>
        <Select
          className="genres-input"
          classNamePrefix="genres-input"
          options={options}
          isMulti
          name="genres"
          ref={genresInput => (this.genresRef = genresInput)}
          defaultValue={[]}
        />

        <label htmlFor="title">Title (description):</label>
        <input
          className="search-input"
          id="title"
          name="title"
          type="text"
          ref={titleInput => (this.titleRef = titleInput)}
          defaultValue=""
        />

        <label htmlFor="year">Year:</label>
        <input
          className="search-input"
          id="year"
          name="year"
          type="number"
          min="1900"
          max="2050"
          ref={yearInput => (this.yearsRef = yearInput)}
          defaultValue=""
        />

        <div className="submit-buttons">
          <button className="form-button" type="submit">
            Search
          </button>
          <button className="form-button" type="button" onClick={this.resetFilters}>
            Reset filters
          </button>
        </div>
      </form>
    );
  }
}

SearchBox.propTypes = {
  sendQuery: PropTypes.func.isRequired,
  genres: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default SearchBox;
