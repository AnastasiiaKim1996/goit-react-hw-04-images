import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  justify-content: center;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding-top: 3px;
  padding-right: 18px;
  padding-bottom: 3px;
  padding-left: 18px;
  margin-bottom: 10px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 4px;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.63);
  color: #ffffff;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    background-color: #ffffff;
    color: rgba(0, 0, 0, 0.63);
  }
`;

export const ButtonTitle = styled.p`
  margin-right: 5px;
`;
