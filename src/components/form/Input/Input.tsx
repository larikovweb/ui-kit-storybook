import React, { useState } from 'react';
import { Styled } from './InputStyled';

type InputProps = {
  /**
   * Input placeholder
   */
  placeholder?: string;
  /**
   * Additional element in a low cabinet
   */
  children?: React.ReactNode;
  /**
   * Input error
   */
  error?: string | boolean;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const Input: React.FC<InputProps> = ({ children, placeholder, error = false, ...props }) => {
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
    <Styled.Wrap $error={Boolean(error)}>
      <Styled.Field
        $focused={isFocused || inputValue.length > 0}
        $error={Boolean(error)}
        $isChildren={Boolean(children)}
        type="text"
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
        value={inputValue}
        {...props}
      />
      <Styled.Placeholder $error={Boolean(error)} $focused={isFocused || inputValue.length > 0}>
        {placeholder}
      </Styled.Placeholder>
      {children}
    </Styled.Wrap>
  );
};
