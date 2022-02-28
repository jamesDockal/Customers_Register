import React, { createContext, CSSProperties, useContext } from "react";

import toast, { Toaster } from "react-hot-toast";

type Data = {
  createToast: (
    text: string,
    type: "error" | "loading" | "success",
    style?: CSSProperties
  ) => void;
  removeToast: () => void;
};

const ToastContext = createContext<Data>({} as Data);

export const ToastProvider: React.FC = ({ children }) => {
  function createToast(
    text: string,
    type: "error" | "loading" | "success",
    style: CSSProperties = {}
  ) {
    switch (type) {
      case "error":
        toast.error(text, {
          style,
        });
        break;

      case "loading":
        toast.loading(text, {
          style,
        });

        break;

      case "success":
        toast.success(text, {
          style,
        });
        break;

      default:
        break;
    }
  }

  function removeToast() {
    toast.remove();
  }

  return (
    <ToastContext.Provider value={{ createToast, removeToast }}>
      {children}
      <Toaster />
    </ToastContext.Provider>
  );
};

export const useToast = () => useContext(ToastContext);
