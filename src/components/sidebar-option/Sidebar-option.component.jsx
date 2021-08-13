import React from 'react'
import './Sidebar-option.style.css'

const SidebarOption = ({ text, Icon, active }) => {
    return (

        <div className={
            `sidebar-option 
            ${active && "sidebar-option--active"}` //Si active existe alors ajoute sidebar-option--active
            }>
            <Icon />
            <h2>{ text }</h2> 
        </div>
    )
}

export default SidebarOption


