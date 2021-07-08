import React from 'react';
import { MdDesktopMac, MdCode, MdPhonelinkSetup } from 'react-icons/md';
import styled from 'styled-components';
import SectionTitle from './SectionTitle';
import ServicesSectionItem from './ServicesSectionItem';

const ServicesItemsStyles = styled.div`
  padding: 10rem 0;
  .services__allItems {
    display: flex;
    gap: 10rem;
    justify-content: space-between;
    margin-top: 5rem;
  }
  @media only screen and (max-width: 768px) {
    .services__allItems {
      flex-direction: column;
      max-width: 350px;
      margin: 0 auto;
      margin-top: 5rem;
      gap: 5rem;
    }
  }
`;

export default function ServicesSection() {
  return (
    <ServicesItemsStyles>
      <div className="container">
        <SectionTitle subheading="What i will do for you" heading="Services" />
        <div className="services__allItems">
          <ServicesSectionItem
            icon={<MdDesktopMac />}
            title="User-support"
            desc="having worked as an attachee in kijabe and an intern in Commision on revenue allocation(CRA)i can provide user support."
          />
          <ServicesSectionItem
            icon={<MdCode />}
            title="web dev"
            desc="I also develop the websites and computer applications.I'm good at java,CSS,javascript and possess the know how in python and react"
          />
          <ServicesSectionItem
            icon={<MdPhonelinkSetup />}
            title="Networking"
            desc="I have studied CCNA 1 and theoretics to networking through my course. "
          />
        </div>
      </div>
    </ServicesItemsStyles>
  );
}
