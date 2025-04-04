import { useState } from "react";
import styles from "./product.module.scss";
import {
  CartIcon,
  StarIcon,
} from "@bitcoin-design/bitcoin-icons-react/outline";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

const product = {
  id: "MH001",
  name: "T-Shirt White Color",
  img: "https://i.imgur.com/sv6NPpI.jpg",
  listImg: [
    "https://i.imgur.com/sv6NPpI.jpg",
    "https://i.imgur.com/lT0mttW.jpg",
    "https://i.imgur.com/2dT8iYD.jpg",
    "https://i.imgur.com/sv6NPpI.jpg",
    "https://i.imgur.com/sv6NPpI.jpg",
  ],
  priceOld: 9.0,
  priceNew: 8.9,
  sizes: ["S", "M", "L", "XL"],
  colors: [
    {
      title: "White",
      codeColor: "--white",
    },
    {
      title: "Black",
      codeColor: "--black",
    },
  ],
  category: "T-Shirt",
  detail: {
    des: "Achieve the perfect blend of casual and stylish with this trendy streetwear outfit. Featuring a classic blue denim jacket layered over a simple white tee, this look is effortlessly cool. The oversized white wide-leg pants offer both comfort and a modern edge, while the black and white sneakers complete the ensemble with a touch of retro charm. A crossbody bag and a unique two-tone cap tucked into the pocket add functional yet fashionable details. Ideal for urban explorers who appreciate comfort and style in equal measure.",
    detailProduct:
      "This image showcases a stylish and trendy outfit featuring a mix of casual and streetwear elements. The ensemble consists of a blue denim jacket layered over a white t-shirt, paired with wide-leg white pants. The denim jacket, made from sturdy cotton fabric, gives off a classic and timeless vibe, while the oversized fit adds a modern touch.The white pants, likely crafted from denim or cotton blend, provide a clean and fresh contrast against the blue jacket. Their wide-leg cut enhances comfort and aligns with the relaxed, contemporary streetwear aesthetic.Completing the look, the individual is wearing black-and-white Converse sneakers, adding a retro and versatile element to the outfit. A navy blue cap with embroidered text is casually tucked into the pocket, reinforcing the laid-back, effortlessly cool style. The black crossbody bag, worn diagonally across the torso, adds a practical yet stylish accessory, perfect for an urban setting.Overall, this outfit embodies a casual, youthful, and fashion-forward streetwear style, blending vintage denim with modern oversized silhouettes. The neutral color palette of blue, white, and black ensures a balanced and timeless appearance.",
  },
};

const Product = () => {
  const [imgCenter, setImgCenter] = useState(product.listImg[0]);
  const [amountProduct, setAmountProduct] = useState(0);
  const [defaultDes, setDefaultDdes] = useState(true);
  const [size, setSize] = useState();
  const [color, setColor] = useState();
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.router}></div>
          {/*================ INFO =================*/}
          <div className={styles["info"]}>
            {/*================ INFO MAIN =================*/}
            {/*================ INFO MAIN =================*/}
            {/*================ INFO MAIN =================*/}
            {/*================ INFO MAIN =================*/}
            <div className={styles["info-main"]}>
              <div className={styles["info-main--img"]}>
                <div className={styles["img-slides"]}>
                  {product.listImg.map((img, index) => {
                    return (
                      <div
                        onClick={() => setImgCenter(img)}
                        className={styles["img-slides-item"]}
                      >
                        <img src={img}></img>
                      </div>
                    );
                  })}
                </div>
                <div className={styles["img-center"]}>
                  <div className={styles["img-center--item"]}>
                    <img src={imgCenter}></img>
                  </div>
                </div>
              </div>
              <div className={styles["info-main--actions"]}>
                <h2 className={styles["info-title"]}>{product.name}</h2>
                {/* <div className={styles["action-like"]}>
                  <FontAwesomeIcon icon={faHeart}/>
                </div> */}
                <div className={styles["rank"]}>
                  <div className={styles.star}>
                    <StarIcon />
                  </div>
                  <div className={styles.star}>
                    <StarIcon />
                  </div>
                  <div className={styles.star}>
                    <StarIcon />
                  </div>
                  <div className={styles.star}>
                    <StarIcon />
                  </div>
                  <div className={styles.star}>
                    <StarIcon />
                  </div>
                </div>
                <div className={styles.prices}>
                  <p className={styles.priceOld}>
                    {product.priceOld.toFixed(2)} USD
                  </p>
                  <p className={styles.priceNew}>
                    {product.priceNew.toFixed(2)} USD
                  </p>
                </div>
                <div
                  onClick={() => setDefaultDdes(!defaultDes)}
                  style={
                    defaultDes
                      ? {
                          height: "90px",
                          textAlign: "justify",
                          display: "-webkit-box",
                          WebkitLineClamp: "4",
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                        }
                      : {}
                  }
                  className={styles["info-des"]}
                >
                  <p>{product.detail.des}</p>
                </div>
                <div className={styles["options-type"]}>
                  <div className={styles["options-size"]}>
                    {product.sizes.map((s, i) => {
                      return (
                        <div
                          style={size === s ? { transform: "scale(0.7)" } : {}}
                          onClick={() => setSize(s)}
                          className={styles["size-btn"]}
                        >
                          <p>{s}</p>
                        </div>
                      );
                    })}
                  </div>
                  <div className={styles["options-color"]}>
                    {product.colors.map((c, i) => {
                      return (
                        <div
                          onClick={() => setColor(c)}
                          style={
                            color === c
                              ? {
                                  transform: "scale(0.7)",
                                  backgroundColor: `var(${c.codeColor})`,
                                }
                              : { backgroundColor: `var(${c.codeColor})` }
                          }
                          className={styles["color-btn"]}
                        ></div>
                      );
                    })}
                  </div>
                </div>

                <div className={styles["quantity-product"]}>
                  <div className={styles["amount-product"]}>
                    <button
                      disabled={amountProduct < 1}
                      onClick={() => setAmountProduct(amountProduct - 1)}
                    >
                      -
                    </button>
                    <div>
                      <p>{amountProduct}</p>
                    </div>
                    <button
                      disabled={amountProduct > 99}
                      onClick={() => setAmountProduct(amountProduct + 1)}
                    >
                      +
                    </button>
                  </div>
                  <div className={styles["add-to-cart"]}>
                    <div className={styles["icon-cart"]}>
                      <CartIcon />
                    </div>
                    <p>Add to cart</p>
                  </div>
                </div>
              </div>
            </div>
            {/*================ END INFO MAIN =================*/}
            {/*================ END INFO MAIN =================*/}

            {/*================ INFO OVERVIEW =================*/}
            {/*================ INFO OVERVIEW =================*/}
            {/*================ INFO OVERVIEW =================*/}
            {/*================ INFO OVERVIEW =================*/}
            <div className={styles["info-overview"]}>
              <div className={styles["info-overview--title"]}>
                <h2>Overview</h2>
              </div>
              <div className={styles["info-overview--detail"]}>
                <h3>Product detail</h3>
                <p>{product.detail.detailProduct}</p>
              </div>
              <div className={styles.highlights}>
                <h3>Highlights</h3>
                <div className={styles["info-more--detail"]}>
                  <table className={styles["table-info-detail"]}>
                    <tr>
                      <th>style</th>
                      <th>season</th>
                      <th>style-sleeve</th>
                      <th>material</th>
                    </tr>
                    <tr>
                      <td>Asian, Minalist, Stylish</td>
                      <td>Summer</td>
                      <td>Short</td>
                      <td>Cotton</td>
                    </tr>
                  </table>
                </div>
                <div className={styles["info-more--size"]}>
                  <table className={styles["table-guide-size"]}>
                    <tr>
                      <th>size</th>
                      <th>length</th>
                      <th>waist</th>
                      <th>height</th>
                      <th>weight</th>
                    </tr>
                    <tr>
                      <td>M</td>
                      <td>69cm</td>
                      <td>106cm</td>
                      <td>1m58-1m64</td>
                      <td>48-55kg</td>
                    </tr>
                    <tr>
                      <td>L</td>
                      <td>71cm</td>
                      <td>110cm</td>
                      <td>1m64-1m70</td>
                      <td>55-65kg</td>
                    </tr>
                    <tr>
                      <td>XL</td>
                      <td>73cm</td>
                      <td>114cm</td>
                      <td> {`<`}1m75</td>
                      <td>65-73kg</td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
            {/*================ END INFO OVERVIEW =================*/}
            {/*================ END INFO OVERVIEW =================*/}

            {/*================ OUTFIT GUIDE =================*/}
            {/*================ OUTFIT GUIDE =================*/}
            {/*================ OUTFIT GUIDE =================*/}
            {/*================ OUTFIT GUIDE =================*/}

            <div className={styles["product-guide"]}>
              <div className={styles["product-guide--slides"]}>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
