import styled from 'styled-components';

export const Form = styled.form`
  position: sticky;
  width: 100vw;
  top: 0;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 10px;
  padding-bottom: 10px;
  background-color: rgba(0, 0, 0, 0.63);
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const Input = styled.input`
  padding: 10px;
  width: 300px;
  outline: none;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 4px;
  transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    border-color: #ffffff;
  }
  &:focus {
    border-color: #ffffff;
  }
`;

export const Btn = styled.button`
  position: absolute;
  padding: 12px;
  display: flex;
  right: 0;
  cursor: pointer;
  border: none;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  background-color: rgba(0, 100, 0, 0.3);
  color: #ffffff;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    color: rgba(0, 0, 0, 0.63);
  }
`;

export const Title = styled.h1`
  display: inline-block;
  color: azure;
  margin-right: 30px;
`;
export const Blue = styled.span`
  color: #4285f4;
`;
export const Red = styled.span`
  color: #ea4335;
`;
export const Yellow = styled.span`
  color: #fbbc05;
`;
export const Green = styled.span`
  color: #34a853;
`;
