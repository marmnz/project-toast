import React from "react";
import Toast from "../Toast";
import styles from "./ToastShelf.module.css";

function ToastShelf({ toasts, onCloseToast }) {
  return (
    <ol className={styles.wrapper}>
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
