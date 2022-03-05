import React from 'react'

function mblProjectDesc(props) {
  return (
    <>
        <div className = "proj-banner-mbl">
            <a rel="noreferrer" href = {props.link} target = "_blank" >
                <img src = {props.img} alt = "proj2-banner" />
            </a>
            
            <div className = "proj-desc">
                <div className = "proj-text">
                    <h3>{props.project}</h3>
                    <p>{props.desc}</p>
                    <br />
                    <p>{props.tools}</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default mblProjectDesc