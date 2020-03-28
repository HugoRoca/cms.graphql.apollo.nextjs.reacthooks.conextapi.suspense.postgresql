import React, { PureComponent } from "react"
import styles from "./Header.scss"

class Header extends PureComponent {
  render() {
    return (
      <header className={styles.header}>
        <div className={styles.wrapper}>
          <div className={styles.logo}>
            <h1>Codejobs</h1>
          </div>

          <div className={styles.userProfile}>
            <div className={styles.avatar}>
              <img src="/images/avatar.jpg" alt="Hugo" />
            </div>

            <div className={styles.name}>Hugo Roca</div>
          </div>
        </div>
      </header>
    )
  }
}

export default Header
