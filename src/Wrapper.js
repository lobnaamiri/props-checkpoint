import React from 'react';
import Image from './img/img.jpg';
import Title from './component';

function Wrapper(){
    return(
        <div> 
            <img src={Image}/>
            <Title style={{color:"red"}} titre="Lobna"/>
            <Title titre="Etudiante"/>
        </div>
        
        
            
    );
}
        
export default Wrapper;
