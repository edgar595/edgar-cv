import React from 'react';
import styled from 'styled-components';
import PText from '../components/PText';
import Button from '../components/Button';
import AboutImg from '../assets/images/about-page-img.png';
import AboutInfoItem from '../components/AboutInfoItem';
import ContactBanner from '../components/ContactBanner';

const AboutPageStyles = styled.div`
  padding: 20rem 0 10rem 0;

  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }
  .about__subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .right {
    img {
      border: 2px solid var(--gray-1);
    }
  }
  .about__info__items {
    margin-top: 15rem;
  }
  .about__info__item {
    margin-bottom: 10rem;
  }
  .about__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__subheading {
      font-size: 1.8rem;
    }
    .about__heading {
      font-size: 2.8rem;
    }
    .about__info__heading {
      font-size: 3rem;
    }
  }
`;

export default function About() {
  return (
    <>
      <AboutPageStyles>
        <div className="container">
          <div className="top-section">
            <div className="left">
              <p className="about__subheading">
                Hi, I am <span>Edgar mugambi</span>
              </p>
              <h2 className="about__heading">An ICT officer</h2>
              <div className="about__info">
                <PText>
                  I am from Nairobi, Kenya. A place of beauty and nature. Since
                  my childhood, i loved computers and technology. I always try
                  to learn stuff with my unique point of view. I also love to
                  keep up with the latest trends in technology.
                  <br /> <br />
                  I started showing an interest in computer science when I was
                  in high school. Coding is also an art for me. I love it and
                  now I have the opportunity to design along with the coding.I
                  enjoy assisting people keep up and share my knowledge in
                  technology
                  <br />
                  <br />
                  My vision is to use my knowlege in the field to educate others
                  and learn from others and continue advancing my field and help
                  organizations,NGO's and public sector in the IT field
                </PText>
              </div>
              <Button btnText="Download CV" btnLink="#" />
            </div>
            <div className="right">
              <img src={AboutImg} alt="me" />
            </div>
          </div>
          <div className="about__info__items">
            <div className="about__info__item">
              <h1 className="about__info__heading">Education</h1>

              <AboutInfoItem title="Primary" items={['Chogoria boarding']} />
              <AboutInfoItem title="Secondary" items={['Chuka high school']} />
              <AboutInfoItem
                title="BSC computer science"
                items={['Kabarak university']}
              />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">My Skills</h1>

              <AboutInfoItem
                title="Web dev"
                items={['HTML', 'CSS', 'JavaScript', 'JAVA']}
              />
              <AboutInfoItem title="Networking" items={['CISCO']} />
              <AboutInfoItem title="User-suport" items={['user-support']} />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">Experiences</h1>

              <AboutInfoItem title="jan-APRIL2020" items={['ICT intern CRA']} />
              <AboutInfoItem
                title="JAN- APRIL2019"
                items={['Attachee at kijabe ']}
              />
            </div>
          </div>
        </div>
        <ContactBanner />
      </AboutPageStyles>
    </>
  );
}
