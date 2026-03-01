import React from "react";
import { motion } from "framer-motion";

const ErrorFallback = ({ error, resetErrorBoundary }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    style={{
      minHeight: "60vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
    }}
  >
    <h1>Something went wrong</h1>
    <p>
      {error?.message ||
        "An unexpected error occurred. Please try again later."}
    </p>
    {resetErrorBoundary && (
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, delay: 0.2 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={resetErrorBoundary}
        style={{
          padding: "0.5rem 1.5rem",
          background: "#457b9d",
          color: "#fff",
          border: "none",
          borderRadius: 4,
          marginTop: 16,
          cursor: "pointer",
        }}
      >
        Try Again
      </motion.button>
    )}
  </motion.div>
);

export default ErrorFallback;
