import React from 'react';

function Sidebar({ user, onLoginClick, onSignUpClick, onLogout, closeSidebar }) {

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h2>Hello{user ? `, ${user.name}` : ','}</h2>
        <hr />
      </div>

      {!user && (
        <div className="sidebar-options">
          <button onClick={() => onLoginClick()}>Login</button>
          <button onClick={onSignUpClick}>Signup</button>
        </div>
      )}

      {user && (
        <div className="sidebar-options">
          <button onClick={onLogout}>Log out</button>
        </div>
      )}

      <div className="sidebar-close" onClick={closeSidebar}>
        <i class="fa-solid fa-xmark"></i>
      </div>
    </div>
  );
}

export default Sidebar;
