import styled from 'styled-components';

const DownloadFormContainer = styled.div`
  margin: 5% 0%;
  width: 80%;

  .form-group {
    min-height: 40px;
    margin: 2% 0;
  }

  label {
    min-width: 30%;
    margin-right: 5%;
  }

  input,
  textarea {
    width: 80%;
    margin-left: 5%;
    padding: 2%;
    float: right;
  }
`;

const ButtonDiv = styled.div`
  text-align: center;
  min-width: 100%;
  margin-top: 15%;
`;

const DownloadButton = styled.a`
  background: -webkit-linear-gradient(180deg, #fddb71 0%, #f0883f 100%);
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  font-size: 14px;
  text-transform: uppercase;
  height: 50px;
  padding: 15px 20px 5px 20px;
  margin-top: 3.5%;
  letter-spacing: 0.04em;
  color: #ffffff;
  cursor: pointer;
  width: 100%;
  :hover {
    background: -webkit-linear-gradient(202.46deg, #fff8e1 0.54%, #ffcc80 88.49%);
    color: #000000;
  }
`;

export { DownloadFormContainer, ButtonDiv, DownloadButton };
