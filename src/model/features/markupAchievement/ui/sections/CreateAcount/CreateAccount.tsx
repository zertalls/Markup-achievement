import clsx from "clsx";
import styles from './CreateAcount.module.css'
import { Button } from "../../../../../../common/components/Button/Button";
import { FlexWrapper } from "../../../../../../common/components/Wrapper/FlexWrapper/FlexWrapper";

export const CreateAccount = () => {
    return (
        <div className={clsx('container', styles.container)}>
            <FlexWrapper justify="space-between"> 
                <div>
                    <h2 className={clsx(styles.h2)}>Create your free account</h2>
                    <p className={clsx('secondaryFont', styles.p)}>Let us first talk about dreams. We all know that dreams do play a role in our daily lives. The majority of people pay little attention to dreams. Dreams can help us find solutions to our daily problems and see things from a different perspective. Whenever we are dreaming, we can be who or what we want to be, regardless of the fact that in real life.</p> 
                    <ul className={clsx("secondaryFont")}>
                        <li className={styles.li}>Easy setup, fast start</li>
                        <li className={styles.li}>Free forever for core features</li>
                        <li className={styles.li}>14-day trial of premium features</li>
                    </ul> 
                </div>
                <form className={clsx('secondaryFont', styles.form)}>
                    <input type="text" placeholder="Full Name*"/>
                    <FlexWrapper gap={20}>
                        <input type="email" placeholder="Email*"/>
                        <input type="password" placeholder="Password*"/>
                    </FlexWrapper>
                    <FlexWrapper gap={20}>
                        <input type="date" placeholder="Date of Birth"/>
                        <select>
                            <option>Country</option>
                            <option>Russia</option>
                            <option>Belarus</option>
                        </select>
                    </FlexWrapper>
                    <FlexWrapper gap={30}>
                        <label><input type="radio"/>Frontend</label>                   
                        <label><input type="radio"/>Backend</label>
                    </FlexWrapper>
                    <fieldset>
                        <legend>Favorite Technologies</legend>
                        <label><input type="checkbox"/>HTML</label>
                        <label><input type="checkbox"/>CSS</label>                        
                        <label><input type="checkbox"/>React</label>                        
                        <label><input type="checkbox"/>Styled components</label> 
                    </fieldset>
                    <textarea placeholder="Something else about you..."/>
                    <Button title="registration" type="submit" classname={styles.button}/>
                </form>          
            </FlexWrapper>            
        </div>
    );
};