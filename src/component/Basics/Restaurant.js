
import React, { useState } from 'react'
import './style.css';
import Menu from './menuApi';
import MenuCard from './MenuCard';




const Restaurant = () => {

   const [menuData,setMenuData] = useState(Menu);

     console.log('menudata',Menu);


  return (
    <>
      
      <MenuCard MenuData={menuData} />
      
    </>
  )
}

export default Restaurant
