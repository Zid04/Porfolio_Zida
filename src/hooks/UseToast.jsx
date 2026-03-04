import { useState, useRef, useEffect } from "react";

const useToast = () => {
  const [toasts, setToasts] = useState([]);
  const timers = useRef({});

  const addToast = (message, type = "info") => {
    const id = crypto.randomUUID(); // ✔️ Fonction pure et stable

    setToasts(prev => [...prev, { id, message, type }]);

    timers.current[id] = setTimeout(() => {
      removeToast(id);
    }, 3000);
  };

  const removeToast = (id) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));

    if (timers.current[id]) {
      clearTimeout(timers.current[id]);
      delete timers.current[id];
    }
  };

  useEffect(() => {
    return () => {
      Object.values(timers.current).forEach(clearTimeout);
    };
  }, []);

  return { toasts, addToast, removeToast };
};

export default useToast;
