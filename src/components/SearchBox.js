import React, { Component } from 'react';
import Select from 'react-select';

class SearchBox extends Component {
  
  handleSubmit = e => {
    e.preventDefault();
    const title = this.title.value;
    const years = this.years.value;
    const genres = this.genres.state.value;
    const queryContent = {
      page: '1',
      limit: this.props.limit,
      title,
      years,
      genres
    };
    this.props.sendQuery(queryContent);
  }

  render() {
    let options = this.props.genres.map(genre => {
      return { value: genre.slug, label: genre.name };
    });
    console.log(this.props.years);
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="Title">Title (description):</label>
        <input id="title" name="titleInput"  type="text" ref={titleInput => this.title = titleInput} />

        <label htmlFor="Genres">Genres:</label>
        <Select options={options} isMulti name="genres" ref={genresInput => this.genres = genresInput}  />

        <label htmlFor="Year">Year:</label>
        <input id="year" name="yearInput" type="number" min="1900" max="2019" ref={yearInput => this.years = yearInput} />

        <button type="submit">Search</button>
        <button type="button" onClick={this.props.handleReset}>Reset filters</button>
      </form>
    )
  }
}

export default SearchBox;