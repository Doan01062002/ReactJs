import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

const Employee: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const employeeName = searchParams.get('employeeName');
    if (employeeName) {
      setInputValue(employeeName);
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSearch = () => {
    navigate(`/employee?employeeName=${encodeURIComponent(inputValue)}`);
  };

  useEffect(() => {
    const employeeName = searchParams.get('employeeName');
    if (employeeName) {
      setInputValue(employeeName);
    }
  }, [searchParams]);

  return (
    <div>
      <h1>Employee Search</h1>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter employee name or ID"
      />
      <button onClick={handleSearch}>Search</button>
      {searchParams.get('employeeName') && (
        <p>Searching for: {searchParams.get('employeeName')}</p>
      )}
    </div>
  );
};

export default Employee;
