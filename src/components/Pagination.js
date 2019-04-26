import React, { Component } from 'react';
import PropTypes from 'prop-types';

const LEFT_PAGE = 'LEFT';
const RIGHT_PAGE = 'RIGHT';

const range = (from, to) => {
  let i = from;
  const rangeArray = [];

  while (i <= to) {
    rangeArray.push(i);
    i += 1;
  }

  return rangeArray;
};

// probably can be rewritten into the stateless functional component
class Pagination extends Component {
  fetchPageNumbers = () => {
    const totalPages = parseInt(this.props.totalPages, 10);
    const currentPage = parseInt(this.props.page, 10);
    const pageNeighbors = 2;

    const totalNumbers = pageNeighbors * 2 + 3;
    const totalBlocks = totalNumbers + 2;

    if (totalPages > totalBlocks) {
      const startPage = Math.max(2, currentPage - pageNeighbors);
      const endPage = Math.min(totalPages - 1, currentPage + pageNeighbors);
      let pages = range(startPage, endPage);

      const hasLeftSpill = startPage > 2;
      const hasRightSpill = totalPages - endPage > 1;
      const spillOffset = totalNumbers - (pages.length + 1);

      switch (true) {
        case hasLeftSpill && !hasRightSpill: {
          const extraPages = range(startPage - spillOffset, startPage - 1);
          pages = [LEFT_PAGE, ...extraPages, ...pages];
          break;
        }

        case !hasLeftSpill && hasRightSpill: {
          const extraPages = range(endPage + 1, endPage + spillOffset);
          pages = [...pages, ...extraPages, RIGHT_PAGE];
          break;
        }

        case hasLeftSpill && hasRightSpill:
        default: {
          pages = [LEFT_PAGE, ...pages, RIGHT_PAGE];
          break;
        }
      }
      return [1, ...pages, totalPages];
    }

    return range(1, totalPages);
  };

  gotoPage = page => {
    const queryContent = {
      page: page.toString(),
    };
    this.props.sendQuery(queryContent);
  };

  handleClick = page => e => {
    e.preventDefault();
    this.gotoPage(page);
  };

  handleMoveLeft = e => {
    e.preventDefault();
    const currentPage = parseInt(this.props.page, 10);
    // (this.pageNeighbors * 2) - 1
    this.gotoPage(currentPage - 3);
  };

  handleMoveRight = e => {
    e.preventDefault();
    const currentPage = parseInt(this.props.page, 10);
    this.gotoPage(currentPage + 3);
  };

  render() {
    const { page, totalPages } = this.props;
    if (totalPages === 1) return null;
    const pages = this.fetchPageNumbers();
    const currentPage = parseInt(page, 10);
    return (
      <div className="pagination-container">
        <p>
          Page {page} out of {totalPages}
        </p>
        <nav aria-label="Pagination">
          <ul className="pagination">
            {pages.map((page, index) => {
              if (page === LEFT_PAGE)
                return (
                  <li key={index} className="page-item">
                    <button
                      className="page-link"
                      href="#"
                      aria-label="Previous"
                      onClick={this.handleMoveLeft}
                      type="button"
                    >
                      <span aria-hidden="true">&laquo;</span>
                    </button>
                  </li>
                );

              if (page === RIGHT_PAGE)
                return (
                  <li key={index} className="page-item">
                    <button
                      className="page-link"
                      href="#"
                      aria-label="Next"
                      onClick={this.handleMoveRight}
                      type="button"
                    >
                      <span aria-hidden="true">&raquo;</span>
                    </button>
                  </li>
                );

              return (
                <li key={index} className="page-item">
                  <button
                    className={`page-link${currentPage === page ? ' active' : ''}`}
                    href="#"
                    onClick={this.handleClick(page)}
                    type="button"
                  >
                    {page}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    );
  }
}

Pagination.propTypes = {
  totalPages: PropTypes.string,
  page: PropTypes.string.isRequired,
  sendQuery: PropTypes.func.isRequired,
};

Pagination.defaultProps = {
  totalPages: '1',
};

export default Pagination;
