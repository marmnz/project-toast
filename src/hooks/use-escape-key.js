import React from "react";

export default useEscapeKey = (callback) => {
  React.useEffect(() => {
    const handleKeyup = (event) => {
      if (event.code === "Escape") {
        callback();
      }
    };

    window.document.addEventListener("keyup", handleKeyup);

    return () => {
      window.document.removeEventListener("keyup", handleKeyup);
    };
  }, [callback]);
};
