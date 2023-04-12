
import React from 'react'


export default function MenuCard({MenuData}) {
  console.log(MenuCard);
  return (
    <>
       <section className='main-card--cointainer'>

        {MenuData.map( (curElement) =>{
              return(
                <>
                <div className="card-container" >
                <div className="card ">
                  <div className="card-body">
                    <span className="card-number card-circle subtle">1</span>
                    <span className="card-author subtle"> Breakfast</span>
                    <h2 className="card-title"> Maggie </h2>
                    <span className="card-description subtle">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos optio quod quasi sit. Unde, aperiam.
                    </span>
                    <div className="card-read">Read</div>
                  </div>
                  {/* <img src={image} alt="images" className="card-media" /> */}

                  <span className="card-tag  subtle">Order Now</span>
                </div>
              </div>
                </>
                
              )
        } )}

       </section>
    </>
  )
}
