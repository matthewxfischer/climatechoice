import React from "react";
import styles from "./styles.module.scss";
import GlobalStyles from "../../styles/Global.module.scss";

export default function SpreadMessageCTA() {
  return (
    <div className={GlobalStyles.inner}>
      <div className={styles.container}>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </div>
      </div>
    </div>
    //  a container with
    // two internal components: SpreadMessage & Social Container;
  );
}
