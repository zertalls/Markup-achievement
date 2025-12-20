import clsx from "clsx";
import { FlexWrapper } from "../../../../../../common/components/Wrapper/FlexWrapper/FlexWrapper";
import styles from './Rates.module.css'
import crossMark from '../../../../../../app/assets/icons/crossMark.svg'
import checkMark from '../../../../../../app/assets/icons/checkMark.svg'
import { ImageCustom } from "../../../../../../common/components/Image/ImageCustom";
import { Button } from "../../../../../../common/components/Button/Button";

export const Rates = () => {
    return (
        <div className={clsx('container', styles.container)}>
            <FlexWrapper direction="column" justify="center" align="center">
                <h2 className={styles.h2}>Rates</h2>
                <p className={clsx('secondaryFont', styles.p)}>Failure will never overtake me if my determination to succeed is strong enough.</p>  
                <table>
                <thead>
                    <tr>
                        <th className={clsx('secondaryFont', styles.thSecondary)}>Features</th>
                        <th className={clsx('primaryFont', styles.thMain)}>Standart</th>
                        <th className={clsx('primaryFont', styles.thMain)}>Plus</th>
                        <th className={clsx('primaryFont', styles.thMain)}>PRO</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className={clsx('secondaryFont', styles.td)}>Theory</td>
                        <td><ImageCustom src={checkMark} alt="checkMark" widthPx="20" heightPx="20"/></td>
                        <td><ImageCustom src={checkMark} alt="checkMark" widthPx="20" heightPx="20"/></td>
                        <td><ImageCustom src={checkMark} alt="checkMark" widthPx="20" heightPx="20"/></td>
                    </tr>
                    <tr>
                        <td className={clsx('secondaryFont', styles.td)}>Practice</td>
                        <td><ImageCustom src={crossMark} alt="crossMark" widthPx="20" heightPx="20"/></td>
                        <td><ImageCustom src={checkMark} alt="checkMark" widthPx="20" heightPx="20"/></td>
                        <td><ImageCustom src={checkMark} alt="checkMark" widthPx="20" heightPx="20"/></td>
                    </tr>
                    <tr>
                        <td className={clsx('secondaryFont', styles.td)}>Code review</td>
                        <td><ImageCustom src={crossMark} alt="crossMark" widthPx="20" heightPx="20"/></td>
                        <td><ImageCustom src={crossMark} alt="crossMark" widthPx="20" heightPx="20"/></td>
                        <td><ImageCustom src={checkMark} alt="checkMark" widthPx="20" heightPx="20"/></td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <td className={clsx('secondaryFont', styles.tdFooter)}>Have questions?</td>
                        <td><Button title="get now" isActive={false} classname={styles.button}/></td>
                        <td><Button title="get now" isActive={true} classname={styles.button}/></td>
                        <td><Button title="get now" isActive={false} classname={styles.button}/></td>
                    </tr>
                </tfoot>
            </table>   
            </FlexWrapper>    
        </div>
    );
};


