import { IconLoader } from '../../../icons';
import { $mainFontColor, $primaryColor } from '../../../styled/variables';
import { Styled } from './ButtonStyled';

type ButtonProps = {
  /**
   * What text color to use
   */
  color?: string;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * Button style type
   */
  styleType?: 'fill' | 'outline' | 'transparent';
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Button states
   */
  state?: 'normal' | 'disabled' | 'pending';
  /**
   * Button contents
   */
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

/**
 * Primary UI component for user interaction
 */
export const Button: React.FC<ButtonProps> = ({
  color = $mainFontColor,
  backgroundColor = $primaryColor,
  styleType = 'fill',
  size = 'small',
  state = 'normal',
  children,
  ...props
}) => {
  return (
    <Styled.Wrap
      $color={color}
      $backgroundColor={backgroundColor}
      $styleType={styleType}
      $size={size}
      $state={state}
      type={props.type}
      {...props}>
      <span>{children}</span>
      {state === 'pending' && <IconLoader />}
    </Styled.Wrap>
  );
};
