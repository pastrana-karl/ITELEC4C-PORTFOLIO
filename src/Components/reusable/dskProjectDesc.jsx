import React from 'react'

function dskProjectDesc(props) {
  return (
    <>
        <a rel="noreferrer" href = {props.link} target = "_blank" >
            <div className = "proj-banner-dskt">
                <div className = "proj-desc">
                    <div className = "proj-text">
                        <h3>{props.project}</h3>
                        <p>{props.desc}</p>
                        <br />
                        <p>{props.tools}</p>
                    </div>
                </div>
                <img src = {props.img} alt = "proj1-banner" />
                </div>
        </a>
    </>
  )
}

export default dskProjectDesc