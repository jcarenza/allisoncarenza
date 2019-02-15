import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Lightbox from 'react-images';

class Gallery extends Component {
    constructor() {
        super();

        this.state = {
            lightboxIsOpen: false,
            currentImage: 0
        };

        this.closeLightbox = this.closeLightbox.bind(this);
        this.gotoNext = this.gotoNext.bind(this);
        this.gotoPrevious = this.gotoPrevious.bind(this);
        this.gotoImage = this.gotoImage.bind(this);
        this.handleClickImage = this.handleClickImage.bind(this);
        this.openLightbox = this.openLightbox.bind(this);
    }
    openLightbox(index, event) {
        event.preventDefault();
        this.setState({
            currentImage: index,
            lightboxIsOpen: true
        });
    }
    closeLightbox() {
        this.setState({
            currentImage: 0,
            lightboxIsOpen: false
        });
    }
    gotoPrevious() {
        this.setState(state => ({
            currentImage: state.currentImage - 1
        }));
    }
    gotoNext() {
        this.setState(state => ({
            currentImage: state.currentImage + 1
        }));
    }
    gotoImage(index) {
        this.setState({
            currentImage: index
        });
    }
    handleClickImage() {
        if (this.state.currentImage === this.props.images.length - 1) {
            return;
        }

        this.gotoNext();
    }

    render() {
        const { images } = this.props;
        if (!images) return;

        return (
            <div>
                <div className="galleryGrid">
                    {images.map((obj, i) => (
                        <article key={i} className="gallery-item">
                            <a href={obj.src} onClick={e => this.openLightbox(i, e)}>
                                <img src={obj.thumbnail} className="gallery-thumb" alt="" />
                            </a>
                        </article>
                    ))}
                </div>
                <Lightbox
                    currentImage={this.state.currentImage}
                    images={this.props.images}
                    isOpen={this.state.lightboxIsOpen}
                    onClickImage={this.handleClickImage}
                    onClickNext={this.gotoNext}
                    onClickPrev={this.gotoPrevious}
                    onClickThumbnail={this.gotoImage}
                    onClose={this.closeLightbox}
                />
            </div>
        );
    }
}

Gallery.displayName = 'GalleryGrid';
Gallery.propTypes = {
    images: PropTypes.array
};

export default Gallery;