import { useState, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Searchbar } from './Searchbar/Searchbar';
import { Loader } from 'components/Loader/Loader';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { FetchImg } from './Api/FetchImg';
import { LoadMoreBtn } from './Button/LoadMoreBtn';
import { ErrorMessage } from './ErrorMessage/ErrorMessage';
import { Modal } from './Modal/Modal';
import { toastSuccess, toastError, toastWarn } from './Notification/Toasts';

import brokenImg from 'components/Img/brokenImage.png';

import React from 'react';

export const App = () => {
  const [images, setImages] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalImage, setModalImage] = useState('');

  const isImg = Boolean(images.length);

  useEffect(() => {
    if (searchValue === '') {
      return;
    }
    setLoading(true);
    FetchImg(searchValue, page)
      .then(({ totalHits, hits }) => {
        if (totalHits === 0) {
          toastError();
          setLoading(false);
          setError(true);
          return;
        }
        if (page === 1 && hits.length > 1) {
          toastSuccess();
        }
        const data = hits.map(({ id, tags, webformatURL, largeImageURL }) => ({
          id,
          tags,
          webformatURL,
          largeImageURL,
        }));
        setImages(img => [...img, ...data]);
        setLoading(false);
        setError(false);
      })
      .catch(error => toastError())
      .finally(() => {
        setLoading(false);
      });
  }, [searchValue, page]);

  // метод додавання нових картинок через btn load more

  const LoadMore = () => {
    setPage(page + 1);
  };

  //перекидання значення з інпуту через пропс з (searchbar) у основний стейт

  const handleFormSubmit = searchText => {
    if (searchValue === searchText.trim()) {
      toastWarn();
    }
    setSearchValue(searchText);
    setPage(1);
    setImages([]);
  };

  //відкриття && закриття модалки

  const onToggleModal = () => {
    setModalIsOpen(!modalIsOpen);
  };

  const openModal = largeImageURL => {
    setModalIsOpen(true);
    setModalImage(largeImageURL);
  };

  return (
    <div>
      <Searchbar searchValue={handleFormSubmit} />
      {loading && <Loader />}
      {error === true ? (
        <ErrorMessage errorImg={brokenImg} />
      ) : (
        images.length > 0 && (
          <ImageGallery images={images} onImgClick={openModal} />
        )
      )}
      {isImg && (
        <LoadMoreBtn type="button" loadMoreImg={LoadMore}>
          Load more
        </LoadMoreBtn>
      )}
      {modalIsOpen && (
        <Modal onClose={onToggleModal}>
          <img src={modalImage} alt="largeImage" />
        </Modal>
      )}

      <ToastContainer autoClose={2000} />
    </div>
  );
};
