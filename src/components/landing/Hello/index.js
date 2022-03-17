import React from 'react'

const Hello = ({open}) => {
  return (
    <div>
      <img
        src="./assestmeta/affiliates/hello.gif"
        alt="Hello"
        onClick={() => open(true)}
        style={{
          width: '100%',
          height: '100vh',
          objectFit: 'cover',
        }}
        />
    </div>
  )
}

export default Hello