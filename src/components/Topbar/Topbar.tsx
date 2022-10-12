import React from 'react'
import "./topbar.scss"
import {FiSearch} from 'react-icons/fi'

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="search__bar">
        <div className="search__icon">
          <FiSearch />
        </div>
        <input type="text" placeholder="Search" />
      </div>
    </div>
  )
}

export default Topbar