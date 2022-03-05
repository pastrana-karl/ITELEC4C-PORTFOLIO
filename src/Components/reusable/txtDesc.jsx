import React from 'react';

function txtDesc(props) {
  return (
    <div>
            <img src = {props.img} alt = "desc-img" />
            <p>{props.txt}</p>
    </div>
  )
}

export default txtDesc