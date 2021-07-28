import styled, { keyframes } from 'styled-components';
import { fadeInDownBig, bounceInRight, bounceInLeft } from 'react-animations';

const fadeInDownBigAnimation = keyframes`${fadeInDownBig}`;
const bounceInRightAnimation = keyframes`${bounceInRight}`;
const bounceInLeftAnimation = keyframes`${bounceInLeft}`;

export const FadeInDownDiv = styled.div`
  animation: 1s ${fadeInDownBigAnimation};
`;

export const BounceInRightSpan = styled.span`
  animation: 5s ${bounceInRightAnimation};
`;

export const BounceInLeftDiv = styled.div`
  animation: 1s ${bounceInLeftAnimation};
`;

export const BounceInRightDiv = styled.div`
  animation: 1s ${bounceInRightAnimation};
`;
