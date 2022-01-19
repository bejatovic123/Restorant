/* eslint-disable react/display-name */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from "react";
import { GridLoader } from "react-spinners";

export const WithLoader = (Component) => {
  return () => {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => setTimeout(() => setIsLoading(false), 2000), []);

    if (isLoading) {
      return (
        <div className="loader">
          <GridLoader color="#75a1da" />
        </div>
      );
    }
    return <Component />;
  };
};
