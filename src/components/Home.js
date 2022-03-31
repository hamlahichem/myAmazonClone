import React from 'react';
import './Home.css';
import  HomePage from"./amazonprimeLarge.jpeg";


function Home() {
    return ( 

        <div className='Home__imageContainer'>
            
            <img  className="image" src={HomePage}/>


            <h1 > welcome </h1>
            
        </div>

    );
    
}

export default Home;
/*
<img  className="image" src={HomePage}/>
<img  className="image" src={HomePage1}/>
<img  className="image" src={HomePage2}/>
<img  className="image" src={HomePage3}/>*/