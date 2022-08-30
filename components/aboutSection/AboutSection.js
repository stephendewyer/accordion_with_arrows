import { Fragment } from 'react';
import styles from './AboutSection.module.css';
import ExternalLinkButton from '../buttons/external_link_button/ButtonExternalLink';
import ExternalLinkIcon from '../../public/images/icons/external_link_icon.svg';
import Link from 'next/link';
import Image from 'next/image';

const AboutSection = () => {
    return (
        <Fragment>
            <h1 className={styles.heading_01}>
                accordion with arrows
            </h1>
            <div className={styles.about_section}>
                <div className={styles.features}>
                    <h2 className={styles.heading_02} >
                        features:
                    </h2>
                    <ul>
                        <li>
                            dynamic
                        </li>
                        <li>
                            responsive
                        </li>
                        <li>
                            variable height
                        </li>
                        <li>
                            accessible following WCAG 2.1 standards
                        </li>
                        <li>
                            animated
                        </li>
                    </ul>  
                </div>
                <div className={styles.link_to_code}>
                    <h2 className={styles.heading_02} >
                        code:
                    </h2>
                    <Link href="https://github.com/stephendewyer/accordion_with_arrows" passHref={true} aria-label="link to accordion with arrows on GitHub">
                        <a target="_blank" rel="noopener noreferrer">
                            <ExternalLinkButton>
                                <div>
                                    GitHub
                                </div> 
                                <div className={styles.external_link_icon} >
                                    <Image src={ExternalLinkIcon} layout="responsive" alt="external link icon"/>
                                </div>
                            </ExternalLinkButton>
                        </a>
                    </Link>
                </div>
            </div>
        </Fragment>
    )
}

export default AboutSection;