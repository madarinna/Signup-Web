import React from 'react';
import MuiButton from '@material-ui/core/Button';

const Button = ({ children, ...rest }: ButtonProps) => <MuiButton {...rest}>{children}</MuiButton>;

export interface ButtonProps {
  children?: string | React.ReactNode;
}
export default Button;
