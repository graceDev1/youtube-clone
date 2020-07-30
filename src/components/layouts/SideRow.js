import React from 'react'
import '../../SideRow.css';

function SideRow({selected,Icon, title}) {
    return (
        <div className={`sidebarRow ${selected && "selected"}`}>
            <Icon className="sideBarRow__icon"/>
            <h2 className="sideBarRow__title">{title}</h2>
        </div>
    )
}

export default SideRow
