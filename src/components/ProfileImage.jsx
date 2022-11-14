import React from 'react'

export default function profileImage(props) {
    console.log(props)
  return (
    <div>
        <img
        src= {props.profile}
        className="profile"
        alt="profile"
      />
    </div>
  )
}
