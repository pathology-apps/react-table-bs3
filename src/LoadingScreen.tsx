import React from "react";

interface LoadingScreenProps {
  loading?: boolean;
  loadingOffset?: number;
}

function LoadingScreen({
  loading,
  loadingOffset,
}: LoadingScreenProps): JSX.Element | null {
  if (!loading) {
    return null;
  }

  const className = `loading ${loading ? "progress" : ""}`;

  return (
    <div className={className} style={{ left: loadingOffset }}>
      <span>
        Loading
        <span className="one">.</span>
        <span className="two">.</span>
        <span className="three">.</span>
      </span>
    </div>
  );
}

export default LoadingScreen;
