import styled from 'styled-components';
import { shade } from 'polished';
import { FormProps } from '../../interface/formProps';

export const Container = styled.div``;

export const Title = styled.h1`
  font-size: 48px;
  max-width: 450px;
  line-height: 56px;
  margin-top: 80px;
`;

export const Form = styled.form<FormProps>`
  margin-top: 40px;
  max-width: 700px;
  display: flex;

  input {
    flex: 1;
    height: 70px;
    padding: 0 24px;
    border: 2px solid ${props => (props.hasError ? '#FF6B6B' : '#ffff')};
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

export const Repos = styled.div`
  margin-top: 80px;
  max-width: 700px;

  a {
    background: #fff;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    display: flex;
    align-items: center;
    transition: transform 0.3s;

    &:hover {
      transform: translateX(6px);
      box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    }
    & + a {
      margin-top: 16px;
    }
    img {
      width: 64px;
      height: 64px;
      border-radius: 50%;
    }
    div {
      margin: 0 16px;
      flex: 1;

      strong {
        font-size: 20px;
        color: #3d3d4d;
      }
      p {
        font-size: 18px;
        color: #a8a8b3;
        margin-top: 4px;
      }
    }

    svg {
      margin-left: auto;
      color: #cbcbd6;
    }
  }
`;

export const Error = styled.div`
  display: block;
  color: #ff6b6b;
  margin-top: 8px;
`;
