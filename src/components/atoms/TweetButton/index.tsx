import React, { FC } from "react";
import { TwitterShareButton, TwitterIcon } from "react-share";
import styles from "./style.module.scss";

const TweetButton: FC = () => (
  <TwitterShareButton
    hashtags={["【創作】合コンに行ったら女がいなかった話", "twiv"]}
    url="https://www.google.co.jp/"
  >
    <div className={styles.inner}>
      <TwitterIcon round={true} size={32} />
      <span className={styles.text}>ツイートする</span>
    </div>
  </TwitterShareButton>
);

export default TweetButton;
