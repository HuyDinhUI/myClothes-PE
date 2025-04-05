import RateSnapshot from "./RateSnapshot";
import RatingSize from "./RateSnapshot/HoverRating";
import HoverRating from "./RateSnapshot/HoverRating";
import styles from "./Reviews.module.scss";
import HalfRating from "../../../HalfRating/index";

const Reviews = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Reviews</h2>
        <div className={styles.content}>
          <div className={styles["Rate-Overview"]}>
            <div className={styles["Rate-Snapshot"]}>
              <h4 className={styles["Rate-Snapshot--title"]}>
                Rating Snapshot
              </h4>
              <RateSnapshot title={"5 stars"} value={76} total={825} />
              <RateSnapshot title={"4 stars"} value={76} total={825} />
              <RateSnapshot title={"3 stars"} value={76} total={825} />
              <RateSnapshot title={"2 stars"} value={76} total={825} />
              <RateSnapshot title={"1 stars"} value={76} total={825} />
            </div>
            <div className={styles["Rate-Overall"]}>
              <h4 className={styles["Rate-Overall--title"]}>Overall Rating</h4>
              <p className={styles["Rate-Overall--value"]}>4.5</p>
              <HalfRating />
              <p className={styles["Rate-Overall--reviews"]}>1025 reviews</p>
            </div>
            <div className={styles["Rate-Action"]}>
              <h4 className={styles["Rate-Action--title"]}>
                Review this product
              </h4>
              <HoverRating />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
