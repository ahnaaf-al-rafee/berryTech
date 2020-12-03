import React from "react";

import CollectionPreview from "../../components/collection-preview/collection-preview.component";
import SHOP_DATA from "./shop_data";

import "./shop.styles.css";

class ShopPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA,
      searchField: "",
    };
  }
  handleChange = (event) => {
    this.setState({ searchField: event.target.value });
  };

  render() {
    const { collections, searchField } = this.state;

    const filteredData = collections.filter((collection) =>
      collection.title.toUpperCase().includes(searchField.toLocaleUpperCase())
    );
    return (
      <div className="shop-page">
        <input
          type="search"
          placeholder="search products"
          onChange={this.handleChange}
        />
        {filteredData.map(({ id, ...otherProps }) => (
          <CollectionPreview key={id} {...otherProps} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
