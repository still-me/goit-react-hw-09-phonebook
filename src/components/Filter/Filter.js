import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import './Filter.scss';
import { changeFilter } from '../../redux/contacts/contacts-actions';
import { getFilterValue } from '../../redux/contacts/contacts-selectors';

const Filter = ({ value, onChange }) => (
  <label className="filter__label">
    <p className="filter__hint">Find contacts by name</p>
    <input
      className="filter__input"
      type="text"
      value={value}
      onChange={onChange}
    ></input>
  </label>
);

Filter.defaultProps = {
  onChange: () => null,
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};

const mapStateToProps = state => ({
  value: getFilterValue(state),
});

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(changeFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
