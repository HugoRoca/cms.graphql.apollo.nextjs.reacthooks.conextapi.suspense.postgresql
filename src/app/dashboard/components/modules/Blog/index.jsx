import React from "react"
import propTypes from "@propTypes"
import Title from "@ui/Title"
import { DarkButton } from 'fogg-ui'
import FormProvider from '@contexts/form'
import schema from '@schemas/blog'
import Create from '@actions/Create'

const Blog = ({ action, user }) => {
  if (action === 'create') {
    return (
      <FormProvider initialValues={{ userId: user.id }}>
        <Create module="Post" schema={schema} />
      </FormProvider>
    )
  }

  return (
    <>
      <Title content="Blog - Dashboard" />
      <h1>Blog Module</h1>
      <DarkButton href="/dashboard/blog/create">Create Post</DarkButton>
    </>
  )
}

Blog.prototype = {
  action: propTypes.action,
  user: propTypes.user
}

export default Blog
