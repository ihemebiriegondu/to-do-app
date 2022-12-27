import React from 'react'
import '../css/dashboard.css'
import { BiSearchAlt } from "react-icons/bi"
import { ImEqualizer } from 'react-icons/im'
import { useUserAuth } from '../context/UserAuthContext';

function Dashboard() {

  const { user } = useUserAuth();

  var today = new Date()
  var currentHour = today.getHours()
  let greetings = ""

  if (currentHour < 12) {
    greetings = "morning"
  } else if (currentHour < 18) {
    greetings = "afternoon"
  } else {
    greetings = "evening"
  }

  return (
    <div className='dashboard'>
      <div className='dashboard-div'>
        <div className={`top-section ${greetings}`}>
          <div className='d-flex justify-content-between align-items-end top-nav'>
            <div className=''>
              <h4>Good {greetings}</h4>
              <h5>{user && user.displayName}</h5>
              <p className='mb-0'>38 tasks today</p>
            </div>
            <img className='' src={user.photoURL} alt="" />
          </div>
          <div className='search d-flex justify-content-between align-items-center'>
            <BiSearchAlt className='search-tools' />
            <input type="text" className='flex-grow-1' />
            <ImEqualizer className='search-tools' />
          </div>
          <div className='categories'>
            <h3>Categories</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard