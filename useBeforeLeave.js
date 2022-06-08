const useBeforeLeave = (onBefore) => {
  const handle = () => {
    onBefore();
  };
  useEffect(() => {
    document.addEventListener("mouseleave", handle);
    return () => document.removeEventListener("mouseleave", handle);
  }, [onBefore]);
  if (typeof onBefore !== "function") {
    return;
  }
};
