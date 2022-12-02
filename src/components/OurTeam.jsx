import React from 'react'
import Bimo from "./../assets/team/Bimo.png"
import Arya from "./../assets/team/Arya.png"
import Ilham from "./../assets/team/Ilham.jpeg"
import Zaki from "./../assets/team/Zaki.png"
import Umar from "./../assets/team/Umar.png"
import Dina from "./../assets/team/Dina.png"
import "./../assets/style.css";

const OurTeam = () => {
  return (
    <section className="py-5">
      <div className="container px-4">
        <h1 className="text-center text-md-start mb-4">Our Team</h1>

        <div className="containerTeams">
          <div className="CardContainerTeam">
            <div className="">
              <img
                src={Ilham}
                alt=""
                className="imageTeam"
              />
            </div>
            <div className="cardText">
              <h5 className="cardTextNama">Ilham</h5>
              <p className="cardTextJob">Frontend Developer</p>
            </div>
          </div>
          <div className="CardContainerTeam">
            <div className="">
              <img
                src={Arya}
                alt=""
                className="imageTeam"
              />
            </div>
            <div className="cardText">
              <h5 className="cardTextNama">Arya</h5>
              <p className="cardTextJob">Frontend Developer</p>
            </div>
          </div>
          <div className="CardContainerTeam">
            <div className="">
              <img
                src={Bimo}
                alt=""
                className="imageTeam"
              />
            </div>
            <div className="cardText">
              <h5 className="cardTextNama">Bimo</h5>
              <p className="cardTextJob">Frontend Developer</p>
            </div>
          </div>
          <div className="CardContainerTeam">
            <div className="">
              <img
                src={Zaki}
                alt=""
                className="imageTeam"
              />
            </div>
            <div className="cardText">
              <h5 className="cardTextNama">Zaki</h5>
              <p className="cardTextJob">Backend Developer</p>
            </div>
          </div>
          <div className="CardContainerTeam">
            <div className="">
              <img
                src={Umar}
                alt=""
                className="imageTeam"
              />
            </div>
            <div className="cardText">
              <h5 className="cardTextNama">Umar</h5>
              <p className="cardTextJob">Backend Developer</p>
            </div>
          </div>
          <div className="CardContainerTeam">
            <div className="">
              <img
                src={Dina}
                alt=""
                className="imageTeam"
              />
            </div>
            <div className="cardText">
              <h5 className="cardTextNama">Dina</h5>
              <p className="cardTextJob">Backend Developer</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurTeam