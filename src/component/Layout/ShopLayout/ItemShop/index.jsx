import { useContext, useState } from "react";
import styles from "./ItemShop.module.scss";
import {
  SearchIcon,
  TransactionsIcon,
} from "@bitcoin-design/bitcoin-icons-react/outline";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPalette, faList } from "@fortawesome/free-solid-svg-icons";
import { FilterContext } from "../../../../utils/FilterContext";
const category = [
  {
    title: "T-Shirt",
    value: "tshirt",
  },
  {
    title: "Pants",
    value: "pants",
  },
  {
    title: "Shoes",
    value: "shoes",
  },
  {
    title: "Spares",
    value: "spares",
  },
];

const color = [
  {
    title: "White",
    value: "white",
    codeColor: "--white",
  },
  {
    title: "Black",
    value: "black",
    codeColor: "--black",
  },
  {
    title: "Dark Blue",
    value: "blue",
    codeColor: "--dark-blue",
  },
  {
    title: "Begie",
    value: "begie",
    codeColor: "--begie",
  },
];

const ItemShop = () => {
  const [checked, setChecked] = useState([]);
  const { Content, setContent } = useContext(FilterContext);
  const { Cate, setCate } = useContext(FilterContext);

  const handleCategoryChange = (category) => {
    setCate((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };


  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.search}>
          <input
            className={styles["search-input"]}
            placeholder="Search"
            onChange={(e) => setContent(e.target.value)}
          ></input>
        </div>
        <div className={styles.content}>
          <div className={styles.filter}>
            <div className={styles.category}>
              <div className={styles.title}>
                <div className={styles.icon}>
                  <FontAwesomeIcon icon={faList} />
                </div>
                <h3>Category</h3>
              </div>
              <div className={styles["category-group"]}>
                {category.map((cate, index) => {
                  return (
                    <label
                      style={
                        checked.find((ch) => ch === cate.value)
                          ? {
                              backgroundColor: "var(--begie)",
                              color: "var(--white)",
                            }
                          : {}
                      }
                      className={styles["input-group"]}
                    >
                      <input
                        style={{ accentColor: "var(--white)" }}
                        type="checkbox"
                        value={cate.value}
                        onChange={(e) => {
                          setChecked(
                            e.target.checked
                              ? [...checked, cate.value]
                              : checked.filter((ch) => ch != cate.value)
                          );
                          handleCategoryChange(cate.title)

                        }}
                      ></input>
                      <span>{cate.title}</span>
                      
                    </label>
                  );
                })}
              </div>
            </div>
            <div className={styles.color}>
              <div className={styles.title}>
                <div className={styles.icon}>
                  <FontAwesomeIcon icon={faPalette} />
                </div>
                <h3>Color</h3>
              </div>
              <div className={styles["color-group"]}>
                {color.map((cate, index) => {
                  return (
                    <label
                      style={
                        checked.find((ch) => ch === cate.value)
                          ? {
                              backgroundColor: `var(${cate.codeColor})`,
                              color: `var(${
                                cate.title === "White" ? "--black" : "--white"
                              })`,
                            }
                          : {}
                      }
                      className={styles["input-group"]}
                    >
                      <input
                        style={{ accentColor: "var(--white)" }}
                        type="checkbox"
                        value={cate.value}
                        onChange={(e) =>
                          setChecked(
                            e.target.checked
                              ? [...checked, cate.value]
                              : checked.filter((ch) => ch != cate.value)
                          )
                        }
                      ></input>
                      <span>{cate.title}</span>
                    </label>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemShop;
