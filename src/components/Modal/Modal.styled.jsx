import styled from 'styled-components';

export const Backdrop = styled.div`
     align-items: center;
    background-color: rgba(0,0,0,.8);
    display: flex;
    height: 100vh;
    justify-content: center;
    left: 0;
    position: fixed;
    top: 0;
    width: 100vw;
    z-index: 1200;
}
`;

export const PopUp = styled.div`
  max-height: calc(100vh - 44px);
  max-width: calc(100vw - 58px);
`;
