import Head from 'next/head';
import React, { Fragment } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AccordionImage from '../public/images/accordion_gallery/Russian_accordion.jpg';
import classes from '../styles/SampleAccordionWithArrows.module.css';
import Accordion from '../components/accordion/Accordion';
import AboutSection from '../components/aboutSection/AboutSection';

const SampleAccordionWithArrows = () => {

    const aboutSections = [
        {
            label: "sample 1 label",
            content:
              <Fragment>
                <Image src={AccordionImage} layout="responsive" alt="Accordion, 1870 - 80, Russia, Metropolitan Museum of Art collection"/>
                <p>Accordion, 1870 - 80, Russia, Metropolitan Museum of Art collection</p>
              </Fragment>,
            },
        {
            label: "sample 2 label",
            content:
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Gravida neque convallis a cras. Diam quis enim lobortis scelerisque fermentum dui faucibus in ornare. Ut placerat orci nulla pellentesque dignissim enim sit amet. Quis blandit turpis cursus in hac. Commodo ullamcorper a lacus vestibulum sed arcu non odio euismod. Elementum facilisis leo vel fringilla est ullamcorper eget nulla facilisi. Vitae justo eget magna fermentum. Elementum facilisis leo vel fringilla est ullamcorper eget nulla facilisi. Eget arcu dictum varius duis at consectetur lorem donec. Molestie ac feugiat sed lectus vestibulum mattis. Mattis rhoncus urna neque viverra justo nec ultrices. Tempor orci eu lobortis elementum nibh. Dui vivamus arcu felis bibendum ut tristique et egestas quis. Ipsum dolor sit amet consectetur adipiscing elit duis tristique sollicitudin. Amet mauris commodo quis imperdiet massa tincidunt nunc. Mi quis hendrerit dolor magna eget. Et tortor at risus viverra adipiscing at in.
                <br /><br />Rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt. Eros in cursus turpis massa tincidunt dui ut ornare. Diam vulputate ut pharetra sit amet aliquam id diam maecenas. Risus pretium quam vulputate dignissim. Non consectetur a erat nam at lectus urna duis. Orci dapibus ultrices in iaculis nunc sed augue. Et magnis dis parturient montes nascetur ridiculus mus mauris vitae. Nulla at volutpat diam ut venenatis tellus in metus. Ornare lectus sit amet est placerat in egestas erat. Vel facilisis volutpat est velit egestas. Dui accumsan sit amet nulla facilisi. Morbi tristique senectus et netus. Pellentesque sit amet porttitor eget dolor morbi non arcu risus. Proin sagittis nisl rhoncus mattis rhoncus urna. Nibh tellus molestie nunc non blandit. Enim diam vulputate ut pharetra. Id aliquet risus feugiat in. Ac tincidunt vitae semper quis lectus. Euismod elementum nisi quis eleifend. Cras semper auctor neque vitae.
              </p>,
        },
        {
            label: "sample 3 label",
            content: 
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In aliquam sem fringilla ut morbi. Enim diam vulputate ut pharetra sit amet aliquam. Non diam phasellus vestibulum lorem sed risus ultricies tristique. 
              </p>,
        },
        {
            label: "sample 4 label",
            content: 
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quam elementum pulvinar etiam non quam lacus suspendisse faucibus. Fames ac turpis egestas maecenas pharetra convallis posuere. Augue mauris augue neque gravida in. Vel pretium lectus quam id. Turpis cursus in hac habitasse platea. Duis convallis convallis tellus id interdum velit laoreet id. Eu feugiat pretium nibh ipsum consequat nisl vel pretium lectus. Libero enim sed faucibus turpis in eu mi bibendum. Nisl nisi scelerisque eu ultrices. Blandit massa enim nec dui nunc mattis enim ut. Sit amet luctus venenatis lectus.
              </p>,
        },
        {
            label: "sample 5 label",
            content:
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu non sodales neque sodales ut. Amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien. Vel pharetra vel turpis nunc eget lorem dolor sed. Mi eget mauris pharetra et ultrices neque ornare aenean euismod. Tortor pretium viverra suspendisse potenti nullam ac. Scelerisque in dictum non consectetur a erat nam. At varius vel pharetra vel turpis nunc eget lorem. Ornare arcu odio ut sem nulla pharetra. 
              </p>,
        },
        {
            label: "sample 6 label",
            content: 
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam etiam erat velit scelerisque in dictum non consectetur a. At consectetur lorem donec massa sapien. Mi ipsum faucibus vitae aliquet nec ullamcorper sit amet. Arcu non odio euismod lacinia at quis risus. Enim neque volutpat ac tincidunt vitae semper quis lectus. Libero justo laoreet sit amet cursus. Risus nullam eget felis eget nunc lobortis. Tempus egestas sed sed risus. Mattis ullamcorper velit sed ullamcorper morbi tincidunt. Nulla posuere sollicitudin aliquam ultrices sagittis orci a. Tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada. Est velit egestas dui id ornare arcu. Dolor magna eget est lorem ipsum.
              </p>,
        },
    ];

    return (
      <Fragment>
          <Head>
              <title>accordion with arrows</title>
              <meta name="description" content="a responsive accordion with variable heights for panels" />
              <meta property="og:image" content="images/accordion_gallery/Russian_accordion.jpg" />
          </Head>
          <div className="page" role="main">
            <AboutSection />
            <div className={classes.about}>
              <div className={classes.about_sections} >
                <Accordion aboutSections={aboutSections} />
              </div>
            </div>
            <h2 className={classes.credits} >
              designed and developed by <Link href="https://www.stephendewyerwebwork.com" passHref={true} target="_blank" aria-label="link to portfolio website of stephen garrett dewyer">stephen garrett dewyer</Link>
            </h2>
          </div>
      </Fragment>
    )
}

export default SampleAccordionWithArrows;