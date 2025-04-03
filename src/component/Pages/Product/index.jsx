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
  des: "Achieve the perfect blend of casual and stylish with this trendy streetwear outfit. Featuring a classic blue denim jacket layered over a simple white tee, this look is effortlessly cool. The oversized white wide-leg pants offer both comfort and a modern edge, while the black and white sneakers complete the ensemble with a touch of retro charm. A crossbody bag and a unique two-tone cap tucked into the pocket add functional yet fashionable details. Ideal for urban explorers who appreciate comfort and style in equal measure.",
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
          <div className={styles["info"]}>
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
                  <p>{product.des}</p>
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
            <div className={styles["info-more"]}>
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
        </div>
      </div>
    </div>
  );
};

export default Product;
