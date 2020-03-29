// Dependencies
import React, { useContext } from "react"
import propTypes from "@propTypes"

// Contexts
import { UserContext } from "@contexts/user"

// Components
import Title from "@ui/Title"
import Login from "./Login"

// Styles
import styles from "./Layout.scss"

const Layout = ({ currentUrl }) => {
  const { login } = useContext(UserContext)

  return (
    <>
      <Title content="Login" />

      <Login login={login} currentUrl={currentUrl} />
    </>
  )
}

Layout.prototype = {
  currentUrl: propTypes.currentUrl
}

export default Layout
