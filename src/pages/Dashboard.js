import React from 'react'
import '../css/dashboard.css'
import { BiSearchAlt, BiBookReader } from "react-icons/bi"
import { RiEqualizerLine } from 'react-icons/ri'
import { IoSchoolOutline, IoFastFoodOutline } from 'react-icons/io5'
import { FaRegGrinBeamSweat } from 'react-icons/fa'
import userIcon from '../assests/user-icon.png'
import { useUserAuth } from '../context/UserAuthContext';
import { CategoryCard } from '../components/CategoryCard'
import AddCategoryModal from '../components/AddCategoryModal'



function Dashboard() {

  const { user } = useUserAuth();
  const { addCategory } = useUserAuth();

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

  const addCategoryFunction = async () => {
    try {
      await addCategory();
      console.log("dsh")
    } catch (err) {
      console.log(err.code)
    }
  }




  //categories name
  const categories = [
    { categoryIcon: <IoSchoolOutline className='category-icon' />, categoryTitle: "School", categorySubtitle: "4 tasks", categoryProgress: "70%" },
    { categoryIcon: <BiBookReader className='category-icon' />, categoryTitle: "Reading", categorySubtitle: "1 tasks", categoryProgress: "50%" },
    { categoryIcon: <FaRegGrinBeamSweat className='category-icon' />, categoryTitle: "Exercise", categorySubtitle: "3 tasks", categoryProgress: "85%" },
    { categoryIcon: <IoFastFoodOutline className='category-icon' />, categoryTitle: "Food", categorySubtitle: "7 tasks", categoryProgress: "100%" }
  ]


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
                {
                  categories && categories?.map((task) => {
                    return (
                      <CategoryCard
                        categoriesIcon={task?.categoryIcon}
                        categoriesTitle={task?.categoryTitle}
                        categoriesSubtitle={task?.categorySubtitle}
                        categoriesProgress={task?.categoryProgress} />
                    )
                  })
                }
                <AddCategoryModal newEvent={addCategoryFunction()} />
              </div>
            </div>
          </div>
        </div>
        <div className='mid-section'>
          <div>
            <h3>My Tasks</h3>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard