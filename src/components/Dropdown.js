import React, { Component } from 'react';
// import './style.css';


class Dropdown extends Component {
constructor(props) {
  super(props);
  this.state = {
    displayMenu: false,
  };
  this.showDropdownMenu = this.showDropdownMenu.bind(this);
  this.hideDropdownMenu = this.hideDropdownMenu.bind(this);
};

  showDropdownMenu(event) {
    event.preventDefault();
    this.setState({ displayMenu: true }, () => {
      document.addEventListener('click', this.hideDropdownMenu);
    });
  }

  hideDropdownMenu() {
    this.setState({ displayMenu: false }, () => {
      document.removeEventListener('click', this.hideDropdownMenu);
    });
  }

  handleSubmit = e => {
    e.preventDefault();
    const queryContent = {
      limit: e.target.id,
      title: this.props.title,
      years: this.props.years
    };
    this.props.requestQuery(queryContent);
  }

  // GENRES AND STATUS SHOULD BE SEARCHABLE DROPDOWNS - TO DO LATER PROBABLY, NEED TO DISCUSS IT WITH ALEXEY

  render() {
    return (
        <div className="dropdown" style = {{background:"gray", width:"200px"}}>
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