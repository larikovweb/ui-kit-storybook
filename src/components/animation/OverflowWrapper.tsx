import React from 'react';
import { useElementSize } from '../../hooks/useElementSize';
import { Styled } from './OverflowWrapperStyled';

type Props = {
  /**
   * two elements are transferred to the children: head - the visible part, body - the hidden part
   */
  children: [head: React.ReactNode, body: React.ReactNode];
  /**
   * is open
   */
  open: boolean;
};

export const OverflowWrapper: React.FC<Props> = ({ children: [head, body], open = false }) => {
  const wrapperRef = React.useRef<HTMLDivElement>(null);
  const headRef = React.useRef<HTMLDivElement>(null);
  const { height: wrapperHeight } = useElementSize(wrapperRef);
  const { height: headHeight } = useElementSize(headRef);
  const [autoHeight, setAutoHeight] = React.useState(false);
  const [overflowHeight, setOverflowHeight] = React.useState<number | undefined>(
    open ? wrapperHeight : headHeight,
  );

  React.useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (open) {
      timeout = setTimeout(() => {
        setAutoHeight(true);
      }, 300);
      setOverflowHeight(wrapperHeight);
    } else {
      if (autoHeight) {
        timeout = setTimeout(() => {
          setAutoHeight(false);
          setOverflowHeight(wrapperHeight);
        }, 100);
      } else {
        setOverflowHeight(headHeight);
      }
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [open, autoHeight, wrapperHeight, headHeight]);

  return (
    <Styled.Overflow
      $overflowHeight={overflowHeight}
      $headHeight={headHeight}
      $open={open}
      $autoHeight={autoHeight}>
      <Styled.Wrapper ref={wrapperRef}>
        <Styled.Head ref={headRef}>{head}</Styled.Head>
        {body}
      </Styled.Wrapper>
    </Styled.Overflow>
  );
};
