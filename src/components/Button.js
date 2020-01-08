import React from 'react';

const sizes = {
  default: `py-3 px-8`,
  lg: `py-4 px-12`,
  xl: `py-5 px-16 text-lg`
};

const contact = () => {
  window.location.href = `mailto:info@apollomedics.co.uk`;
}

const Button = ({ children, className = '', size }) => {
  return (
    <button
      onClick={contact}
      type="button"
      className={`
        ${sizes[size] || sizes.default}
        ${className}
        bg-primary
        hover:bg-primary-darker
        rounded
        text-white
    `}
    >
      {children}
    </button>
  );
};

export default Button;
