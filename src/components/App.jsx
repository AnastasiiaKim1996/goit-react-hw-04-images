import React, { Component } from 'react';
import axios from 'axios';

// import { Searchbar } from './Searchbar/Searchbar';
import { Loader } from './Loader/Loader';
// import { ImageGallery } from './ImageGallery/ImageGallery';

export class App extends Component {
  state = {
    images: [],
    searchQuery: '',
    page: 1,
    loading: false,
    error: null,
  };

  componentDidMount() {
    this.fetchImg();
  }

  fetchImg() {
    console.log('fetch');
    const { page } = this.state;

    this.setState({ loading: true });

    axios
      .get(
        `https://pixabay.com/api/?q=cat&page=${page}&key=29338036-8ca2af07466f8459e5d49b2a7&image_type=photo&orientation=horizontal&per_page=12`
      )
      .then(({ data }) => {
        // розпаковуємо та записуємо в стейт
        this.setState(({ images }) => {
          return {
            images: [...images, ...data.hits],
          };
        });
      })
      .catch(error => {
        this.setState({ error });
      })
      .finally(() => {
        this.setState({ loading: false });
      });
  }

  // handleFormSubmit = searchQuery => {
  //   this.setState({ searchQuery });
  // };

  render() {
    const { loading } = this.state;
    // const isImg = Boolean(images.length);
    return (
      <div>
        {loading && <Loader />}
        {/* {isImg && <ImageGallery images={images} />} */}
      </div>
    );
  }
}
