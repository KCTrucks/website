import React from 'react';

// Images
import Products from '../../images/stock/Products.png';

// Components
import ImageTitle from '../../components/ImageTitle';

export default class OurProducts extends React.Component {
  render() {
    return (
      <div>
        <ImageTitle image={Products} title='Our Products' />
      </div>
    );
  }
}
