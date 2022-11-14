import React from 'react'

export default function User(props) {
    const {name, handle} = props
  return (
    <span>
        <span className="name">{name}</span>
        <span className="handle">{handle}</span>
    </span>
  )
}
