import db from '../data/db.json'
import '../scss/Qnalist.css'
import React,{ useState } from 'react'

export default function Qnalist(props){
    const [opendiv, openSet] = useState(false); 

    return (
        <>
        <div>{props.contentdb.sectiontitle.split("<br>").map((v,i)=>{
            return(
                <p className={"title"+i}>{v}</p>
                  )
            })
            } 
        <ul>
            {
                props.contentdb.faqlist.map((v,i)=>{
                    return(
                        <li>
                            <h3 id='Qbox' onClick={()=>{openSet(!opendiv)}}><div className='number'>{i}</div>{v.Q}</h3>
                          {opendiv && <div id='Abox'>{v.A.split("<br>").map((v,i)=>{
                               return( 
                                    <>
                                    {v}<br/>
                                    </>
                                )
                            })}</div>
                            }  
                        </li>
                    )
                })
            }
        </ul>
            </div>
        </>
    )
} 