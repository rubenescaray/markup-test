import React from 'react'

const Nav = () => (
  <div className="nav">
    <img src="/logo.png" className="logo" />
    <div className="login">
      <p>Log In</p>
      <img src="/user-icon.png" className="user-icon" />
    </div>
    <style jsx>{`
      .nav {
        display: flex;
        justify-content: space-between;
      }

      .logo {
        width: 100%;
        max-width: 180px;
        height: auto;
        max-height: 50px;
      }

      .login {
        display: flex;
      }

      .login p {
        color: rgb(190,190, 190);
        cursor: pointer;
        font-size: 0.8rem;
        line-height: 2.3;
      }

      .user-icon {
        width: 100%;
        max-width: 60px;
        height: auto;
        max-height: 60px;
      }
    `}</style>
  </div>
)

export default Nav
