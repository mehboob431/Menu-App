import React from 'react'

const index = ({ type, text, onClick, color, size, children, icon }) => {
    return (
        
        <button className={`btn rounded-xl ${color} ${size}`} type={type||"button"} onClick={onClick}>{icon}{children}</button>
    )
}

export default index