import styled, { keyframes } from 'styled-components';
import { fadeInDownBig, bounceInRight } from 'react-animations';

const fadeInDownBigAnimation = keyframes`${fadeInDownBig}`;
export const BouncyDiv = styled.div`
  animation: 1s ${fadeInDownBigAnimation};
`;

const bounceInRightAnimation = keyframes`${bounceInRight}`;
export const BounceInRightSpan = styled.span`
  animation: 5s ${bounceInRightAnimation};
`;
