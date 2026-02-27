import React from 'react';

const ProtectedEmail = ({ className = "" }) => {
  const handleEmailClick = () => {
    const user = 'kalavaguntapurnesh';
    const domain = 'gmail.com';
    const email = `${user}@${domain}`;
    window.location.href = `mailto:${email}`;
  };

  return (
    <button 
      onClick={handleEmailClick}
      className={`text-sm text-gray-600 font-medium hover:text-brand transition-colors ${className}`}
      title="Click to send email"
    >
      Contact via Email
    </button>
  );
};

export default ProtectedEmail;
