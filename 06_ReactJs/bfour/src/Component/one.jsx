import React, {useContext, createContext} from 'react'
import Two from './Two'

// const MyContext = createContext()

// use context
// useContext -> consumer
// provider -> value


function One() {
  return (
    <div><Two name = "hari" /></div>
  )
}

export default One