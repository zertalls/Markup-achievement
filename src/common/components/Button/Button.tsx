import clsx from 'clsx';
import styles from './Button.module.css'

type Props = {
    title: string
    isActive?: boolean
    classname?: string
    type?: 'button' | 'reset' | 'submit'
};
export const Button = ({title, classname, isActive=true, type='button'}: Props) => {
    const mainStyles = isActive ? styles.active : styles.notActive 

    return (
        <button type={type} className={clsx(mainStyles, classname)}>{title}</button>
    );
};