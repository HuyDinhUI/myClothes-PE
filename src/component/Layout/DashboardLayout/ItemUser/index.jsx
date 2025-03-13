import { useState } from "react";
import styles from "./itemuser.module.scss";
import {HomeIcon,ContactsIcon,TransferIcon, CartIcon,TagIcon,GearIcon,ExitIcon} from '@bitcoin-design/bitcoin-icons-react/outline';

const Item = [
  {
    title: "Home",
    icon: <HomeIcon/>,
  },
  {
    title: "Info",
    icon: <ContactsIcon/>,
  },
  {
    title: "Cart",
    icon: <CartIcon/>,
  },
  {
    title: "Orders",
    icon: <TransferIcon/>,
  },
  {
    title: "Vouchers",
    icon: <TagIcon/>,
  },
  {
    title: "Setting",
    icon: <GearIcon/>,
  },
  {
    title: "Log out",
    icon: <ExitIcon/>
  },
];
const ItemUser = () => {
  const [type,setType] = useState('Info')
  return (
    <div className={styles["item-user"]}>
      {/* <div className={styles.avatar}>
        <img
          src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/ff832a9b10986dd21cefbad621a3ca91~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=14579&refresh_token=e123a42d&x-expires=1742029200&x-signature=wwPrk1Xf7FuuHwJsBwyQZ90diQo%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=my2"
          className={styles["avatar-img"]}
        ></img>
      </div> */}
      {Item.map((item, index) => {
        return (
          <button style={type === item.title ? {
            color:'var(--white)',
            backgroundColor:'black'
          }:{}} onClick={() => setType(item.title)} key={index} className={styles["btn-item"]}>
            <div className={styles.icon}>{item.icon}</div>
            <p className={styles.title}>{item.title}</p>
          </button>
        );
      })}
    </div>
  );
};

export default ItemUser;
