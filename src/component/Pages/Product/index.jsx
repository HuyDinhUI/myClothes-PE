import { useEffect, useState } from "react";
import styles from "./product.module.scss";
import {
  CartIcon,
  StarIcon,
  CaretRightIcon,
  CaretLeftIcon,
} from "@bitcoin-design/bitcoin-icons-react/outline";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";
import Reviews from "./Reviews";
import HalfRating from "../../HalfRating";
import GuideSizeTable from "./GuideSizeTable";
import InfoDetailTable from "./InfoDetailTable";

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

const OutfitGuideData = {
  id: "MH001" /* id product main */,
  listOutfit: [
    /* outfit 1 */
    {
      /* product main (t-shirt) */
      id: "MH001",
      img: "https://i.imgur.com/sv6NPpI.jpg",
    },
    {
      /* product guide (pants) */
      id: "MH002",
      img: "https://i.imgur.com/S4Ivj61.jpeg",
    },
    {
      /* product guide (shoes) */
      id: "MH003",
      img: "https://i.imgur.com/0Y5SMid.jpeg",
    },
    {
      /* product guide (spare) */
      id: "MH004",
      img: "https://i.imgur.com/tqzkB80.jpeg",
    },

    /* outfit 2 */
    {
      /* product main (t-shirt) */
      id: "MH001",
      img: "https://i.imgur.com/sv6NPpI.jpg",
    },
    {
      /* product guide (pants) */
      id: "MH002",
      img: "https://i.imgur.com/sv6NPpI.jpg",
    },
    {
      /* product guide (shoes) */
      id: "MH003",
      img: "https://i.imgur.com/sv6NPpI.jpg",
    },
    {
      /* product guide (spare) */
      id: "MH004",
      img: "https://i.imgur.com/sv6NPpI.jpg",
    },
  ],
};

const Product = () => {
  const [imgCenter, setImgCenter] = useState(product.listImg[0]);
  const [amountProduct, setAmountProduct] = useState(0);
  const [defaultDes, setDefaultDes] = useState(true);
  const [defaultDetail, setDefaultDetail] = useState(true);
  const [size, setSize] = useState();
  const [color, setColor] = useState();
  const [slideIndex, setSlideIndex] = useState(1);

  const RenderOutfitGuide = () => {
    return OutfitGuideData.listOutfit.map((o1, i1) => {
      console.log(OutfitGuideData.listOutfit.length / 4);
      if (i1 < OutfitGuideData.listOutfit.length / 4) {
        return (
          <div key={i1} className={styles.slide}>
            {OutfitGuideData.listOutfit.map((o2, i2) => {
              if (i2 < 4) {
                return (
                  <div key={i2} className={styles.block}>
                    <img
                      src={OutfitGuideData.listOutfit[i1 * 4 + i2].img}
                    ></img>
                    <button>
                      <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                    </button>
                  </div>
                );
              } else return;
            })}
          </div>
        );
      }
    });
  };

  useEffect(() => {
    const slides = document.querySelectorAll(`.${styles.slide}`);
    console.log(slides);
    console.log(slideIndex);
    if (slideIndex > slides.length) {
      setSlideIndex(1);
    }
    if (slideIndex < 1) {
      setSlideIndex(slides.length);
    }
    slides.forEach((slide) => {
      slide.style.transform = "translateX(-" + (slideIndex - 1) * 100 + "%)";
    });
  }, [slideIndex]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.router}></div>
          {/*================ INFO =================*/}
          {/*================ INFO =================*/}
          {/*================ INFO =================*/}
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
                  <HalfRating />
                  <p>4.5</p>
                  <p>{"(1025 reviews)"}</p>
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
                  onClick={() => setDefaultDes(!defaultDes)}
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
              <div
                onClick={() => setDefaultDetail(!defaultDetail)}
                style={
                  defaultDetail
                    ? {
                        height: "245px",
                        display: "-webkit-box",
                        WebkitLineClamp: "9",
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                      }
                    : {}
                }
                className={styles["info-overview--detail"]}
              >
                <h3>Product detail</h3>
                <p>{product.detail.detailProduct}</p>
              </div>
              <div className={styles.highlights}>
                <h3>Highlights</h3>
                <div className={styles["info-more--detail"]}>
                  <InfoDetailTable />
                </div>
                <div className={styles["info-more--size"]}>
                  <GuideSizeTable />
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
              <div className={styles["product-guide--title"]}>
                <h2>Outfit Guide</h2>
              </div>
              <div className={styles["product-guide--slides"]}>
                <RenderOutfitGuide />
                <button
                  onClick={() => {
                    setSlideIndex((prev) => prev - 1);
                  }}
                  className={styles.prev}
                >
                  <CaretLeftIcon />
                </button>
                <button
                  onClick={() => {
                    setSlideIndex((prev) => prev + 1);
                  }}
                  className={styles.next}
                >
                  <CaretRightIcon />
                </button>
              </div>
            </div>

            {/*================ END OUTFIT GUIDE =================*/}
            {/*================ END OUTFIT GUIDE =================*/}
          </div>

          {/*================ END INFO =================*/}
          {/*================ END INFO =================*/}

          {/*================ REVIEW =================*/}
          {/*================ REVIEW =================*/}
          {/*================ REVIEW =================*/}
          {/*================ REVIEW =================*/}

          <div className={styles.review}>
            <Reviews />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
