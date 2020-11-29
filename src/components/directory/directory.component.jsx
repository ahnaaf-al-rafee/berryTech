import React from "react";

import MenuItem from "../menu-item/menu-item.component";

import "./directory.styles.css";

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: "Mobiles",
          imageUrl:
            "https://static-01.daraz.com.bd/p/26bf0e80377bfa16a7be632431d8f1ab.jpg",
          id: 1,
          // linkUrl: "shop/hats",
        },
        {
          title: "Accessories",
          imageUrl:
            "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Electronics_1x._SY304_CB432774322_.jpg",
          id: 2,
          // linkUrl: "shop/jackets",
        },
        {
          title: "softwares",
          imageUrl:
            "https://static-01.daraz.com.bd/p/0d197abcbc8c084c60a94412923a515d.jpg",
          id: 3,
          // linkUrl: "shop/sneakers",
        },
        {
          title: "PC",
          imageUrl: "https://i.ibb.co/3drRRFb/pc-3.jpg",
          size: "large",
          id: 4,
          // linkUrl: "shop/womens",
        },
        {
          title: "MAC",
          imageUrl: "https://i.ibb.co/FXTB3C2/mac-main.jpg",
          size: "large",
          id: 5,
          // linkUrl: "shop/mens",
        },
      ],
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, title, imageUrl, size }) => (
          <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
        ))}
      </div>
    );
  }
}

export default Directory;
