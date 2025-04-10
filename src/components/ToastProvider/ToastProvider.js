import React from "react";
import ToastShelf from "../ToastShelf";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  const closeToast = (id) => {
    const newToasts = toasts.filter((toast) => toast.id !== id);
    setToasts(newToasts);
  };

  const addToast = ({ type, message }) => {
    setToasts([...toasts, { id: crypto.randomUUID(), type, message }]);
  };

  return (
    <ToastContext.Provider value={{ addToast }}>
      <ToastShelf toasts={toasts} onCloseToast={closeToast} />
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
