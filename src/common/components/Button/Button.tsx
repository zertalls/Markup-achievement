import clsx from 'clsx';
import styles from './Button.module.css'

type Props = {
    title: string
    isActive?: boolean
    classname?: string
};
export const Button = ({title, classname, isActive=true}: Props) => {
    const mainStyles = isActive ? styles.active : styles.notActive 

    return (
        <button className={clsx(mainStyles, classname)}>{title}</button>
    );
};