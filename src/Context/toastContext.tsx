import React, { createContext, CSSProperties, useContext } from "react";

import toast, { Toaster } from "react-hot-toast";

type Data = {
  createToast: (
    text: string,
    type: "error" | "success",
    style?: CSSProperties
  ) => void;

  loadToast: (func: Function, data?: any) => void;
};

const ToastContext = createContext<Data>({} as Data);

export const ToastProvider: React.FC = ({ children }) => {
  function createToast(
    text: string,
    type: "error" | "success",
    style: CSSProperties = {}
  ) {
    switch (type) {
      case "error":
        toast.error(text, {
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

  function loadToast(func: Function, data?: any) {
    toast.promise(func(data), {
      loading: "Saving...",
      success: <b>Saved with success!</b>,
      error: <b>An error has occurred!</b>,
    });
  }

  return (
    <ToastContext.Provider value={{ createToast, loadToast }}>
      {children}
      <Toaster />
    </ToastContext.Provider>
  );
};

export const useToast = () => useContext(ToastContext);
