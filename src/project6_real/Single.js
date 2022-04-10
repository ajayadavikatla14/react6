import React, { useEffect, useState } from 'react';
import {FaAngleDoubleRight} from 'react-icons/fa';


const Single=()=>{
    const url='https://course-api.com/react-tabs-project';
    const [loading,setLoading]=useState(true);
    const [data,setData]=useState();
    const [current,setCurrent]=useState(0);

    const headStyle={
        'marginLeft':'31rem',marginTop:'5rem',color:'#1568b0'
    }

    const card_style={
        'marginLeft':'5rem','width':'70rem',backgroundColor:'#e04fc3',
    }

    const total_style={
        'display':'flex',marginLeft:'20rem',marginTop:'2rem',color:'white',fontSize:'1.3rem'
    }


   

    const fetchingApi= async ()=>{
        setLoading(true);
        try{
            const response=await fetch(url);
            const data=await response.json();
            setData(data);
            setLoading(false);
            console.log(data);
        }
        catch(error){
            console.log(error);
            setLoading(false);
        }
    }

    useEffect(()=>{
        fetchingApi();
    },[])
    if(loading){
        return(
            <>
                <h1>Loading user details......</h1>
            </>
        )
    }

    const {company,dates,duties,title}=data[current];

    return(
        <>  
            <h1 style={headStyle}>Company Details</h1>
            <div className="total" style={total_style}>
                <div className="btn-group-vertical" >
                    {data.map((ele,index)=>{
                        return(
                                <button key={index}  onClick={()=>setCurrent(index)} className={` ${index===current} && btn btn-success  `} >{ele.company}</button>
                        )
                    })}
                </div>
                <div className="card" style={card_style}>
                    <h3 className="card-title">{title}</h3>
                    <h5 className='card-title' >{company}</h5>
                    <div className="card-body">
                        <p className="card-text">{dates}</p>
                        <div>
                            {duties.map((ele,index)=>{
                                return(
                                    <p key={index} > <FaAngleDoubleRight /> {ele}</p>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )


}



















export default Single;