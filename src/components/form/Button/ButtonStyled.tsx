import { css } from '@emotion/react';
import styled from '@emotion/styled';

type ButtonProps = {
  $color: string;
  $backgroundColor: string;
  $styleType?: 'fill' | 'outline' | 'transparent';
  $size?: 'small' | 'medium' | 'large';
  $state?: 'normal' | 'disabled' | 'pending';
};

const Wrap = styled.button<ButtonProps>`
  //default styles
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  outline: none;
  border: none;
  border-width: 0.0625rem;
  border-style: solid;
  border-radius: 0.5rem;
  border-color: transparent;
  background-color: transparent;
  font-weight: 400;
  font-size: 1rem;
  line-height: 120%;
  transition: box-shadow 0.3s, opacity 0.3s, border-color 0.3s;

  &:hover {
    box-shadow: 0 0 1rem rgba(25, 25, 28, 0.16);
  }

  &:active {
    opacity: 0.75;
    transition: opacity 0.3s;
  }

  > svg {
    width: 1.5rem;
    height: 1.5rem;
    fill: ${({ $color }) => $color};
    stroke: ${({ $color }) => $color};
    transition: stroke 0.3s, fill 0.3s, opacity 0.3s;
  }

  //dynamic styles
  ${({ $state }) => {
    switch ($state) {
      case 'pending':
        return css`
          opacity: 0.75;
          pointer-events: none;
          span {
            opacity: 0;
          }
          svg {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
          }
        `;
      case 'disabled':
        return css`
          opacity: 0.5;
          pointer-events: none;
        `;
    }
  }}

  ${({ $styleType, $backgroundColor, $color }) => {
    switch ($styleType) {
      case 'fill':
        return css`
          color: ${$color};
          background-color: ${$backgroundColor};
        `;
      case 'outline':
        return css`
          background-color: transparent;
          border-color: ${$color};
          color: ${$color};
        `;
      case 'transparent':
        return css`
          background-color: transparent;
          color: ${$color};
        `;
    }
  }}

  ${({ $size }) => {
    switch ($size) {
      case 'small':
        return css`
          padding: 0.5rem 1rem;
        `;
      case 'medium':
        return css`
          padding: 0.75rem 1.5rem;
        `;
      case 'large':
        return css`
          padding: 1rem 2rem;
        `;
    }
  }}
`;

export const ButtonStyled = {
  Wrap,
};
