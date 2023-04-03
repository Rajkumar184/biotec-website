import React from 'react'
import Typewriter from "typewriter-effect";
import "../App.css"
import banner from "../assets/images/banner_png.png"

const BannerSection = () => {
          return (
                    <>
                              <section className="clientSection">
                                        <div className="container-lg">
                                                  <div className="row justify-content-center">
                                                            <div className="col-12 col-lg-6 ">
                                                                      <div className="dv-header-promo-grey">

                                                                                <div className="inner">
                                                                                          <h1 className="title theme-gradient">
                                                                                                    <Typewriter
                                                                                                              onInit={(typewriter) => {
                                                                                                                        typewriter
                                                                                                                                  .typeString("Biotech medicines <br/> have revolutionized <br/> the treatment of many diseases.")
                                                                                                                                  .callFunction(() => {
                                                                                                                                            console.log("String typed out!");
                                                                                                                                  })
                                                                                                                                  .pauseFor(2500)
                                                                                                                                  .start();
                                                                                                              }}
                                                                                                    />
                                                                                          </h1>
                                                                                </div>


                                                                      </div>

                                                            </div>
                                                            <div className="col-12 col-lg-6">
                                                                      <div class="dv-header-promo-grey__sticky-container">
                                                                                <div class="dv-header-promo-grey__sticky-image">

                                                                                          <img src={banner} alt='banner' height={480} width={500}></img>
                                                                                </div>
                                                                      </div>
                                                            </div>
                                                  </div>
                                        </div>
                              </section>
                    </>
          )
}

export default BannerSection