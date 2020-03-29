import React from "react"
import propTypes from "@propTypes"
import Title from "@ui/Title"

const Blog = ({ action, user }) => {
  console.log(action, user)

  return (
    <>
      <Title content="Blog - Dashboard" />
      <h1>Blog Module</h1>
    </>
  )
}

Blog.prototype = {
  action: propTypes.action,
  user: propTypes.user
}

export default Blog
