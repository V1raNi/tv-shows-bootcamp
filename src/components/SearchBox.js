import React, { Component } from 'react';


class SearchBox extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     titleInput: '',
  //     yearInput: '',
  //   }
  // }
  
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = e => {
    e.preventDefault();
    const title = this.title.value;
    const years = this.years.value;
    const queryContent = {
      limit: this.props.limit,
      title,
      years
      // title: this.state.titleInput,
      // years: this.state.yearInput
    };
    this.props.requestQuery(queryContent);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="Title">Title (description):</label>
        {/* <input id="title" name="titleInput"  type="text" onChange={this.handleChange} value ={this.props.title}/> */}
        <input id="title" name="titleInput"  type="text" ref={titleInput => this.title = titleInput} defaultValue ={this.props.title}/>

        {/* <label htmlFor="Genres">Genres:</label>
        <input id="genres" name="genres" onChange={this.handleChange} type="text"/> */}

        <label htmlFor="Year">Year:</label>
        {/* <input id="year" name="yearInput" type="number" min="1900" max="2019" onChange={this.handleChange} value ={this.props.value}/> */}
        <input id="year" name="yearInput" type="number" min="1900" max="2019" ref={yearInput => this.years = yearInput} defaultValue ={this.props.value}/>

        {/* <label htmlFor="Status">Status:</label>
        <input id="status" name="status" onChange={this.handleChange} type="text"/> */}
        
        <button type="submit">Search</button>
      </form>
    )
  }
}

export default SearchBox;