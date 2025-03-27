import React from 'react'
import { Link } from 'react-router'

const VolverABMButton = () => {
  return (
    <Link to="/abm">
      <button className="w-[60px] h-[40px] bg-gray-400 rounded-2xl cursor-pointer">
        <span class="material-symbols-outlined pt-2">arrow_back</span>
      </button>
    </Link>
  )
}

export default VolverABMButton
