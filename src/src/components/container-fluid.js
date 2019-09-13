import React from 'react'

export default ({ children }) => (
  <div className="container-fluid">
    <div className="wrapper">
      <div className="row justify-content-md-center">
        <div className="col"> {children}</div>
      </div>
    </div>
  </div>
)
