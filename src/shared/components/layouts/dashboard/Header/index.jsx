import React, { PureComponent } from "react"
import styles from "./Header.scss"
import { Headers } from "node-fetch"
import propTypes from "@propTypes"

class Header extends PureComponent {
  render() {
    const { appName } = this.props
    return (
      <header className={styles.header}>
        <div className={styles.wrapper}>
          <div className={styles.logo}>
            <h1>{appName}</h1>
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

Headers.propTypes = {
  appName: propTypes.appName
}

export default Header
