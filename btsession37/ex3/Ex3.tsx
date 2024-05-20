// Button.jsx
import React, { useContext } from 'react';
import ThemeContext from '../ex1/Ex1';

const Button = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme} style={{ backgroundColor: theme, color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px' }}>
    Click me
    </button>
  );
};

export default Button;