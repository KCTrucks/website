import React from 'react';

// Images
import BackOfGarage from '../../images/stock/BackOfGarage.png';

// Components
import ImageTitle from '../../components/ImageTitle';

export default class BedLiner extends React.Component {
  render() {
    return (
      <div>
        <ImageTitle image={BackOfGarage} title='Spray-On Bed Liner' />
      </div>
    );
  }
}
