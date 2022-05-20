import { Link } from 'react-router-dom';
import React from 'react';
import styled from 'styled-components';

const ButtonWrapper = styled(Link)`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, max-content);
  grid-gap: 8px;
  align-items: center;
  text-decoration: none;
  font-weight: 600;
  color: #000;
  font-family: var(--sans-serif);
  border: 1px solid #000;
  border-radius: 4px;
  padding: 4px 8px;

  svg {
    width: 24px;
    height: 24px;
    stroke: #000;
  }
`;

const ProfileButton = () => (
  <ButtonWrapper to="">
    <span>Profile</span>
    <svg xmlns="http://www.w3.org/2000/svg" fill="#ffffff" viewBox="0 0 256 256">
      <circle cx="128" cy="96" r="64" strokeMiterlimit="10" strokeWidth="16" />
      <path
        d="M31,216a112,112,0,0,1,194,0"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
    </svg>
  </ButtonWrapper>
);

export default ProfileButton;
