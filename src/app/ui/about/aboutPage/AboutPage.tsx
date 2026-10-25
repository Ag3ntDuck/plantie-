"use client"

import AboutPageCards from "../aboutPageCards/AboutPageCards";
import AboutPageContent from "../aboutPageContent/AboutPageContent";
import styles from "./AboutPage.module.css"


function AboutPage() {
    return (
        <div className={styles.aboutPageWrapper}>
            <AboutPageContent/>
            <AboutPageCards/>
        </div>
    )
}

export default AboutPage