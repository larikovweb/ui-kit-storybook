import styled from '@emotion/styled';

const Wrapper = styled.div``;
const Head = styled.div``;

const Overflow = styled.div<{
  $overflowHeight: number | undefined;
  $headHeight: number | undefined;
  $open: boolean;
  $autoHeight: boolean;
}>`
  overflow: hidden;
  max-height: ${({ $overflowHeight, $open, $autoHeight }) => {
    if ($open && !$autoHeight) {
      return `${$overflowHeight || 0}px`;
    } else if (!$open) {
      return `${$overflowHeight || 0}px`;
    } else {
      return 'none';
    }
  }};
  transition: max-height 0.3s;
`;

export const Styled = {
  Wrapper,
  Head,
  Overflow,
};
