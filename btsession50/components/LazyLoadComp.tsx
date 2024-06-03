import React, { Suspense, useState, useEffect } from 'react';

const LazyLoadComp: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingSpinner />;
  }

  const loremText: string[] = Array.from({ length: 100 }, () => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ');

  return (
    <div style={{ minHeight: '1000px' }}>
      <Suspense fallback={<LoadingSpinner />}>
        <div>
          {loremText}
        </div>
      </Suspense>
    </div>
  );
};

const LoadingSpinner: React.FC = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default LazyLoadComp;
