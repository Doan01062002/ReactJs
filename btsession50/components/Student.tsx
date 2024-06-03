import React from 'react';
import { useParams } from 'react-router-dom';

const Student: React.FC = () => {
  const { name } = useParams<{ name: string }>();

  return (
    <div>
      <p>Student Name: {name}</p>
    </div>
  );
};

export default Student;
