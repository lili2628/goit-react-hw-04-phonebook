import React from 'react';
import PropTypes from 'prop-types';
import {FilterLable, FilterInput} from './Filter.styled';


function Filter({value, onChangeFilter}) {
  return (
    <FilterLable>Find contacts by name
      <FilterInput
        type="text"
        name="name"
        value={value}
        onChange={onChangeFilter}
      />
    </FilterLable>
  );
}

export default Filter;

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};