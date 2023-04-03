import React from 'react'
import "../App.css"
import dna from "../assets/images/dna.png"

const AboutUs = () => {
          return (
                    <>
                              <section className="clientSection-banner">
                                        <div className="container-lg">
                                                  <div className="row justify-content-center align-items-center">
                                                            <div className="col-12 col-lg-12">
                                                                      <div className="elementor-widget-container text-center">
                                                                                <div className="text-center">
                                                                                          <h2 className="elementor-heading elementor-size-default">
                                                                                                    Our Purpose in Business
                                                                                          </h2>
                                                                                          <p className='elementor-heading-title'>We are on a mission to make businesses around the world more human using people-centric technology</p>
                                                                                </div>
                                                                                <div className="col-12 text-center carrer-head-img">
                                                                                          <img className="img-150 lazyloaded" src={dna} alt="dna" data-ll-status="loaded" />
                                                                                </div>
                                                                                <div>

                                                                                </div>
                                                                                <div className='text-start'>
                                                                                          <p className='sub-heading'><span>In a digital world, technology has become inseparable from our lives. The exponential advancements in the last few years have been overwhelming. As more businesses take the digital route to serve their customers, they use technology as simply a tool and not an extension of their business. The complexity of technology has cast a shadow over human purpose, giving birth to shallow business relationships.</span></p>
                                                                                          <p className='sub-heading'><span>In a digital world, technology has become inseparable from our lives. The exponential advancements in the last few years have been overwhelming. As more businesses take the digital route to serve their customers, they use technology as simply a tool and not an extension of their business. The complexity of technology has cast a shadow over human purpose, giving birth to shallow business relationships.</span></p>
                                                                                </div>

                                                                      </div>
                                                            </div>
                                                  </div>
                                        </div>
                              </section>
                    </>
          )
}

export default AboutUs