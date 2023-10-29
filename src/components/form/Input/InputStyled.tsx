import styled from '@emotion/styled';
import {
  $dangerColor,
  $inputBgColor,
  $inputBorderColor,
  $inputTextColor,
  $mainFont,
} from '../../../styled/variables';

const Wrap = styled.div<{ $error?: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  width: 100%;
  border-color: ${({ $error }) => ($error ? $dangerColor : $inputBorderColor)};
  color: ${({ $error }) => ($error ? $dangerColor : $inputTextColor)};
  background: ${$inputBgColor};

  //custom styles
  border-radius: 0.75rem;
  border-width: 0.0625rem;
  border-style: solid;
`;

const Field = styled.input<{ $focused: boolean; $isChildren: boolean; $error: boolean }>`
  font-family: ${$mainFont}, sans-serif;
  width: 100%;
  height: 3rem;
  color: ${({ $error }) => ($error ? $dangerColor : $inputTextColor)};

  border: none !important;
  outline: none !important;
  background-color: transparent;
  box-sizing: border-box;

  //custom styles
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding: ${({ $focused }) => ($focused ? '0.75rem 1rem 0rem' : '0.75rem 1rem')};

  &:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 1000px ${$inputBgColor} inset !important;
    border-radius: 0.75rem !important;
    color: ${({ $error }) => ($error ? $dangerColor : $inputTextColor)} !important;
    -webkit-text-fill-color: ${$inputTextColor} !important;
  }
  &::placeholder {
    opacity: 0;
  }
`;

const Placeholder = styled.label<{ $focused: boolean; $error: boolean }>`
  pointer-events: none;
  position: absolute;
  left: 1rem;
  color: ${({ $error }) => ($error ? $dangerColor : $inputTextColor)} !important;
  top: ${({ $focused }) => ($focused ? '15%' : '50%')};
  transform: ${({ $focused }) => ($focused ? 'translateY(0)' : 'translateY(-50%)')};
  font-size: ${({ $focused }) => ($focused ? '0.75rem' : '1rem')};
  opacity: ${({ $focused }) => ($focused ? '0.5' : '1')};
  transition: opacity 0.3s, top 0.3s, font-size 0.3s, transform 0.3s;
`;

export const InputStyled = {
  Wrap,
  Field,
  Placeholder,
};
