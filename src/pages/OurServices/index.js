import React from 'react';

// Images
import Garage from '../../images/stock/Garage.png';

// Components
import ImageTitle from '../../components/ImageTitle';

export default class OurServices extends React.Component {
  render() {
    return (
      <div>
        <ImageTitle image={Garage} title='Our Services' />
      </div>
    );
  }
}
