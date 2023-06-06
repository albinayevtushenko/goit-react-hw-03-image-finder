import { Component } from 'react';
import PropTypes from 'prop-types';

import { GalleryItemImage, GalleryItem } from './ImageGalleryItem.styled';

export class ImageGalleryItem extends Component {
  render() {
    const { items, onClick } = this.props;
    return items.map(({ webformatURL, largeImageURL, id, tags }) => {
      return (
        <GalleryItem key={id} onClick={() => onClick(largeImageURL, tags)}>
          <GalleryItemImage src={webformatURL} alt={tags} />
        </GalleryItem>
      );
    });
  }
}

ImageGalleryItem.propTypes = {
  items: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
};
