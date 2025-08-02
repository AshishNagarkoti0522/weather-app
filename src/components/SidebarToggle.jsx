import React, { useState } from 'react';
import Sidebar from './Sidebar';
import LoginModal from './LoginModal';
import SignUpModal from './SignUpModal';

function SidebarToggle({ resetWeather }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignUpModal, setShowSignUpModal] = useState(false);
  const [user, setUser] = useState(null);

  const handleLoginClick = () => setShowLoginModal(true);
  const handleSignUpClick = () => setShowSignUpModal(true);

  const handleLogin = (name) => {
    setUser({ name });
    setShowLoginModal(false);
    setIsSidebarOpen(false);
    resetWeather();
  };
  
  const handleSignUp = (name) => {
    setUser({ name });
    setShowSignUpModal(false);
    setIsSidebarOpen(false);
    resetWeather();
  };
  
  const handleLogout = () => {
    setUser(null);
    setIsSidebarOpen(false);
  };

  return (
    <>
      {!isSidebarOpen && (
        <div className="hamburger-icon" onClick={() => setIsSidebarOpen(true)}>
          <i class="fa-solid fa-ellipsis-vertical"></i>
        </div>
      )}
      {isSidebarOpen && (
        <Sidebar
          user={user}
          onLoginClick={handleLoginClick}
          onSignUpClick={handleSignUpClick}
          onLogout={() => {
            handleLogout();
            resetWeather();
        }}
          closeSidebar={() => setIsSidebarOpen(false)}
        />
      )}
      {showLoginModal && (
        <LoginModal
          onLogin={handleLogin}
          onClose={() => setShowLoginModal(false)}
        />
      )}
      {showSignUpModal && (
        <SignUpModal
          onSignUp={handleSignUp}
          onClose={() => setShowSignUpModal(false)}
        />
      )}
    </>
  );
}

export default SidebarToggle;
