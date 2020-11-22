import React from 'react';

// Images
import Desk from '../../images/stock/Desk.png';

// Components
import ImageTitle from '../../components/ImageTitle';

export default class ContactUs extends React.Component {
  render() {
    return (
      <div>
        <ImageTitle image={Desk} title='Contact Us' />
      </div>
    );
  }
}
