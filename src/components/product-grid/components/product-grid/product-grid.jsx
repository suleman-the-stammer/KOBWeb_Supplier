import React from "react";

// Components :
import { FilterBox } from "src/components";
import { LandScapeCard, ProductCard } from "..";

// CSS :
import "./product-grid.scss";


const ProductGrid = (props) => {
  const {
    path,
    isClosed,
    togglePageView,
    toggleFilterBox,
  } = props;

  const productArray = [
    { imagePath: './images/mobile.png', },
    { imagePath: '/images/lcd.png', },
    { imagePath: './images/budss.png', },
    { imagePath: '/images/buds.png', },
    { imagePath: './images/asos.png', },
    { imagePath: '/images/watch.png', },
    { imagePath: './images/laptop.png', },
    { imagePath: './images/mobile.png', },
    { imagePath: '/images/lcd.png', },
    { imagePath: './images/budss.png', },
    { imagePath: '/images/buds.png', },
    { imagePath: './images/asos.png', },
    { imagePath: '/images/watch.png', },
    { imagePath: './images/laptop.png', },
    { imagePath: '/images/lcd.png', },
    { imagePath: './images/mobile.png', },
    { imagePath: '/images/lcd.png', },
    { imagePath: './images/mobile.png', },
    { imagePath: '/images/lcd.png', },
    { imagePath: './images/mobile.png', },
    { imagePath: '/images/lcd.png', },
    { imagePath: './images/mobile.png', },
    { imagePath: '/images/lcd.png', },
    { imagePath: './images/mobile.png', },
  ]
  return (
    <div className="product-container">
      {toggleFilterBox &&
        <FilterBox />
      }
      {togglePageView &&
        <div
          className="products-grid"
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${toggleFilterBox ? 5 : 6}, 1fr)`
          }}
        >
          {productArray.map((data, i) => (
            <ProductCard
              key={i}
              path={path}
              data={data}
              isClosed={isClosed}
            />
          ))}
        </div>
      }
      {!togglePageView &&
        <div
          className='product-landscape-container'
          style={{
            width: "80%",
            margin: "auto"
          }}
        >
          {productArray.map((data, i) => (
            <LandScapeCard
              key={i}
              data={data}
              path={path}
              isClosed={isClosed}
            />
          ))}
        </div>
      }
    </div>
  );
};

export default ProductGrid;
