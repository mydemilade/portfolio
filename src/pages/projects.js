import AnimatedText from '@/components/AnimatedText';
import { GithubIcon } from '@/components/Icons';
import Layout from '@/components/Layout';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import project1 from '../../public/images/projects/crypto-screener-cover-image.jpg';
import project2 from '../../public/images/projects/nikee.jpg';
import project3 from '../../public/images/projects/flavoro.jpg';
import project4 from '../../public/images/projects/Bank.jpg';
import project5 from '../../public/images/projects/pricewise.jpg'
import project6 from '../../public/images/projects/bookhub.jpg'
import project7 from '../../public/images/projects/carshowcase.PNG'
import { motion } from 'framer-motion';
import TransitionEffect from '@/components/TransitionEffect';

const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article
      className="w-full flex items-center justify-between relative  rounded-br-2xl
        rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 dark:bg-dark dark:border-light
        lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4"
    >
      <div
        className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light
    rounded-br-3xl xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]
    "
      />
      <Link href={link} target="_blank" className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full">
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              50vw"
        />
      </Link>

      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-primary font-medium text-xl dark:text-primaryDark xs:text-base">{type}</span>
        <Link href={link} target="_blank" className="hover:underline underline-offset-2">
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light lg:text-3xl xs:text-2xl">{title}</h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">{summary}</p>
        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank" className="w-10">
            {' '}
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold
            dark:bg-light dark:text-dark
            sm:px-4 sm:text-base
            "
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ title, type, img, link, github }) => {
  return (
    <article
      className="w-full flex flex-col items-center justify-center rounded-2xl 
    border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light xs:p-4
    "
    >
      <div
        className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark
    rounded-br-3xl dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]
    "
      />
      <Link href={link} target="_blank" className="w-full cursor-pointer overflow-hidden rounded-lg">
        <FramerImage src={img} alt={title} className="w-full h-auto" whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }} />
      </Link>

      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base">{type}</span>
        <Link href={link} target="_blank" className="hover:underline underline-offset-2">
          <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl">{title}</h2>
        </Link>

        <div className="w-full flex items-center justify-between">
          <Link href={link} target="_blank" className="text-lg font-semibold underline md:text-base">
            Visit
          </Link>
          <Link href={github} target="_blank" className="w-8 md:w-6">
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

const projects = () => {
  return (
    <>
      <Head>
        <title>Modern Portfolio Built with Nextjs | Projects Page</title>
        <meta
          name="description"
          content="Discover the latest webapp projects created by Demi, a Frontend Developer using all the latest technologies"
        />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText text="PROJECTS" className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl" />

          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProject
                type="Web3"
                title="Crypto Screener Application"
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency."
                img={project1}
                link="https://checked-irjl.vercel.app/"
                github="https://github.com/mydemilade/cryptosearch"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project type="WebApp" 
              title="Nike Store Website"
              summary="An amazing ecommerce project with a great ui"
               img={project2}
               link="https://nike-store-react-mu.vercel.app/"
               github="https://github.com/mydemilade/nike-store-react" />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project type="WebApp"
               title="A Food Ordering App"
               summary="A food app that enables users to browse, select, and order food from a restaurant or food establishment. This app typically offers a range of features to enhance the user experience and streamline the process of ordering food."
               img={project3} 
              link="https://flavoo.vercel.app/" 
              github="https://github.com/mydemilade/flavo" />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                type="WebApp"
                title="PriceWise: A webscraping application"
                summary="The Web Scraping Application efficiently extracts and analyzes data from multiple websites using Axios for HTTP requests, Cheerio for HTML parsing, and Mongoose for data storage. It is built on Next.js and React, offering a smooth user interface. With React Responsive Carousel for organized data display and Nodemailer for seamless communication, the app provides a powerful and user-friendly solution for real-time data extraction and analysis.All you have to do is copy and paste a link to the product you need to scrape from amazon and you're good to go."
                img={project5}
                link="https://pricewise-jade.vercel.app/"
                github="https://github.com/mydemilade/pricewise"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project type="Web3"
               title="Bank UI"
               img={project4} 
               link="https://bank-app-ui-two.vercel.app/"
                github="https://github.com/mydemilade/Bank_App_Ui"
                />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project type="WebApp"
               title="Book Hub"
               img={project6} 
               link="https://bookhub-sepia.vercel.app/"
                github="https://github.com/mydemilade/bookhub"
                />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                type="WebApp"
                title="Car Showcase"
                summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
                img={project7} 
                link="https://carshowcasse.vercel.app/"
                 github="https://github.com/mydemilade/carshowcase"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;