import React from 'react';
import { Container, Typography } from '@material-ui/core';
import ImageGallery from 'react-image-gallery';

// Images
import BackOfGarage from '../../images/stock/BackOfGarage.png';
import BedLiner1 from '../../images/bed-liner/BedLiner1.jpg';
import BedLiner2 from '../../images/bed-liner/BedLiner2.jpg';
import BedLiner3 from '../../images/bed-liner/BedLiner3.jpg';
import BedLiner4 from '../../images/bed-liner/BedLiner4.jpg';
import BedLiner5 from '../../images/bed-liner/BedLiner5.jpg';
import BedLiner6 from '../../images/bed-liner/BedLiner6.jpg';
import BedLiner7 from '../../images/bed-liner/BedLiner7.jpg';
import BedLiner8 from '../../images/bed-liner/BedLiner8.jpg';
import BedLiner9 from '../../images/bed-liner/BedLiner9.png';
import BedLiner10 from '../../images/bed-liner/BedLiner10.png';
import BedLiner11 from '../../images/bed-liner/BedLiner11.png';
import BedLiner12 from '../../images/bed-liner/BedLiner12.png';
import BedLiner13 from '../../images/bed-liner/BedLiner13.png';
import BedLiner14 from '../../images/bed-liner/BedLiner14.png';
import BedLiner15 from '../../images/bed-liner/BedLiner15.jpg';

// Components
import ImageTitle from '../../components/ImageTitle';

// Constants
const images = [
  {
    original: BedLiner1,
    thumbnail: BedLiner1,
    originalAlt: ""
  },
  {
    original: BedLiner2,
    thumbnail: BedLiner2,
  },
  {
    original: BedLiner3,
    thumbnail: BedLiner3,
  },
  {
    original: BedLiner4,
    thumbnail: BedLiner4,
  },
  {
    original: BedLiner5,
    thumbnail: BedLiner5,
  },
  {
    original: BedLiner6,
    thumbnail: BedLiner6,
  },
  {
    original: BedLiner7,
    thumbnail: BedLiner7,
  },
  {
    original: BedLiner8,
    thumbnail: BedLiner8,
  },
  {
    original: BedLiner9,
    thumbnail: BedLiner9,
  },
  {
    original: BedLiner10,
    thumbnail: BedLiner10,
  },
  {
    original: BedLiner11,
    thumbnail: BedLiner11,
  },
  {
    original: BedLiner12,
    thumbnail: BedLiner12,
  },
  {
    original: BedLiner13,
    thumbnail: BedLiner13,
  },
  {
    original: BedLiner14,
    thumbnail: BedLiner14,
  },
  {
    original: BedLiner15,
    thumbnail: BedLiner15,
  },
];

export default class BedLiner extends React.Component {
  render() {
    return (
      <div>
        <ImageTitle image={BackOfGarage} title='Spray-On Bed Liner' />
        <Container variant='main' align='center'>
          <Typography variant='h2' style={{ margin: '2em 0em 2em 0em' }}>In addition to truck beds, there are many other applications for spray-on bed liner! From boats, to trailers, to rocker panels, to floor boards— we can do it all. Custom colors also available.</Typography>

          <div style={{ maxWidth: 975 }}>
            <ImageGallery items={images} showPlayButton={false} />
          </div>
        </Container>
      </div>
    );
  }
}
