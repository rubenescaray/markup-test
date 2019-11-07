import React from 'react'
import Button from './button'
import CustomButton from './button'

const Cards = () => (
  <div className="cards-content">
    <p>Browse Other Peoples's Ideas</p>
    <div className="cards">
      <div className="card first-card">
        <p>
          Lorem Ipsum is simply dummy text of the
          printing and typesetting industry. 
          Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unkown 
          printer took a gallery of type and scrambled.
        </p>
        <hr />
        <div className="card-footer">
          <img src="/user-01.png" className="card-picture" />
          <div className="card-user">
            <p>Boniface Esanji</p>
            <p>1h </p>
          </div>
        </div>
      </div>
      <div className="card">
        <p>
          Lorem Ipsum is simply dummy text of the
          printing and typesetting industry. 
          Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unkown 
          printer took a gallery of type and scrambled.
        </p>
        <hr />
        <div className="card-footer">
          <img src="/user-02.png" className="card-picture" />
          <div className="card-user">
            <p>Amelia Cabal</p>
            <p>1h </p>
          </div>
        </div>
      </div>
      <div className="card">
        <p>
          Lorem Ipsum is simply dummy text of the
          printing and typesetting industry. 
          Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unkown 
          printer took a gallery of type and scrambled.
        </p>
        <hr />
        <div className="card-footer">
          <img src="/user-03.png" className="card-picture" />
          <div className="card-user">
            <p>Anne-Marije Markink</p>
            <p>1h </p>
          </div>
        </div>
      </div>
    </div>
    <div className="card-button">
      <CustomButton text="See More" />
    </div>
    <style jsx>{`
      .cards-content {
        margin: 0 auto;
        text-align: center;
        /* height: 60vh; */
        width: 70vw;
      }

      .cards-content p {
        font-weight: 500;
      }

      .cards {
        align-item: flex-start;
        margin-top: 2em;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
      }

      .card {
        flex: 0 0 22vw;
        border: 1.5px gray solid;
        text-align: left;
        border-radius: 5px;
      }

      .first-card {
        border: 1.5px rgb(100, 97, 117) solid;
      }

      .card > p {
        padding: 1% 1.5% 0% 5%;
      }

      hr {
        width: 70%;
        margin: 0px 0px 0px 5%;
      }

      .card-footer {
        display: flex;
        padding: 5% 0% 5% 1%;
      }

      .card-picture {
        max-height: 50px;
      }

      .card-user > p {
        font-size: 0.7rem;
        margin: 5px;
      }

      .card-button {
        margin: 30px auto;
        width: 200px;
      }

      @media (max-width: 1000px){
        .cards-content {
          margin: 0 auto;
        }

        .card {
          flex: 0 0 60vw;
          margin-bottom: 2em;
        }

        .card-button {
          width: 100%;
        }
      }
    `}</style>
  </div>
)

export default Cards;