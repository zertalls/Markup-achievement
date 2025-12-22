import clsx from 'clsx';
import styles from './FlexWrapper.module.css'

type Props = {   
    children: React.ReactNode   
    className?: string
};

export const FlexWrapper = ({children, className}: Props) => {
    return (
        <div className={clsx(styles.default, className)}>
            {children}            
        </div>
    );
};