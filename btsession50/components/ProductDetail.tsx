import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <div>
      <p>Product ID: {id}</p>
    </div>
  );
};

export default ProductDetail;
