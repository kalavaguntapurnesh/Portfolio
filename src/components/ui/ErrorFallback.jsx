import React from "react";

const ErrorFallback = ({ error, resetErrorBoundary }) => (
  <div
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
      <button
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
      </button>
    )}
  </div>
);

export default ErrorFallback;
