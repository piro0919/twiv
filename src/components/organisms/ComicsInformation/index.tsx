import React, { FC } from "react";
import { AiFillAmazonCircle } from "react-icons/ai";
import styles from "./style.module.scss";

const ComicssInformation: FC = () => (
  <div>
    <div className={styles.topWrapper2}>
      <AiFillAmazonCircle color="#ff9900" size={20} />
      <h3>書籍情報</h3>
    </div>
    <hr className={styles.hr} />
    <a
      className={styles.link}
      href="https://www.amazon.co.jp/%E5%90%88%E3%82%B3%E3%83%B3%E3%81%AB%E8%A1%8C%E3%81%A3%E3%81%9F%E3%82%89%E5%A5%B3%E3%81%8C%E3%81%84%E3%81%AA%E3%81%8B%E3%81%A3%E3%81%9F%E8%A9%B1-1%E5%B7%BB-%E3%83%87%E3%82%B8%E3%82%BF%E3%83%AB%E7%89%88%E3%82%AC%E3%83%B3%E3%82%AC%E3%83%B3%E3%82%B3%E3%83%9F%E3%83%83%E3%82%AF%E3%82%B9ONLINE-%E8%92%BC%E5%B7%9D%E3%81%AA%E3%81%AA-ebook/dp/B08VD2DJH8?_encoding=UTF8&qid=&sr=&linkCode=li3&tag=piro09190c-22&linkId=62561e632c8ca5b291f250f7ad060971&language=ja_JP&ref_=as_li_ss_il"
      rel="noreferrer"
      target="_blank"
    >
      <img
        alt=""
        src="//ws-fe.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B08VD2DJH8&Format=_SL250_&ID=AsinImage&MarketPlace=JP&ServiceVersion=20070822&WS=1&tag=piro09190c-22&language=ja_JP"
      />
    </a>
    <img
      alt=""
      height="1"
      src="https://ir-jp.amazon-adsystem.com/e/ir?t=piro09190c-22&language=ja_JP&l=li3&o=9&a=B08VD2DJH8"
      width="1"
    />
    <a
      className={styles.link}
      href="https://amzn.to/2PGnBcp"
      rel="noreferrer"
      target="_blank"
    >
      合コンに行ったら女がいなかった話 1巻
    </a>
  </div>
);

export default ComicssInformation;
