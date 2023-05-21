import { useEffect } from "react";
import styles from "../styles/LoaderOverlay.module.css";
import lottie from "lottie-web";

export default function LoaderOverlay() {
  useEffect(() => {
    const loaderOverlay = document.querySelector(".loader-overlay");
    setTimeout(() => {
      loaderOverlay?.classList.add("hidden");
    }, 4000);

    lottie.loadAnimation({
      container: document.getElementById("hashtag-animation") as Element,
      renderer: "svg",
      loop: false,
      autoplay: true,
      animationData: require("../public/assets/animations/hashtag.json"),
    });
  }, []);

  return (
    <div
      className={[
        "w-screen h-screen z-50 absolute bg-black flex items-center justify-center loader-overlay",
        styles.fadeOut,
      ].join(" ")}
    >
      <div id="hashtag-animation" className="w-full h-full max-w-[200px]" />
    </div>
  );
}
