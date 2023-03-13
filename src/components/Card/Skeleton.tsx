/** @format */

import React from 'react';
import ContentLoader from 'react-content-loader';

export const Skeleton: React.FC = () => {
  return (
    <ContentLoader
      speed={2}
      width={260}
      height={257}
      viewBox="0 0 260 257"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb">
      <rect x="10" y="0" rx="5" ry="5" width="240" height="168" />
      <rect x="26" y="180" rx="5" ry="5" width="160" height="20" />
      <rect x="26" y="208" rx="5" ry="5" width="80" height="16" />
    </ContentLoader>
  );
};
