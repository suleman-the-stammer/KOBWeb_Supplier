import React, { useState } from 'react'
import { PageHeader } from '..'
import { ProductGrid } from './components'

// CSS :
import './product-page.scss'


const ProductPage = (props) => {
    const { title, subTitle, input, path, isClosed } = props;

    const [toggleFilterBox, setToggleFilterBox] = useState(false);
    const [togglePageView, setTogglePageView] = useState(true);

    return (
        <>
            <PageHeader
                title={title}
                input={input}
                subTitle={subTitle}
                toggleFilterBox={toggleFilterBox}
                setTogglePageView={setTogglePageView}
                setToggleFilterBox={setToggleFilterBox}
            />
            <ProductGrid
                path={path}
                isClosed={isClosed}
                togglePageView={togglePageView}
                toggleFilterBox={toggleFilterBox}
            />
        </>
    )
}

export default ProductPage
