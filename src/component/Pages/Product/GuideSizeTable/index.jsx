import styles from "./GuideSizeTable.module.scss";

const GuideSizeTable = () => {
  return (
    <>
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
    </>
  );
};

export default GuideSizeTable;
