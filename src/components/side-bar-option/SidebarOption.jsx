import React from 'react'

import { SidebarOptionContainer } from './SidebarOption.styles'

function SidebarOption({ Icon, title, number, selected }) {
    return (
        <SidebarOptionContainer containerSelection={selected ? true : false}>
            <Icon />
            <h3>{title}</h3>
            <p>{number}</p> 
        </SidebarOptionContainer>
    )
}

export default SidebarOption

