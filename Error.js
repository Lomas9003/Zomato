import React from 'react'
import { useRouteError } from 'react-router'

const Error = () => {
    const use = useRouteError()
    // console.log(use);
    
  return (

    <div>
        <p>Page not found</p>
        {use.status}</div>
  )
}

export default Error