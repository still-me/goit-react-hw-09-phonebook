import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './Filter.scss';
import { changeFilter } from '../../redux/contacts/contacts-actions';
import { getFilterValue } from '../../redux/contacts/contacts-selectors';

const Filter = () => {
  const value = useSelector(getFilterValue);

  const dispatch = useDispatch();

  const onChange = useCallback(
    ({ target: { value } }) => {
      dispatch(changeFilter(value));
    },
    [dispatch],
  );

  return (
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
};

export default Filter;
