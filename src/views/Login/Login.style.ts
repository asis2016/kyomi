import styled from "styled-components";
import loginBg from '../../assets/images/login-bg-2.jpg'

export const LoginBase = styled.div`
  height: 100vh;
  background: #475d62 url(${loginBg});
  background-size: cover;
  position: relative;

  form {
    max-width: 320px;
    width: 90%;
    background-color: #1e2833;
    padding: 40px;
    border-radius: 4px;
    transform: translate(-50%, -50%);
    position: absolute;
    top: 50%;
    left: 50%;
    color: #fff;
    box-shadow: 3px 3px 4px rgba(0,0,0,0.2);

    .form-control {
      background: none;
      border: none;
      border-bottom: 1px solid #434a52;
      border-radius: 0;
      box-shadow: none;
      outline: none;
      color: inherit;
    }

    .btn-primary {
      background: #214a80;
      border: none;
      border-radius: 4px;
      padding: 11px;
      box-shadow: none;
      margin-top: 26px;
      text-shadow: none;
      outline: none;
      
      &:active {
        transform: translateY(1px);
      }
    }

    .btn-primary:hover, .btn-primary:active {
      background: #214a80;
      outline: none;
    }

    .forgot {
      display: block;
      text-align: center;
      font-size: 12px;
      color: #6f7a85;
      opacity: 0.9;
      text-decoration: none;

      &:hover, &:active {
        opacity: 1;
        text-decoration: none;
      }
    }

    .go-back a{
      display: block;
      text-align: center;
      font-size: 14px;
      color: #fff;
      opacity: 0.9;
      text-decoration: none;

      &:hover, &:active {
        opacity: 1;
        text-decoration: none;
      }
    }

   
  }

  .illustration {
    text-align: center;
    padding: 15px 0 20px;
    font-size: 100px;
    color: #2980ef;
  }

`;