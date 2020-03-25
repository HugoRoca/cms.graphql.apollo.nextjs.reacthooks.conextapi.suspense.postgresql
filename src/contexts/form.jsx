import React, { useState, createContext } from 'react'
import { element, object } from 'prop-types'

export const FormContext = createContext({
  handleInputChange: () => undefined,
  values: {}
})

const FromProvider = ({ children, initialValues = {} }) => {
  const [state, setState] = useState(initialValues)

  function handleInputChange({ target: { name, value } }) {
    setState(state => ({
      ...state,
      [name]: value
    }))
  }

  const context = {
    handleInputChange,
    values: state
  }

  return (
    <FormContext.Provider value={context}>${children}</FormContext.Provider>
  )
}

FromProvider.propTypes = {
  children: element.isRequired,
  initialValues: object
}

export default FromProvider
