import React from 'react';
import { Inline as InlineType } from './types';
import styled from 'styled-components';

import hash from '../../../utils/hash';
import Hyperlink from '../../../components/Hyperlink';

type Props = {
  content: InlineType[];
};

const Verse = styled.span`
  &:not(:first-child)::before {
    content: ' ';
  }
`;

const Inline = ({ content }: Props) => {
  return (
    <>
      {content.map((char, idx) => {
        if (char.type === 'verse') {
          return <Verse key={char.reference.id} id={char.reference.id} />;
        }

        if (char.type === 'hyperlink') {
          return <Hyperlink key={hash(JSON.stringify(char))}>{char.content}</Hyperlink>;
        }

        if (char.style === 'bold') {
          return (
            <span key={hash(JSON.stringify(char))}>
              <strong>{char.content}</strong>
            </span>
          );
        }

        if (char.style === 'italic') {
          return (
            <span key={hash(JSON.stringify(char))}>
              <em>{char.content}</em>
            </span>
          );
        }

        return <span key={hash(JSON.stringify(char))}>{char.content}</span>;
      })}
    </>
  );
};

export default Inline;
