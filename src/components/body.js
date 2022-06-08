import React from "react";
import { connect } from "react-redux";
import { getProducts } from "../store/actions/fetcher";
import MainProduct from "./mainProduct";
import RecommendedProduct from "./recommendedProduct";
let ProductItems = [];
class Body extends React.Component {
  state = {};

  componentDidMount() {
    this.props.getProducts();
  }
  render() {
    ProductItems = this.props.products.d;

    console.log(ProductItems);

    return (
      <>
        <main className="my-8">
          <div className="container mx-auto px-6">
            <MainProduct ProductItems={ProductItems} />
            <RecommendedProduct ProductItems={ProductItems} />
          </div>
        </main>
      </>
    );
  }
}
const mapStateToProps = (state) => ({
  products: state.fetchToState.products,
});

export default connect(mapStateToProps, {
  getProducts,
})(Body);
