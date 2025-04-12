import React from "react";
import Toast from "../Toast";
import useEscapeKey from "../../hooks/use-escape-key";
import styles from "./ToastShelf.module.css";

function ToastShelf({ toasts, onCloseToast }) {
  useEscapeKey(() => onCloseToast(toasts[0].id));

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
