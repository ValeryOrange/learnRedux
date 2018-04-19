import React, { Component } from 'react';
import PropTypes from 'prop-types';

const YEARS = [2014, 2015, 2016];
export default class Page extends Component {
  onYearBtnClick(year) {
    this.props.setYear(year);
  }

  renderBtn(year, index) {
    return (
      <li key={index}>
        <button onClick={(e) => this.onYearBtnClick(year)}>{year}</button>
      </li>
    )
  }

  render() {
    const { photos, year } = this.props;
      return (
        <div>
          <ul>
            {YEARS.map((item, index) => this.renderBtn(item, index))}
          </ul>
          <h3>{year}</h3>
          <p>
            You have {photos.length} photos in {year}.
          </p>
        </div>
      );
  }
}

Page.propTypes = {
  photos: PropTypes.array.isRequired,
  setYear: PropTypes.func.isRequired,
  year: PropTypes.number.isRequired,
};
