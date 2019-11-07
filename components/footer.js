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

      @media (max-width: 1000px){
        .footer-content {
          justify-content: flex-start;
          width: 60vw;
        }

        .footer-content > p {
          padding-right: 1em;
        }

        .footer p {
          font-size: 0.5rem;
        }
      }
    `}</style>
  </div>
)

export default Footer;