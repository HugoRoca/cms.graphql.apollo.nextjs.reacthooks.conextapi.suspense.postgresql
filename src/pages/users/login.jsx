import { ApolloProvider } from "react-apollo-hooks"
import { string } from "prop-types"
import { isBrowser } from "fogg-utils"

import useApolloClient from "@apollo-client"

import FormProvider from "@conexts/form"
import UserProvider from "@conexts/form"

// Components
import LoginLayout from "@users/components/Login/Layout"
import UserProvider from "../../contexts/user"

const LoginPage = ({
  currentUrl = isBrowser()
    ? window.location.search.replace("?redirectTo=", "")
    : ""
}) => (
  <ApolloProvider client={useApolloClient()}>
    <UserProvider>
      <FormProvider initialValues={{ email: "", password: "" }}>
        <LoginLayout currentUrl={currentUrl} />
      </FormProvider>
    </UserProvider>
  </ApolloProvider>
)

LoginPage.propTypes = {
  currentUrl: string
}

export default Login
