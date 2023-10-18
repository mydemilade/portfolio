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
            position="Software Development Intern"
            company="Alx Africa"
            companyLink="https://www.alxafrica.com/"
            time="Aprl 2023 - Present"
            address="Remote."
            work="
            Proven expertise in coding clean, efficient, and well-documented solutions, alongside adept testing and complex issue resolution. Actively fostered open communication and collaboration within the team, integrating latest technologies to enhance project efficiency. Demonstrated adaptability, strong problem-solving, and effective communication skills
            "
          />

          <Details
            position="Digital Marketer"
            company="Vee Clothing Company"
            companyLink="https://www.instagram.com/veeclothingcompany/"
            time="Dec 2021 - March 2023"
            address="Lagos, Nigeria."
            work="Worked with a team of experts to conceptualize and co-ordinate online promotion strategies to implement PPC campaigns and boost traffic."
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;