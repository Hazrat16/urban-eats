import React from 'react'
import './style.css'

const Sidebar = () => {
  return (
    <nav class="main-menu">
            <ul>
                <li class="has-subnav">
                    <a href="/">
                        <i class="fa fa-globe fa-2x"></i>
                        <span class="nav-text">
                            Home
                        </span>
                    </a>
                  </li>
                  <li>
                    <a href="/menu">
                        <i class="fa fa-book fa-2x"></i>
                        <span class="nav-text">
                           Menu
                        </span>
                    </a>
                </li>
                <li>
                   <a href="/order">
                       <i class="fa fa-cogs fa-2x"></i>
                        <span class="nav-text">
                            Order
                        </span>
                    </a>
                </li>
                <li>
                    <a href="#">
                       <i class="fa fa-info fa-2x"></i>
                        <span class="nav-text">
                            Dashboard
                        </span>
                    </a>
                </li>
            </ul>
            <ul class="logout">
                <li>
                   <a href="#">
                         <i class="fa fa-power-off fa-2x"></i>
                        <span class="nav-text">
                            Logout
                        </span>
                    </a>
                </li>  
            </ul>
        </nav>
  )
}

export default Sidebar