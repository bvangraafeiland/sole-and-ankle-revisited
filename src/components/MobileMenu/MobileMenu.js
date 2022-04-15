/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';

import { QUERIES, COLORS, WEIGHTS } from '../../constants';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const MobileMenu = ({ isOpen, onDismiss }) => {
  return (
    <Overlay isOpen={isOpen} onDismiss={onDismiss}>
      <Wrapper>
        <TopSection>
          <CloseButton onClick={onDismiss}>
            <Icon id="close" />
            <VisuallyHidden>Dismiss menu</VisuallyHidden>
          </CloseButton>
        </TopSection>
        <MainNav>
          <a href="/sale">Sale</a>
          <a href="/new">New&nbsp;Releases</a>
          <a href="/men">Men</a>
          <a href="/women">Women</a>
          <a href="/kids">Kids</a>
          <a href="/collections">Collections</a>
        </MainNav>
        <Footer>
          <a href="/terms">Terms and Conditions</a>
          <a href="/privacy">Privacy Policy</a>
          <a href="/contact">Contact Us</a>
        </Footer>
      </Wrapper>
    </Overlay>
  );
};

const CloseButton = styled(UnstyledButton)`
  position: relative;
  right: -10px;
`;
const Overlay = styled(DialogOverlay)`
  display: none;
  @media ${QUERIES.tabletAndSmaller} {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.2);
    display: flex;
    justify-content: flex-end;
  }
`;
const Wrapper = styled(DialogContent)`
  background: white;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  width: 300px;
`;
const TopSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
`;
const MainNav = styled.nav`
  flex: 1;
  display: flex;
  gap: 22px;
  flex-direction: column;
  text-transform: uppercase;
  & a {
    text-decoration: none;
    color: ${COLORS.gray[900]};
    font-size: calc(18 / 16 * 1rem);
    font-weight: ${WEIGHTS.medium};
  }
`;
const Footer = styled.footer`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 14px;
  & a {
    text-decoration: none;
    color: ${COLORS.gray[700]};
    font-size: calc(14 / 16 * 1rem);
    font-weight: ${WEIGHTS.normal};
  }
`;

export default MobileMenu;
