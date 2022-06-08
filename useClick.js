const useClick = (onClick) => {
  const element = useRef();
  useEffect(() => {
    //componentDidMount
    if (element.current) {
      element.current.addEventListener("click", onClick);
    }
    //componentWillUnmont
    return () => {
      if (element.current) {
        element.current.removeEventListener("click", onClick);
      }
    };
  }, [onClick]);
  if (typeof onClick !== "function") {
    return;
  }
  return element;
};
