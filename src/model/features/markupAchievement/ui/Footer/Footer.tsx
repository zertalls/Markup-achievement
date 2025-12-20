import clsx from "clsx";
import styles from './Footer.module.css'

export const Footer = () => {
    return (
        <div className={clsx('container', styles.containerBackground)}>
            <footer className={clsx('secondaryFont', styles.footer)}>
                Copyright © 2023. All rights reserved.
            </footer>
        </div>
        
    );
};