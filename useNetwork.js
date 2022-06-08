const useNetwork = (onChange) => {
  const [status, setStatus] = useState(navigator.onLine);
  const handleChange = () => {
    if (typeof onChange === "function") {
      onChange(navigator.onLine);
    }
    setStatus(navigator.onLine);
  };
  useEffect(() => {
    window.addEventListener("online", handleChange);
    window.addEventListener("offline", handleChange);
    const cleanUp = () => {
      window.removeEventListener("online", handleChange);
      window.removeEventListener("offline", handleChange);
    };
    cleanUp();
  }, []);
  return status;
};
