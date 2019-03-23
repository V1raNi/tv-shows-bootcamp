import React, { Component } from 'react';

class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayMenu: false,
    };
  };

  showDropdownMenu = event => {
    event.preventDefault();
    this.setState({ displayMenu: true }, () => {
      document.addEventListener('click', this.hideDropdownMenu);
    });
  }

  hideDropdownMenu = () => {
    this.setState({ displayMenu: false }, () => {
      document.removeEventListener('click', this.hideDropdownMenu);
    });
  }

  handleSubmit = e => {
    e.preventDefault();
    const limit = e.target.id;
    const queryContent = {
      page: '1',
      limit,
      title: this.props.title,
      years: this.props.years,
      genres: this.props.genres
    };
    this.props.sendQuery(queryContent);
  }

  render() {
    return (
        <div className="dropdown" style = {{backgroundColor:"#d8d8d8", width:"200px"}}>
        <div className="button" onClick={this.showDropdownMenu}>Show results on page:</div>
          { this.state.displayMenu && (
              <ul>
                <li><button id="5" onClick={this.handleSubmit}>5</button></li>
                <li><button id="10" onClick={this.handleSubmit}>10</button></li>
                <li><button id="15" onClick={this.handleSubmit}>15</button></li>
                <li><button id="20" onClick={this.handleSubmit}>20</button></li>
                <li><button id="25" onClick={this.handleSubmit}>25</button></li>
              </ul>
            )
          }

      </div>

    );
  }
}

export default Dropdown;