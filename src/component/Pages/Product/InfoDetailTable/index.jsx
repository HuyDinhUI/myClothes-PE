import styles from "./InfoDetailTable.module.scss";

const InfoDetailTable = () => {
  return (
    <>
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
    </>
  );
};

export default InfoDetailTable
