import { useState, useRef, useEffect } from "react";

const useToast = () => {

  const [toasts, setToasts] = useState([]);
  const timers = useRef({});

  const addToast = (message, type = "info", duration = 3000) => {

    const id = crypto.randomUUID();

    setToasts(prev => [...prev, { id, message, type }]);

    timers.current[id] = setTimeout(() => {
      removeToast(id);
    }, duration);

  };

  const removeToast = (id) => {

    setToasts(prev => prev.filter(t => t.id !== id));

    if (timers.current[id]) {
      clearTimeout(timers.current[id]);
      delete timers.current[id];
    }

  };

  useEffect(() => {
    return () => {
      Object.values(timers.current).forEach(timer => clearTimeout(timer));
    };
  }, []);

  return {
    toasts,
    addToast,
    removeToast
  };

};

export default useToast;