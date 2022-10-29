import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} - Dynamic Title`;
  }, [title]);
};

export default useTitle;
