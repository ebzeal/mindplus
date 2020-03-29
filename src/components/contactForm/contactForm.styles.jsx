import styled from 'styled-components';

const ContactFormContainer = styled.div`
  margin: 5% 15%;
  width: 50%;

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
    width: 60%;
    margin-left: 5%;
    padding: 2%;
    float: right;
  }
`;

const ButtonDiv = styled.div`
  text-align: center;
  min-width: 100%;
  margin-top: 8%;
`;

export { ContactFormContainer, ButtonDiv };
