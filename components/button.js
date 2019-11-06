import React from 'react'

const CustomButton = ({ text }) => {
  return (
    <div className="main-btn-container">
      <div className="main-btn">{text}</div>

      <style jsx>{`
        .main-btn-container {
          margin-top: 2em;
          background-color: rgba(249, 249, 249, 0.5);
          width: 250px;
          height: 130px;
          border-radius: 50px;
          padding-top: 1px;
        }

        .main-btn {
          background-color: rgb(53,17,78);
          cursor: pointer;
          border-radius: 30px;
          color: rgba(255,255,255,0.8);
          text-align: center;
          width: 80%;
          height: 20%;
          margin: 35px auto 0px auto;
          padding-top: 12px;
          font-size: 0.8rem;
        }
      `}</style>
    </div>
  )
}

export default CustomButton;