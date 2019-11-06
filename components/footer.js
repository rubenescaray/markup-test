import React from 'react'

const Footer = () => (
  <div className="footer">
    <div className="footer-content">
      <p>About Us</p>
      <p>FAQ</p>
      <p>Terms & Conditions</p>
      <p>Privacy</p>
    </div>
    <p>@ Ruben Escaray 2019</p>
    <style jsx>{`
      .footer {
        display: flex;
        justify-content: space-between;
      }

      .footer-content {
        display: flex;
        width: 20vw;
        justify-content: space-between;
      }

      .footer-content > p {
        cursor: pointer;
      }

      .footer p {
        font-size: 0.7rem;
        color: gray;
      }
    `}</style>
  </div>
)

export default Footer;