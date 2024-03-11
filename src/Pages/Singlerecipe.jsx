import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Singlerecipe = () => {
  let Location = useLocation();
  console.log(Location.state.recipe)
  return (
    <div>
      <div className='Container'>
        <div className='row mt-3'>
          <div className='col-md-4 bg-warning d-flex justify-content-center p-3'>
            <img src={Location.state.recipe.image} style={{ height :"200px" ,width :"250px"}} alt="" />
          </div>
          <div className='col-md-8 bg-warning '>
            <h1 className='text-center'>{Location.state.recipe.label}</h1>
            <h5 className='text-center'>Meal type{Location.state.recipe.Mealtype}</h5>
            <div className='col-md-3 mt-3 m-auto'> 
              <Link   to={Location.state.recipe.url} className='btn btn-info'>See full Recipe Here</Link>
            </div>
            <div className='row w-75 mt-2 m-auto d-flex justify-content-center gap-2'>
              <div className='col-md-3 bg-primary me-3 rounded'>
                <h3 className='text-center'>{Location.state.recipe.totalDaily.CA.label}</h3>
                <p className='text-center'>{Math.floor(Location.state.recipe.totalDaily.CA.quantity)}{Location.state.recipe.totalDaily.CA.unit}</p>
              </div>
              <div className='col-md-3 bg-primary me-3 rounded'>
                <h3 className='text-center'>{Location.state.recipe.totalDaily.FAT.label}</h3>
                <p className='text-center'>{Math.floor(Location.state.recipe.totalDaily.FAT.quantity)}{Location.state.recipe.totalDaily.FAT.unit}</p>
              </div>
              <div className='col-md-3 bg-primary me-3 rounded'>
                <h3 className='text-center'>{Location.state.recipe.totalDaily.FIBTG.label}</h3>
                <p className='text-center'>{Math.floor(Location.state.recipe.totalDaily.FIBTG.quantity)}{Location.state.recipe.totalDaily.FIBTG.unit}</p>
              </div>
              {/* <div className='col-md-3 bg-warning me-3'>
            <h2 className='text-center'>{location.state.recipe.totalDaily.MG.label}</h2>
            <p className='text-center'>{Math.floor(location.state.recipe.totalDaily.MG.quantity)}{location.state.recipe.totalDaily.MG.unit}</p>
            </div>
            <div className='col-md-3 bg-warning me-3'>
            <h2  className='text-center'>{location.state.recipe.totalDaily.NIA.label}</h2>
            <p  className='text-center'>{Math.floor(location.state.recipe.totalDaily.NIA.quantity)}{location.state.recipe.totalDaily.NIA.unit}</p>
            </div> */}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6"></div>
          <ul>
              <h2 className='justify-content-center'>Health Labels-{Location.state.recipe.healthLabels.length}</h2>
              {Location.state.recipe.healthLabels.map((ele) => {
                return <li className=''>{ele}</li>
              })}
            </ul>
          </div>
          <div className="col-md-6">
            <ul>
              <h2 className=' justify-content-center'>Ingredients-{Location.state.recipe.ingredients.length}</h2>
              {Location.state.recipe.ingredients.map((ele) => {
                return <li className='' key={ele.food}>{ele.food}</li>
              })}
              <div className='mt-2'>
                <h3>{Location.state.recipe.totalDaily.VITA_RAE.label}</h3>
                <li>{Location.state.recipe.totalDaily.VITA_RAE.quantity}{Location.state.recipe.totalDaily.VITA_RAE.unit}</li>

                <h3>{Location.state.recipe.totalDaily.VITB6A.label}</h3>
                <li>{Location.state.recipe.totalDaily.VITB6A.quantity}{Location.state.recipe.totalDaily.VITB6A.unit}</li>
                <h3>{Location.state.recipe.totalDaily.VITD.label}</h3>
                <li>{Location.state.recipe.totalDaily.VITD.quantity}{Location.state.recipe.totalDaily.VITD.unit}</li>
              </div>
            </ul>
          </div>
        </div>
      </div>
   


  )
}
export default Singlerecipe
