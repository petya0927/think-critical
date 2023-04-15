import { useEffect } from "react";
import styles from "../styles/LoaderOverlay.module.css";

export default function LoaderOverlay() {
  useEffect(() => {
    const loaderOverlay = document.querySelector(".loader-overlay");
    loaderOverlay?.classList.add(styles.fadeOut);
    setTimeout(() => {
      loaderOverlay?.classList.add("hidden");
    }, 2000);
  }, []);
  return (
    <div
      className={
        "w-screen h-screen z-50 absolute bg-black flex items-center justify-center loader-overlay"
      }
    >
      <img src="./assets/images/logo.png" alt="" />
    </div>
  );
}
