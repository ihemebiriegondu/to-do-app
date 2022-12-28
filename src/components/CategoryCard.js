import React from 'react'
import "../css/categorycard.css"


export const CategoryCard = ({categoriesIcon, categoriesTitle, categoriesSubtitle, categoriesProgress}) => {
  return (
    <div className='category-card'>
      <div className="card">
        <div className="card-body p-0">
          <div>
            <div className='category-icon-div  d-flex justify-content-center align-items-center'>
              <span>{categoriesIcon}</span>
            </div>
          </div>
          <h5 className="card-title">{categoriesTitle}</h5>
          <h6 className="card-subtitle">{categoriesSubtitle}</h6>
          <div>
            <div className="progress">
              <div className="progress-bar" role="progressbar" aria-label="Success example" aria-valuenow={categoriesProgress} aria-valuemin="0" aria-valuemax="100" style={{ width: categoriesProgress }}></div>
            </div>
            <div>
              <p className='d-flex justify-content-between align-items-center'><span>Progress</span><span>{categoriesProgress}</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
