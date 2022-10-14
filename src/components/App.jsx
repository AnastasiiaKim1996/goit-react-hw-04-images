import React, { Component } from 'react';

import { Searchbar } from './Searchbar/Searchbar';
import { Loader } from 'components/Loader/Loader';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { FetchImg } from './Api/FetchImg';
import { LoadMoreBtn } from './Button/LoadMoreBtn';

export class App extends Component {
  state = {
    images: [],
    searchValue: '',
    page: 1,
    loading: false,
    error: null,
  };

  // методи життєвого циклу

  async componentDidUpdate(_, prevState) {
    try {
      const { page, searchValue } = this.state;

      if (prevState.searchValue !== searchValue || prevState.page !== page) {
        this.setState({ isLoading: true });
        await FetchImg(searchValue, page).then(data => {
          return data.hits.length === 0
            ? 'Ops! We did not find any images matching your request. Please try again.'
            : this.setState(prevState => ({
                images: [...prevState.images, ...data.hits],
              }));
        });
        this.setState({ isLoading: false });
      }
    } catch (error) {
      this.setState({ isLoading: true });
      console.log(error);
      this.setState({ isLoading: false });
    }
  }

  // метод додавання нових картинок через btn load more

  LoadMore = () => {
    this.setState(({ page }) => {
      return {
        page: page + 1,
      };
    });
  };

  //перекидання значення з інпуту через пропс з (searchbar) у основний стейт

  handleFormSubmit = searchValue => {
    this.setState({ searchValue, page: 1 });
  };

  render() {
    const { loading, images } = this.state;
    const isImg = Boolean(images.length);
    return (
      <div>
        {loading && <Loader />}
        <Searchbar searchValue={this.handleFormSubmit} />
        {isImg && <ImageGallery images={images} />}
        {isImg && (
          <LoadMoreBtn type="button" onClick={this.LoadMore}>
            Load more
          </LoadMoreBtn>
        )}
      </div>
    );
  }
}
