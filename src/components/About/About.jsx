import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import AboutImg from '../Image/AboutImg';
import PortfolioContext from '../../context/context';

import { Link } from 'react-scroll';

const About = () => {
  const { about } = useContext(PortfolioContext);
  const { img, paragraphOne, paragraphTwo, paragraphThree, resume } = about;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="about">
      <Container>
        <Title title="About Me" />
        <Row className="about-wrapper">
          <Col md={6} sm={12}>
            <Fade bottom duration={1000} delay={600} distance="30px">
              <div className="about-wrapper__image">
                <AboutImg alt="profile picture" filename={img} />
              </div>
            </Fade>
          </Col>
          <Col md={6} sm={12}>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <div className="about-wrapper__info">
                <p className="about-wrapper__info-text">
                  Hi, I'm Dave. I like building things. I am a Full Stack Web Developer and a graduate of Robertson College, Canada. 
                    I'm striving to learn more so I am very open for opportunities and to give back to the community as well. 
                </p>
                <p className="about-wrapper__info-text">
                 I took this path because I want to help small enterprises to promote their businesses without worrying about spending too much or with high cost.
                   
                </p>
                <p className="about-wrapper__info-text">
                 One day, I had a project to make at home but when I tried to search for the things I needed, almost everything are out of stock on major stores nearby.
                     Then I went through some classified ads search engine and luckily, there's 1 post of a store that have most of the items I need. I called them and asked, 
                     <em>'Hey, do you have a website so I can check your inventory or things that you sell?', They replied 'unfortunately not, too much money needed for that' </em>
               </p>
                <p className="about-wrapper__info-text">
                So then, the idea of, <strong>'this is a way to give back to the community'</strong>  began.
                </p>              
                <p className="about-wrapper__info-text">
                My work experiences may not be that strong and related to programming nor graphic designing, but let's make you ideas become a reality. 
                </p>
                {resume && (
                  <span className="d-flex mt-3">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn cta-btn--resume"
                      href={resume}
                    >
                      Resume
                    </a>
                  </span>
                )}
              </div>
              
            </Fade>
          </Col>
        </Row>
        <span className="back-to-top">
          <Link to="navbar" smooth duration={1000}>
            <i className="fa fa-angle-up fa-2x" aria-hidden="true" />
          </Link>
        </span>
      </Container>
      
    </section>
  );
};

export default About;
