import React from "react";
import Toast from "../Toast";
import styles from "./ToastShelf.module.css";

function ToastShelf({ toasts, onCloseToast }) {
  React.useEffect(() => {
    const closeFirstToast = (event) => {
      if (event.code === "Escape") {
        onCloseToast(toasts[0].id);
      }
    };

    window.document.addEventListener("keyup", closeFirstToast);

    return () => {
      window.document.removeEventListener("keyup", closeFirstToast);
    };
  }, [toasts, onCloseToast]);

  return (
    <ol
      className={styles.wrapper}
      role="region"
      aria-live="polite"
      aria-label="Notification"
    >
      {toasts.map(({ id, type, message }) => (
        <li key={id} className={styles.toastWrapper}>
          <Toast type={type} onClose={() => onCloseToast(id)}>
            {message}
          </Toast>
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
