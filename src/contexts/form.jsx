import React, { useState, createContext } from 'react'
import { element, object } from 'prop-types'

export const FormContext = createContext({
  handleInputChange: () => undefined,
  setValue: () => undefined,
  clearValues: () => undefined,
  clearValue: () => undefined,
  values: {}
})

const FromProvider = ({ children, initialValues = {} }) => {
  const [state, setState] = useState(initialValues)

  function setValue(name, value) {
    if (state[name] !== value) {
      setState(state => ({
        ...state,
        [name]: value
      }))
    }
  }

  function clearValues(fields) {
    const newState = Object.assign({}, state)

    fields.forEach(field => {
      newState[field] = ''
    })

    setState(newState)
  }

  function clearValue(field) {
    if (field) {
      setValue(field, '')
    }
  }

  function handleInputChange({ target: { name, value } }) {
    setState(state => ({
      ...state,
      [name]: value
    }))
  }

  const context = {
    handleInputChange,
    setValue,
    clearValues,
    clearValue,
    values: state
  }

  return (
    <FormContext.Provider value={context}>{children}</FormContext.Provider>
  )
}

FromProvider.propTypes = {
  children: element.isRequired,
  initialValues: object
}

export default FromProvider
