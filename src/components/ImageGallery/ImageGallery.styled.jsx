import styled from 'styled-components';

export const ImgGallery = styled.ul`
  /* margin-top: 15px; */
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 20px;
  padding: 0;
  list-style: none;
  max-width: calc(100vw - 80px);
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 30px;
`;
