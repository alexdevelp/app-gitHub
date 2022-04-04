import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div``;

export const Title = styled.h1`
  font-size: 48px;
  max-width: 450px;
  line-height: 56px;
  margin-top: 80px;
`;

export const Form = styled.form`
  margin-top: 40px;
  max-width: 700px;
  display: flex;

  input {
    flex: 1;
    height: 70px;
    padding: 0 24px;
    border: 2px solid #ffff;
    outline: none;
    border-radius: 5px 0 0 5px;
    color: #3a3a3a;
    border-right: 0;
    font-size: 20px;

    &::placeholder {
      color: #ccc;
    }
  }

  button {
    width: 160px;
    background-color: #04d361;
    border-radius: 0 5px 5px 0;
    outline: none;
    border: none;
    color: #fff;
    font-weight: bold;
    font-size: 20px;

    transition: 0.6s;

    &:hover {
      background-color: ${shade(0.2, '#04d361')};
    }
  }
`;
