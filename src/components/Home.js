import React from 'react';
import './Home.css';
import  HomePage from"./amazonprimeLarge.jpeg";
import Product from './Product.js';


function Home() {
    return ( 

        <div className='Home__imageContainer'>
            
            <img  className="image" src={HomePage}/>

{/*first row*/ }
            <div className='home__row'>
                <Product/>
                <Product/>
                <Product/>
            </div>      

 {/*second  row*/ }
           
            <div className='home__row'>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>

            </div>   

 {/*third  row*/ }     
            <div className='home__row'>
                <Product/>
                <Product/>
                <Product/>
                <Product/>

            </div>     
            
        </div>

    );
    
}

export default Home;
/*
<img  className="image" src={HomePage}/>
<img  className="image" src={HomePage1}/>
<img  className="image" src={HomePage2}/>
<img  className="image" src={HomePage3}/>*/