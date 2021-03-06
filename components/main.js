import React from 'react'
import CustomButton from './button'

const Main = () => (
  <div className="main">
    <div className="main-content">
      <h2 className="main-h2">Every Day, Log An Idea</h2>
      <h4 className="main-h4">a business idea, a startup idea, a project idea</h4>
      <p>We'll send you a daily email reminding you to submit an idea.</p>
      <p>Just respond to it and we'll save it for you</p>
      <CustomButton text="Sign Up" />
    </div>
    <div class="main-image">
      <img src="/img-01.png" className="img-01" />
    </div>
    <style jsx>{`
      .main {
        margin-top: 2em;
        /* height: 80vh; */
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
      }

      .main-content {
        flex: 1;
        margin-top: 6em;
      }

      .main-image {

      }

      .main-h2 {
        color: rgb(34, 15, 47);
      }

      .main-h4 {
        font-weight: 700;
        color: rgb(79, 79, 79);
        margin-bottom: 3em; 
      }

      .main-content p {
        color: rgb(146, 146, 146);
      }

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


      @media (max-width: 1000px){
        .main {
          margin-top: 0;
          width: 80vw;
        }

        .main-content {
          margin-top: 1em;
          text-align: center;
        }

        .img-01 {
          display: none;
        }
      }
    `}</style>
  </div>
)

export default Main
