import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav className="bg-white shadow-md px-6 py-4 flex items-center justify-between mb-4">
        <div className="text-2xl ml-10 font-bold text-blue-950">Asset Hub</div>

        <div className="flex-1 font-semibold text-right mr-6 text-black"> A Place to keep track of all your assets</div>

        <div className="space-x-4 flex items-center"> {/* Add buttons or icons here if needed */} </div>
      </nav>


    </div>
  )
}

export default Navbar
