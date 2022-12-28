import React from 'react'
import "../css/categorycard.css"
import { IoSchoolOutline } from 'react-icons/io5'


export const CategoryCard = () => {
  return (
    <div className='category-card'>
      <div className="card">
        <div className="card-body p-0">
          <div>
            <div className='category-icon-div  d-flex justify-content-center align-items-center'>
              <IoSchoolOutline className='category-icon' />
            </div>
          </div>
          <h5 className="card-title">School</h5>
          <h6 className="card-subtitle">3 tasks</h6>
          <div>
            <div className="progress">
              <div className="progress-bar" role="progressbar" aria-label="Success example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ width: "70%" }}></div>
            </div>
            <div>
              <p className='d-flex justify-content-between align-items-center'><span>Progress</span><span>75%</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
