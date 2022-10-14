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
export const Gallery = styled.li`
  flex-basis: calc((100% - 120px) / 4);
  cursor: pointer;
  box-shadow: 0px 1px 3px rgb(0 0 0 / 12%), 0px 1px 1px rgb(0 0 0 / 14%),
    0px 2px 1px rgb(0 0 0 / 20%);
  border-radius: 4px;
`;
