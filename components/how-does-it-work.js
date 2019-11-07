import React from 'react'

const HowDoesItWork = () => (
  <div className="how-does-it-work">
    <img src="/img-02.png" className="how-image" />
    <div className="how-content">
      <h2 className="how-h2">How Does It Work?</h2>
      <h4 className="how-h4">It's super easy!</h4>
      <p>We'll send you a daily email reminding you to submit an idea.</p>
      <p>Just hit reply, and you'll never forget an idea ever again!</p>
      <div className="how-btn">
        Sign Up
      </div>
    </div>
    <style jsx>{`
      .how-does-it-work {
        margin: 50px auto;
        /* height: 60vh; */
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
      }

      .how-image {
        width: 100%;
        max-width: 30vw;
      }

      .how-h2 {
        color: rgb(34, 15, 47);
      }

      .how-h4 {
        font-weight: 700;
        color: rgb(79, 79, 79);
        margin-bottom: 3em; 
      }

      .how-content p {
        color: rgb(146, 146, 146);
      }

      .how-btn {
        border: 1px gray solid;
        border-radius: 30px;
        cursor: pointer;
        text-align: center;
        width: 10em;
        height: 2em;
        margin-top: 4em;
        padding-top: 10px;
      }

      @media (max-width: 1000px){
        .how-image {
          margin: 0 auto;
        }

        .how-content {
          text-align: center;
        }

        .how-btn {
          margin: 4em auto 0em auto;
        }
      }
    `}</style>
  </div>
)

export default HowDoesItWork;