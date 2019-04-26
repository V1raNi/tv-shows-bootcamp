import React from 'react';
import Select from 'react-select';
import PropTypes from 'prop-types';

const Dropdown = props => {
  const options = [
    { value: '5', label: '5' },
    { value: '10', label: '10' },
    { value: '15', label: '15' },
    { value: '20', label: '20' },
    { value: '25', label: '25' },
  ];

  const handleSubmit = e => {
    const limit = e.value;
    const queryContent = {
      limit,
      page: '1',
    };
    props.sendQuery(queryContent);
  };

  return (
    <div className="shows-limit">
      <label htmlFor="limit-dropdown">Results on page:</label>
      <Select
        className="limit-dropdown"
        classNamePrefix="limit-dropdown"
        defaultValue={options[1]}
        name="limit-dropdown"
        options={options}
        onChange={handleSubmit}
      />
    </div>
  );
};

Dropdown.propTypes = {
  sendQuery: PropTypes.func.isRequired,
};

export default Dropdown;
