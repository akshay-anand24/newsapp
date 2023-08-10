import React, { useEffect } from 'react'
import  './style.css'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Navbar = () => {
  


    useEffect(()=>{
AOS.init({duration:2000})
        
        let menu=document.getElementById('menu')
        let sidebar=document.getElementsByClassName('sidebar')[0]
        window.onclick=(e)=>{
    
          if(sidebar.style.width=='150px'){
            sidebar.style.border=0
            sidebar.style.width='0px'
            sidebar.style.boxShadow='0px 0 0 0'
          }
         else if(e.target.matches('#menu'))
        {
          sidebar.style.width='150px'
        sidebar.style.border='1px solid black'
        sidebar.style.boxShadow='0px 0px 5px 2px gray'

      }

       
     
     
         
     }
      
        // menu.onclick=()=>{
        //     // alert(4)
        //     // if(sidebar)
        //     if(sidebar.style.display==='none')
        //     sidebar.style.display='block'
        //     else
        //     sidebar.style.display='none'
        // }
       
    })

  return (
    <>
<div className='navbar' data-aos='slide-down'>


    <div className="logo">
    <img src={require("./logo.png")} alt=""/></div>


<div className="container">
    <ul>
      <Link to='/'><li><i className="fa-solid fa-house fa-lg"></i></li></Link>  
      <Link to='/sections'  ><li>Sections</li></Link>  
      <Link to='/post'><li>Post <i className="fa-regular fa-message fa-lg"></i></li></Link>  
      <Link to='/trends'><Button variant='default' size='small' sx={{
        color:'rgb(43, 115, 52)',
        '&:hover':{backgroundColor:'transparent'
        }}}>
        <li>Trends <i className="fa-solid fa-arrow-trend-up"></i></li>
        </Button></Link>  
       
    </ul>
      <li className='hidden menu' id='menu'><i id='menu' className="fa-solid fa-bars fa-xl"></i></li> 
</div>
</div>


<div className="sidebar">
<ul>
      <Link to='/'><li>Home <i className="fa-solid fa-house fa-small"></i></li></Link>  <hr />
      <Link to='/sections'  ><li>Sections</li></Link>  <hr />
      <Link to='/post'><li>Post <i className="fa-regular fa-message fa-small"></i></li></Link>  <hr />
      <Link to='/trends'>
        <li id='trends'>Trends <i className="fa-solid fa-arrow-trend-up"></i></li>
        </Link>  
       
    </ul>
</div>


    </>
  )



}

export default Navbar