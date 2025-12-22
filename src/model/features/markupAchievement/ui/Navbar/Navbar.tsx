import clsx from "clsx"
import logo from "../../../../../app/assets/images/logo.svg"
import burger from '../../../../../app/assets/icons/burger.svg'
import { ImageCustom } from "../../../../../common/components/Image/ImageCustom"
import { FlexWrapper } from "../../../../../common/components/Wrapper/FlexWrapper/FlexWrapper"
import styles from './Navbar.module.css'

export const Navbar = () => {
  return (
    <div className={clsx("container", styles.containerStyles)}>
      <nav className={styles.nav}>
        <FlexWrapper className={styles.flexWrapperCustomStyles}>
          <ImageCustom src={logo} alt="logo" widthPx="208" heightPx="48" />
          <ul className={clsx(styles.ul, 'primaryFont')}>
            <li>Main</li>
            <li>Rates</li>
            <li>create account</li>
          </ul>
          <ImageCustom src={burger} alt="burger-menu" widthPx="46" heightPx="36"  className={styles.burger}/>
        </FlexWrapper>
      </nav>
    </div>
  )
}
