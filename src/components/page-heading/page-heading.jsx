import React from 'react'
import './page-heading.scss'

const PageHeading = (props) => {
    const {
        title,
        upperTitle,
        bottomTitle
    } = props;
    return (
        <div className='page-heading-container'>
            {upperTitle && <div className="upper-title">{upperTitle}</div>}
            {title && <div className="title">{title}</div>}
            {bottomTitle && <div className="bottom-title">{bottomTitle}</div>}
        </div>
    )
}

export default PageHeading
