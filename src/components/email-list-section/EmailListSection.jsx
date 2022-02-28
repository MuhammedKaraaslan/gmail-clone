import React from 'react'

import { SectionContainer } from './EmailListSection.styles'

function EmailListSection(props) {
    return (
        <SectionContainer listSelection={props.selected ? true : false} color={props.color}>
            <props.Icon />
            <h4>{props.title}</h4>
        </SectionContainer>
    )
}

export default EmailListSection
