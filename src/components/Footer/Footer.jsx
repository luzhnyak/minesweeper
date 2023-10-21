import React from 'react';
import { StyledFooter } from './Footer.styled';

const Footer = () => {
  return (
    <StyledFooter>
      <p>Open cell on PC - click left mouse button</p>
      <p>Open cell on mobile - short tap</p>
      <p>Put flag on PC - click right mouse button</p>
      <p>Put flag on mobile - long tap</p>
    </StyledFooter>
  );
};

export default Footer;
