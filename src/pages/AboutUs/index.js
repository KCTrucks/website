import React from 'react';

// Images
import SideDesk from '../../images/stock/SideDesk.png';

// Components
import ImageTitle from '../../components/ImageTitle';

export default class AboutUs extends React.Component {
  render() {
    return (
      <div>
        <ImageTitle image={SideDesk} title='About Us' />
      </div>
    );
  }
}
