import React from "react";

class RecommendedProduct extends React.Component {
  render() {
    return (
      <div className="mt-16">
        <div className="flex justify-between">
          <div className="text-black text-2xl font-medium">
            Recommended for you
          </div>
          <div className="text-[#90D9D4] text-2xl font-medium">See more</div>
        </div>

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
          {this.props.ProductItems ? (
            this.props.ProductItems.map((product) => (
              <div className=" w-72 mx-auto  overflow-hidden p-6">
                <div className="bg-gray-200 flex justify-center py-4 rounded-2xl relative">
                  <button className="absolute top-2 right-0 p-2 rounded bg-white text-gray-500 mx-5 -mb-4 ">
                    <span
                      className="iconify"
                      data-icon="akar-icons:heart"
                      data-width="25"
                      data-height="25"
                    ></span>
                  </button>
                  <img className="" src={product.imageUrl} alt="" />
                </div>
                <div className="px-5 py-3 space-y-4 text-xl">
                  <h3 className="text-gray-400 ">
                    {" "}
                    <span className="text-black font-semibold">Apple</span>{" "}
                    {product.name}
                  </h3>
                  <span className="text-black font-semibold mt-2">
                    {product.originalPrice}
                  </span>
                </div>
              </div>
            ))
          ) : (
            <div>Loading</div>
          )}
        </div>
      </div>
    );
  }
}

export default RecommendedProduct;
