'use client'

import React from 'react';
import { useState } from 'react';
import './style.css';
import Link from 'next/link';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation'
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [categoryOpen, setCategoryOpen] = useState(false); // State for dropdown visibility


const router  = useRouter()




  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleCategory = () => {
    setCategoryOpen(!categoryOpen);
  };






  const logout = async () => {
    try {
      const response = await fetch("/api/users/logout", {
        method: 'POST', // Make sure you're using POST for logout
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        // Redirect to login page after successful logout
        toast.success('Logout Successfully');
        router.push('/login')
      } else {
        const data = await response.json();
        console.log(data);
        toast.error(data.message || "Logout Failed");
      }
    } catch (error) {
      console.error("Error during logout:", error);
      toast.error("An error occurred during logout");
    }
  };


  return (
    <nav className="navbar">
      <div className="navbar-container container" style={{display:"flex", justifyContent:"space-around"}}>
        <input
          type="checkbox"
          id="toggle-menu"
          checked={menuOpen}
          onChange={toggleMenu}
        />
        <div className="hamburger-lines" onClick={toggleMenu}>
          <span className={`line line1 ${menuOpen ? 'open' : ''}`}></span>
          <span className={`line line2 ${menuOpen ? 'open' : ''}`}></span>
          <span className={`line line3 ${menuOpen ? 'open' : ''}`}></span>
        </div>
        <ul className={`menu-items ${menuOpen ? 'open' : ''}`}>
          <li><Link href="/">Home</Link></li>
          <li><Link href="#">About</Link></li>
          <li className={`dropdown ${categoryOpen ? 'open' : ''}`} onClick={toggleCategory}>
            <Link href="#">Services<span className={`dropdown-icon ${categoryOpen ? 'open' : ''}`} style={{ fontSize: "15px" }}>▼</span></Link>
            <ul className={`dropdown-menu ${categoryOpen ? 'open' : ''}`}>
              <li><Link href="/weather-app">Weather App</Link></li>
              <li><Link href="/food-recipe">Food Receipe App</Link></li>
              <li><Link href="/image-search">Image Search App</Link></li>
            </ul>
          </li>
          <li><Link href="/contact-us">Contact</Link></li>
          <li>
            <Link href='/login'><button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow  h-10 rounded-md px-8 signin-btn" >Sign In</button></Link>
          </li>
          <li>
            <Link href='/login'><button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow  h-10 rounded-md px-8 signin-btn" onClick={logout}>Log Out</button></Link>
          </li>
        </ul>

        <h1 className="logo">NEXT</h1>



      </div>
    </nav>
  );
};
export default Navbar;