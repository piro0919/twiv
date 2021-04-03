import React, { FC } from "react";
import { AiFillHome } from "react-icons/ai";
import {
  SiAmazon,
  SiInstagram,
  SiPixiv,
  SiTwitter,
  SiYoutube,
} from "react-icons/si";
import styles from "./style.module.scss";
import FavoriteButton from "components/atoms/FavoriteButton";
import TweetButton from "components/atoms/TweetButton";

const ComicsDetail: FC = () => (
  <div>
    <div className={styles.topWrapper}>
      <h2>【創作】合コンに行ったら女がいなかった話</h2>
      <div className={styles.buttonsWrapper}>
        <TweetButton />
        <FavoriteButton />
      </div>
    </div>
    <hr className={styles.hr} />
    <div className={styles.userWrapper}>
      <div className={styles.userImageWrapper}>
        <img
          alt="user"
          className={styles.userImage}
          src="/hoge/yyc59uLA_400x400.jpg"
        />
      </div>
      <div className={styles.userName}>蒼川なな</div>
      <div className={styles.snsWrapper}>
        <SiTwitter color="#00aced" size={20} />
        <SiPixiv color="#0096fa" size={20} />
        <SiInstagram color="#f43362" size={20} />
        <SiYoutube color="#ff0000" size={20} />
        <SiAmazon color="#ff9800" size={20} />
        <AiFillHome color="#6b6b6b" size={20} />
      </div>
    </div>
  </div>
);

export default ComicsDetail;
