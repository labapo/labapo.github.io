import React from 'react'
import Email from './Email'
import Github from './Github'
import { LinkedIn } from './LinkedIn'

function ProfileBar() {
  return (
    <div className="social">
        <Email />
        <LinkedIn />
        <Github />
    </div>
  )
}

export default ProfileBar