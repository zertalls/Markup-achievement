import clsx from 'clsx';
import mainImage from '../../../../../../app/assets/images/mainImage.svg'
import { Button } from '../../../../../../common/components/Button/Button';
import { ImageCustom } from '../../../../../../common/components/Image/ImageCustom';
import styles from './MainSection.module.css'
import { FlexWrapper } from '../../../../../../common/components/Wrapper/FlexWrapper/FlexWrapper';

export const MainSection = () => {
    return (
        <div className={clsx('container', styles.container)}> 
            <FlexWrapper className={styles.flexWrapperCustomStyles}>
                <div>
                    <h1>Markup achievement</h1>                        
                    <p className={clsx('secondaryFont', styles.p)}>The harder you work for something, the greater you’ll feel when you achieve it.</p>
                    <Button title='Learn More'/>
                </div>                 
                <ImageCustom src={mainImage} alt='main image' widthPx='656' heightPx='650'className={styles.img}/> 
            </FlexWrapper> 
        </div>
    );
};