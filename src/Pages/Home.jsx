import React from 'react'

import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Sidebar from '../Components/Sidebar'

const Home = () => {
  return (
    <div>
        <div className="flex">
        <div className="flex-1 pr-8">
          <main>
            <div className="grid grid-cols-12 gap-4">

              <div className="p-2 col-span-4 h-56 rounded-xl bg-white border border-gray-200">Total portfolio value</div>
              <div className="p-2 col-span-4 h-56 rounded-xl bg-white border border-gray-200">overall profit/loss</div>
              <div className="p-2 col-span-4 h-56 rounded-xl bg-white border border-gray-200">Box 3</div>
              <div className="p-2 col-span-8 h-96 rounded-xl bg-white border border-gray-200">Box 4</div>
              <div className="p-2 col-span-4 h-96 rounded-xl bg-white border border-gray-200">Box 5</div>
              <div className="p-2 col-span-12 h-56 rounded-xl bg-white border border-gray-200">Box 5</div>

            </div>
          </main>
        </div>
      </div>

      
    </div>
  )
}

export default Home
