export interface rawProduct {
  id: string;
  name: string;
  size: string;
  brand: string;
  price: number;
  idealFor: string;
  img: string;
}

const allProducts = [
  {
    id: "001",
    name: "Save tress Half T-shirt",
    size: "M",
    brand: "Bewakoof",
    price: 299,
    idealFor: "Men",
    img: "https://images.bewakoof.com/t1080/save-trees-half-sleeve-t-shirt-navy-blue-286030-1655814191-1.jpg",
  },
  {
    id: "002",
    name: "The Mighty Meows Graphic Printed Half T-shirt",
    size: "XL",
    brand: "Bewakoof",
    price: 299,
    idealFor: "Women",
    img: "https://images.bewakoof.com/t1080/mighty-meows-boyfriend-t-shirt-515453-1656919884-1.jpg",
  },
  {
    id: "003",
    name: "Firm Blue Crew Neck Half T-shirt",
    size: "S",
    brand: "Damensch",
    price: 990,
    idealFor: "Men",
    img: "https://adn.damensch.com/wp-content/uploads/2021/04/Website-Back-4.jpg",
  },

  {
    id: "004",
    name: "Sunflower Pattern buttoned T-shirt",
    size: "M",
    brand: "The Souled Store",
    price: 1099,
    idealFor: "Women",
    img: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1654240171_5454560.jpg?format=webp&w=1080&dpr=1.2",
  },
  {
    id: "005",
    name: "Marvel Ant Man Black T-Shirts For Women",
    size: "S",
    brand: "Disney",
    price: 499,
    idealFor: "Women",
    img: "https://shopdisney.in/media/catalog/product/cache/dff98280ed764012eadfa777851316fd/f/e/femlteeantmanshrink2_2.jpg",
  },
  {
    id: "006",
    name: "Mickey Mouse Navy Blue Half T-shirt",
    size: "L",
    brand: "Disney",
    price: 599,
    idealFor: "Men",
    img: "https://shopdisney.in/media/catalog/product/cache/dff98280ed764012eadfa777851316fd/m/e/men_adults_hs_rn_ts_23_navyblue_1_1.jpg",
  },
];

export default allProducts;
