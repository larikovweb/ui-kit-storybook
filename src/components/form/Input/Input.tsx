import React, { useState } from 'react';
import { InputStyled } from './InputStyled';

type InputProps = {
  /**
   * Input placeholder
   */
  placeholder?: string;
  /**
   * Additional element in a low cabinet
   */
  children?: React.ReactNode;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const Input: React.FC<InputProps> = ({ children, ...rest }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const handleFocus = (): void => {
    setIsFocused(true);
  };

  const handleBlur = (): void => {
    setIsFocused(false);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <InputStyled.Wrap>
      <InputStyled.Field
        $focused={isFocused || inputValue.length > 0}
        $isChildren={Boolean(children)}
        type="text"
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
        value={inputValue}
        {...rest}
      />
      <InputStyled.Placeholder $focused={isFocused || inputValue.length > 0}>
        {rest.placeholder}
      </InputStyled.Placeholder>
      {children}
    </InputStyled.Wrap>
  );
};
