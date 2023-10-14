import React, { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import LiIcon from './LiIcon';

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[80%] mx-auto flex flex-col items-center justify-between md:w-[80%]">
      <LiIcon reference={ref} />
      <motion.div initial={{ y: 50 }} whileInView={{ y: 0 }} transition={{ duration: 0.5, type: 'spring' }}>
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}
          <a href={companyLink} target="_blank" className="text-primary dark:text-primaryDark capitalize">
            <br />@{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center start'],
  });
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">Experience</h2>

      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top 
  md:w-[2px] md:left-[30px] xs:left-[20px] dark:bg-primaryDark dark:shadow-3xl
  "
        />

        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            position="Lead Full-Stack Software Engineer"
            company="Ethereum Community Fund"
            companyLink="https://ecf.network"
            time="Sep 2022 - Present"
            address="Lisbon, Portugal"
            work="Worked on a team responsible 
 for the delivery of a web app that provides a set of tools and features which enable its community of users to coordinate ideas, influence, and funds, that is peer-to-peer, open, and includes its own incentive system of user actions to ensure accountability, quality engagement and verifiable information over time."
          />

          <Details
            position="Senior Frontend Engineer| DApp Developer"
            company="Dotlaunch Inc"
            companyLink="https://dotlaunch.io"
            time="Oct 2020 - Aug 2022"
            address="Dubai, UAE."
            work="
            Led a team of 4 developers responsible for developing a fully decentralized cross chained launchpad whose interoperability is based on a multi-blockchain architecture and the most efficient distribution algorithms."
          />

          <Details
            position="Frontend Web and DApp Developer"
            company="Artburst"
            companyLink="https://opensea.io/"
            time="Jun 2019 - Sep 2020"
            address="Dubai, UAE."
            work="Worked on a team responsible for developing the front end of the NFT marketplace platform enabling artists and creators to collaborate and connect in a chain agnostic environment."
          />

          <Details
            position="Frontend Developer | Web Designer | SEO Specialist"
            company="Ultramind"
            companyLink="https://modafiinil.com.ng"
            time="Jun 2018 - May 2019"
            address="Lagos, Nigeria."
            work="Worked with a team of tech experts to conceptualize and coordinate the development of an e-commerce pharmaceutical brand."
          />

          <Details
            position="Wordpress Developer | Marketing Lead | Social Media"
            company="thelegitstore"
            companyLink="https://intsagram.com/thelegitstore.ng"
            time="Dec 2016 - Nov 2017"
            address="Lagos, Nigeria."
            work="Worked with a team of experts to conceptualize and co-ordinate online promotion strategies to implement PPC campaigns and boost traffic by 500%."
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;