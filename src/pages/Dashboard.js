import React from 'react'
import '../css/dashboard.css'
import { BiSearchAlt } from "react-icons/bi"
import { RiEqualizerLine } from 'react-icons/ri'
import userIcon from '../assests/user-icon.png'
import { useUserAuth } from '../context/UserAuthContext';
import { CategoryCard } from '../components/CategoryCard'

function Dashboard() {

  const { user } = useUserAuth();
  //console.log(user.photoURL)
  let photoURL = ""
  if (user.photoURL === null) {
    photoURL = userIcon
  } else {
    photoURL = user.photoURL
  }


  //getting time for changing bg
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
            <img className='' src={photoURL} alt="" />
          </div>
          <div className='search d-flex justify-content-between align-items-center'>
            <BiSearchAlt className='search-tools' />
            <input type="text" className='flex-grow-1' />
            <RiEqualizerLine className='search-tools' />
          </div>
          <div className='categories'>
            <h3>Categories</h3>
            <div>
              <div className='d-flex'>
                <CategoryCard />
                <CategoryCard />
                <CategoryCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard