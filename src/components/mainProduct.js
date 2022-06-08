import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

class MainProduct extends React.Component {
  render() {
    return (
      <Carousel showArrows={true} swipeable={true}>
        {this.props.ProductItems ? (
          this.props.ProductItems.map((product) => (
            <div className="md:flex md:items-center">
              <div className="w-full h-64 md:w-1/2 lg:h-96 relative">
                <img
                  className="h-full w-full rounded-md object-cover max-w-lg mx-auto"
                  src={product.imageUrl}
                  alt="Images"
                />
                <div className=" absolute bottom-8 right-32">
                  <div className="text-xl px-3 py-2 rounded-xl text-white px bg-[#0BADA2]">
                    {product.percentOff}%
                  </div>
                </div>
              </div>
              <div className="w-full max-w-lg mx-auto mt-5 md:ml-8 md:mt-0 md:w-1/2 space-y-8">
                <div>
                  <div className=" text-4xl text-gray-400 flex space-x-2">
                    <div className="text-black">{product.name}</div>
                    <div>AC/DC North</div>
                  </div>
                  <div className="text-4xl text-gray-400">
                    American Tour T-Shirt
                  </div>
                </div>

                <div className="flex flex-row h-10 rounded-lg relative bg-transparent mt-1 w-[50%] border-2 border-gray-300">
                  <button
                    data-action="decrement"
                    className=" bg-white text-center ml-4 outline-none"
                  >
                    <span
                      className="iconify"
                      data-icon="akar-icons:minus"
                      data-width="25"
                      data-height="25"
                    ></span>
                  </button>
                  <input
                    type="number"
                    className="focus:outline-none text-4xl text-center w-full bg-white font-semibold hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none"
                    name="custom-input-number"
                    value="0"
                  ></input>
                  <button
                    data-action="increment"
                    className="bg-white  text-center mr-4 cursor-pointer"
                  >
                    <span
                      className="iconify"
                      data-icon="ant-design:plus-outlined"
                      data-width="25"
                      data-height="25"
                    ></span>
                  </button>
                </div>
                <div className="flex space-x-4 text-3xl">
                  <div>{product.salePrice}</div>
                  <div className=" line-through text-gray-400">
                    {product.originalPrice}
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div>Loading</div>
        )}
      </Carousel>
    );
  }
}

export default MainProduct;
