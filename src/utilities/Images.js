// #### Method 1
const Images = {
  logo: { alt: "chit-logo", logoImage: require("../assets/images/logo.jpeg") },
  logoNavbar: {
    alt: "logo",
    logoImage: require("../assets/images/logo1.png"),
  },

  // bannerImg: [
  //   {
  //     url: require("../assets/images/slider-img.png"),
  //     alt: "banner img 1",
  //     title: "Crypto Currency",
  //     desc: " Explicabo esse amet tempora quibusdam laudantium, laborum eaque magnam fugiat hic? Esse dicta aliquid error repudiandae earum suscipit fugiat molestias, veniam, vel architecto veritatis delectus repellat modi impedit sequi. ",
  //   },
  //   {
  //     url: require("../assets/images/slider-img.png"),
  //     alt: "banner img 1",
  //     title: "Crypto Currency1",
  //     desc: "Explicabo esse amet tempora quibusdam laudantium, laborum eaque magnam fugiat hic? Esse dicta aliquid error repudiandae earum suscipit fugiat molestias, veniam, vel architecto veritatis delectus repellat modi impedit sequi. ",
  //   },
  // ],
};

// const entries = Object.entries(Images.logo);
// console.log(entries);

export default Images;

// Method 2 in object
// const imageData = {
//   section1: [
//     {
//       url: require('./path/to/section1/image1.jpg'),
//       alt: 'Alt Text for Section 1 - Image 1',
//     },
//     {
//       url: require('./path/to/section1/image2.jpg'),
//       alt: 'Alt Text for Section 1 - Image 2',
//     },

//   ],
//   section2: [
//     {
//       url: require('./path/to/section2/image1.jpg'),
//       alt: 'Alt Text for Section 2 - Image 1',
//     },
//     {
//       url: require('./path/to/section2/image2.jpg'),
//       alt: 'Alt Text for Section 2 - Image 2',
//     },
//     // ... add other images for section2
//   ],
//   // ... add other sections
// };

// Method 2 in array
// const imageData = [
//   {
//     section: 'section1',
//     images: [
//       {
//         url: require('./path/to/section1/image1.jpg'),
//         alt: 'Alt Text for Section 1 - Image 1',
//       },
//       {
//         url: require('./path/to/section1/image2.jpg'),
//         alt: 'Alt Text for Section 1 - Image 2',
//       },
//       // ... add other images for section1
//     ],
//   },
//   {
//     section: 'section2',
//     images: [
//       {
//         url: require('./path/to/section2/image1.jpg'),
//         alt: 'Alt Text for Section 2 - Image 1',
//       },
//       {
//         url: require('./path/to/section2/image2.jpg'),
//         alt: 'Alt Text for Section 2 - Image 2',
//       },
//       // ... add other images for section2
//     ],
//   },
//   // ... add other sections
// ];

// #### Method 2

// export default {
//   logo: {
//     alt: "noc-logo",
//     logoImage: require("../assets/images/logo.png"),
//   },
// };
