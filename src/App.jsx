import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Portfolio from "./Pages/Portfolio";
import Crypto from "./Pages/Crypto";
import Stocks from "./Pages/Stocks";

import Sidebar from "./Components/Sidebar";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

function App() {
return (
<Router>
<div className="bg-blue-50 flex flex-col min-h-screen">
<div className="flex">
<Sidebar />
{/* Main content area */}
<div className="flex-1">
<Navbar />
{/* Page routes */}
<Routes>
<Route path="/" element={<Home />} />
<Route path="/portfolio" element={<Portfolio/>} />
<Route path="/crypto" element={<Crypto/>} />
<Route path="/stocks" element={<Stocks/>} />
{/* Redirect any undefined route to Home */}
<Route path="*" element={<Home />} />
</Routes>
</div>
</div>

<Footer className='mt-auto'/>
</div>
</Router>
);
}

export default App;
