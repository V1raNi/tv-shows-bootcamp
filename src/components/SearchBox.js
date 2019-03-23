import React, { Component } from 'react';
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
      genres
    };
    this.props.sendQuery(queryContent);
  }

  resetFilters = () => {
    const queryContent = {
      page: 1,
      limit: '10',
      title: '',
      years: '',
      genres: []
    };
    this.props.sendQuery(queryContent);
    this.titleRef.value = '';
    this.yearsRef.value = '';
    this.genresRef.state.value = '';
  }

  render() {
    let options = this.props.genres.map(genre => {
      return { value: genre.slug, label: genre.name };
    });
    return (
      <form id="search-box" onSubmit={this.handleSubmit}>
        <label htmlFor="Title">Title (description):</label>
        <input id="title" name="titleInput"  type="text" ref={titleInput => this.titleRef = titleInput} defaultValue=''/>

        <label htmlFor="Genres">Genres:</label>
        <Select options={options} isMulti name="genres" ref={genresInput => this.genresRef = genresInput} defaultValue={[]} />

        <label htmlFor="Year">Year:</label>
        <input id="year" name="yearInput" type="number" min="1900" max="2019" ref={yearInput => this.yearsRef = yearInput} defaultValue=''/>

        <button type="submit">Search</button>
        <button type="button" onClick={this.resetFilters}>Reset filters</button>
      </form>
    )
  }
}

export default SearchBox;