import React from "react"
import propTypes from "@propTypes"
import Title from "@ui/Title"

const Home = ({ action, user }) => {
  console.log(action, user)

  return (
    <>
      <Title content="Home - Dashboard" />
      <h1>Home Module</h1>
    </>
  )
}

Home.prototype = {
  action: propTypes.action,
  user: propTypes.user
}

export default Home
