import React, { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import LiIcon from './LiIcon';

const Details = ({ type, time, place, info }) => {
  const ref = useRef(null);
  return (
    <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]">
      <LiIcon reference={ref} />
      <motion.div initial={{ y: 50 }} whileInView={{ y: 0 }} transition={{ duration: 0.5, type: 'spring' }}>
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">{type}</h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {place}
        </span>
        <p className="font-medium w-full md:text-sm">{info}</p>
      </motion.div>
    </li>
  );
};

const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center start'],
  });
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">Education</h2>

      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light
          md:w-[2px] md:left-[30px] xs:left-[20px] dark:bg-primaryDark dark:shadow-3xl"
        />

        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          {/* <Details type="Senior React Engineer" time="2022-2023" place="Triblebyte" info="Triplebyte Advanced React Engineering Certification" />
          <Details type="Advanced Solidity Developer" time="2022-2023" place="Udemy" info="Mastering Solidity and Smart Contracts - Blockchain Development: Programming & Ethereum Stack" /> */}
          <Details type="Full-Stack Web Developer" time="2021-2022" place="London App Brewery" info="The Complete Web Developer Bootcamp" />

          <Details type="Full-Stack Web Developer" time="2020-2021" place="Zero-To-Mastery Academy" info="The Complete Web Developer: Zero to Mastery Bootcamp." />

          <Details type="React Developer" time="2019-2020" place="Mosh Academy" info="Code with Mosh: Mastering React." />
        </ul>
      </div>
    </div>
  );
};

export default Education;