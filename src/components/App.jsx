import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Searchbar } from './Searchbar/Searchbar';
import { Loader } from 'components/Loader/Loader';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { FetchImg } from './Api/FetchImg';
import { LoadMoreBtn } from './Button/LoadMoreBtn';
import { ErrorMessage } from './ErrorMessage/ErrorMessage';
import { Modal } from './Modal/Modal';
import brokenImg from 'components/Img/brokenImage.png';

export class App extends Component {
  state = {
    images: [],
    searchValue: '',
    page: 1,
    loading: false,
    error: null,
    modalIsOpen: false,
    modalImage: '',
  };

  // методи життєвого циклу

  async componentDidUpdate(prevProps, prevState) {
    try {
      const { images, page, searchValue, modalImage } = this.state;

      if (prevState.searchValue !== searchValue || prevState.page !== page) {
        this.setState({ loading: true });
        await FetchImg(searchValue, page).then(data => {
          return data.hits.length === 0
            ? this.setState({ error: true })
            : this.setState(img => ({
                images: [...img.images, ...data.hits],
                error: false,
              }));
        });
        this.setState({ loading: false });
      }
      if (images.length > 1 && page === 1 && modalImage === '') {
        this.toastSuccess();
      }
    } catch (error) {
      return this.toastError();
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
    if (this.state.searchValue === searchValue) {
      this.toastWarn();
    }
    this.setState({ searchValue, page: 1, images: [] });
  };

  //відкриття && закриття модалки

  onToggleModal = () => {
    this.setState(({ modalIsOpen }) => ({
      modalIsOpen: !modalIsOpen,
    }));
    this.toastInfoCloseModal();
  };

  openModal = largeImageURL => {
    this.setState({
      modalIsOpen: true,
      modalImage: largeImageURL,
    });
    this.toastInfoOpenModal();
  };

  // нотіфікашки

  toastSettings = {
    theme: 'colored',
  };

  toastSuccess = () => {
    return toast.success(
      'Hooray! We found what you were looking for 😉',
      this.toastSettings
    );
  };
  toastError = () => {
    return toast.error(
      'Oops, something went wrong, please try again 🙊',
      this.toastSettings
    );
  };
  toastWarn = () => {
    return toast.warn(
      'Sorry, you already found this picture, please check if this will be a new search 😇',
      this.toastSettings
    );
  };
  toastInfoOpenModal = () => {
    return toast.info(
      'Now you can view the full-size image 😊',
      this.toastSettings
    );
  };
  toastInfoCloseModal = () => {
    return toast.info(
      'Okey, you can view the more images 🤭 ',
      this.toastSettings
    );
  };

  render() {
    const { loading, images, error, modalIsOpen, modalImage } = this.state;
    const isImg = Boolean(images.length);

    return (
      <div>
        <Searchbar searchValue={this.handleFormSubmit} />
        {loading && <Loader />}
        {error === true ? (
          <ErrorMessage errorImg={brokenImg} />
        ) : (
          images.length > 0 && (
            <ImageGallery images={images} onImgClick={this.openModal} />
          )
        )}
        {isImg && (
          <LoadMoreBtn type="button" loadMoreImg={this.LoadMore}>
            Load more
          </LoadMoreBtn>
        )}
        {modalIsOpen && (
          <Modal onClose={this.onToggleModal}>
            <img src={modalImage} alt="largeImage" />
          </Modal>
        )}

        <ToastContainer autoClose={2000} />
      </div>
    );
  }
}
