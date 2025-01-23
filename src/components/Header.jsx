import styles from "./Header.module.css";

import igniteLogo from "../assets/ignite-logo.svg";

export function Header() {
  return (
    <div className={styles.header}>
      <img alt="Logo do header" src={igniteLogo} />
      <strong> Ignite Feed</strong>
    </div>
  );
}
