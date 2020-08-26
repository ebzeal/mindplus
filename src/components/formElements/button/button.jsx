import React from 'react';

import ButtonDiv from './button.styles';

const Button = ({ text, type, onClick }) => <ButtonDiv onClick={onClick}>{text}</ButtonDiv>;

export default Button;
