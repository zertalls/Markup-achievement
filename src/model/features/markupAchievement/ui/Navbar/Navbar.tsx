import logo from "../../../../../app/assets/images/logo.svg"
import { ImageCustom } from "../../../../../common/components/Image/ImageCustom"
import { FlexWrapper } from "../../../../../common/components/Wrapper/FlexWrapper/FlexWrapper"
import styles from './Navbar.module.css'

export const Navbar = () => {
  return (
    <div className="container">
      <nav>
        <FlexWrapper justify="space-between" align="center">
          <ImageCustom src={logo} alt="logo" widthPx="208" heightPx="48" />
          <ul className={styles.ul}>
            <li>Main</li>
            <li>Rates</li>
            <li>create account</li>
          </ul>
        </FlexWrapper>
      </nav>
    </div>
  )
}
