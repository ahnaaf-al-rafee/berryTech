const SHOP_DATA = [
  {
    id: 1,
    title: "Accessories",
    routeName: "accessories",
    items: [
      {
        id: 1,
        name: "Bose QuietComfort 35",
        imageUrl:
          "https://images-na.ssl-images-amazon.com/images/I/41jSuUHT8eL._AC_US160_.jpg",
        price: 199.0,
      },
      {
        id: 2,
        name: "Apple EarPods with Lightning Connector - White",
        imageUrl:
          "https://images-na.ssl-images-amazon.com/images/I/21zodo7QkUL._AC_US160_.jpg",
        price: 15,
      },
      {
        id: 3,
        name: "TP-Link AC1750 Smart WiFi Router",
        imageUrl:
          "https://images-na.ssl-images-amazon.com/images/I/415vAIn9uEL._AC_US160_.jpg",
        price: 59.99,
      },
      {
        id: 4,
        name: "AMD Ryzen 7 3700X 8-Core, 16-Thread Unlocked Desktop Processor",
        imageUrl:
          "https://m.media-amazon.com/images/I/717Di3DGIbL._AC_UY218_.jpg",
        price: 304,
      },
      {
        id: 5,
        name: "Samsung Galaxy Buds+ Plus",
        imageUrl:
          "https://m.media-amazon.com/images/I/51xvUyKNLCL._AC_UY218_.jpg",
        price: 119,
      },
    ],
  },
  {
    id: 2,
    title: "mobiles",
    routeName: "mobiles",
    items: [
      {
        id: 1,
        name: "Apple iPhone 11 Pro",
        imageUrl:
          "https://m.media-amazon.com/images/I/61vflt1U5gL._AC_UY218_.jpg",
        price: 779,
      },
      {
        id: 2,
        name: "OnePlus 8 Pro Onyx Black",
        imageUrl:
          "https://m.media-amazon.com/images/I/51az5uPx4AL._AC_UY218_.jpg",
        price: 799.99,
      },
      {
        id: 3,
        name: "Samsung Galaxy S20",
        imageUrl:
          "https://m.media-amazon.com/images/I/61nSb8Jn7oL._AC_UY218_.jpg",
        price: 799,
      },
      {
        id: 4,
        name: "Realme C11",
        imageUrl:
          "https://static-01.daraz.com.bd/p/e162bb2eaae5ee208478ea39062c0d35.jpg",
        price: 105.11,
      },
      {
        id: 5,
        name: "HUAWEI Y9",
        imageUrl:
          "https://static-01.daraz.com.bd/p/a9e9312e9cb0db020478571fb4d01412.jpg",
        price: 253.89,
      },
    ],
  },
  {
    id: 3,
    title: "softwares",
    routeName: "softwares",
    items: [
      {
        id: 1,
        name: "ESET 2020 Internet Security",
        imageUrl:
          "https://static-01.daraz.com.bd/p/141443ce1cd10cdb7687177726d8fedb.jpg",
        price: 5.9,
      },
      {
        id: 2,
        name: "Panda Antivirus and internet security",
        imageUrl:
          "https://static-01.daraz.com.bd/p/41a7b02c211d6f78ae642339958b5951.jpg",
        price: 3.78,
      },
      {
        id: 3,
        name: "Kaspersky Internet Security 2019",
        imageUrl:
          "https://static-01.daraz.com.bd/p/82952f4ca6f22d846010431c423fde88.jpg",
        price: 14.76,
      },
      {
        id: 4,
        name: "Microsoft Windows 10 Home",
        imageUrl:
          "https://m.media-amazon.com/images/I/61-NY4+51BL._AC_UY218_.jpg",
        price: 129,
      },
      {
        id: 5,
        name: "Adobe Acrobat Pro 2020",
        imageUrl:
          "https://m.media-amazon.com/images/I/612VjwYnpnL._AC_UY218_.jpg",
        price: 118,
      },
    ],
  },
  {
    id: 4,
    title: "pc",
    routeName: "pc",
    items: [
      {
        id: 1,
        name: "Acer Aspire C24-963-UA91",
        imageUrl:
          "https://m.media-amazon.com/images/I/61PlVVOd3QL._AC_UY218_.jpg",
        price: 579.99,
      },
      {
        id: 2,
        name: "iBUYPOWER Gaming PC",
        imageUrl:
          "https://m.media-amazon.com/images/I/712irbqWpeL._AC_UY218_.jpg",
        price: 529.99,
      },
      {
        id: 3,
        name: "HP 22-inch All-in-One Desktop",
        imageUrl:
          "https://m.media-amazon.com/images/I/71RLwsjsGcL._AC_UY218_.jpg",
        price: 416.01,
      },
      {
        id: 4,
        name: "ASUS AiO",
        imageUrl:
          "https://m.media-amazon.com/images/I/71tk2rkxmPL._AC_UY218_.jpg",
        price: 519,
      },
      {
        id: 5,
        name: "Latest_DELL Inspiron",
        imageUrl:
          "https://m.media-amazon.com/images/I/31DX45GE4RL._AC_UY218_.jpg",
        price: 620.0,
      },
    ],
  },
  {
    id: 5,
    title: "mac",
    routeName: "mac",
    items: [
      {
        id: 1,
        name: "New Apple MacBook Pro",
        imageUrl:
          "https://m.media-amazon.com/images/I/71BMVOs2xML._AC_UY218_.jpg",
        price: 1294,
      },
      {
        id: 2,
        name: "Apple 13in MacBook Pro",
        imageUrl:
          "https://m.media-amazon.com/images/I/71nM55mRvxL._AC_UY218_.jpg",
        price: 2199,
      },
      {
        id: 3,
        name: "Apple MacBook Pro 13in",
        imageUrl:
          "https://m.media-amazon.com/images/I/51jckVG7HeL._AC_UY218_.jpg",
        price: 749.99,
      },
      {
        id: 4,
        name: "New Apple iMac",
        imageUrl:
          "https://m.media-amazon.com/images/I/71KR2i6-WaL._AC_UY218_.jpg",
        price: 1709,
      },
      {
        id: 5,
        name: " Apple iMac 21.5in",
        imageUrl:
          "https://m.media-amazon.com/images/I/41HuYIKqsIL._AC_UY218_.jpg",
        price: 749,
      },
    ],
  },
];

export default SHOP_DATA;
