/** @format */

import React from 'react';
import { useSelector } from 'react-redux';
import { selectFilter } from '../redux/filter/selectors';

interface HighlightProps {
  str: string;
}

export const Highlight: React.FC<HighlightProps> = ({ str }) => {
  const { searchValue } = useSelector(selectFilter);
  if (!searchValue) return <>{str}</>;
  const regexp = new RegExp(searchValue, 'ig');
  const matchValue = str.match(regexp);
  if (matchValue) {
    return (
      <>
        {str.split(regexp).map((s, index, array) => {
          if (index < array.length - 1) {
            const c = matchValue.shift();
            return (
              <span key={index}>
                {s}
                <mark>{c}</mark>
              </span>
            );
          }
          return <React.Fragment key={index}>{s}</React.Fragment>;
        })}
      </>
    );
  }
  return <>{str}</>;
};
