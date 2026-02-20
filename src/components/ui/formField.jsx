import React from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

export const FormField = ({ label, type = "text", rows = 1, className, ...props }) => {
  const baseClasses =
    "p-3 rounded-xl bg-white/10 text-white placeholder-gray-300 w-full transition focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500";

  return (
    <div className="flex flex-col gap-2 w-full">
      {label && <label className="text-white/80">{label}</label>}

      {type === "textarea" ? (
        <motion.textarea
          rows={rows}
          className={cn(baseClasses, className)}
          whileFocus={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          {...props}
        />
      ) : (
        <motion.input
          type={type}
          className={cn(baseClasses, className)}
          whileFocus={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          {...props}
        />
      )}
    </div>
  );
};
