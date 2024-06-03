import React from 'react';

const Post: React.FC = () => {
  const loremText: string[] = Array.from({ length: 100 }, () => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ');

  return (
    <div>
      <h2>Post</h2>
      {loremText}
    </div>
  );
};

export default Post;
