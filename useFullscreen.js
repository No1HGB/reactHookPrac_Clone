const useFullscreen = () => {
  const element = useRef();
  const triggerFull = () => {
    // func name is different as to Browser
    if (element.current) {
      //Chrome
      if (element.current.requestFullscreen) {
        element.current.requestFullscreen();
        //Firefox
      } else if (element.current.mozRequestFullscreen) {
        element.current.mozRequestFullscreen();
        //Opera
      } else if (element.current.webkitRequestFullscreen) {
        element.current.webkitRequestFullscreen();
        //Ms edge
      } else if (element.current.webkitRequestFullscreen) {
        element.current.webkitRequestFullscreen();
      }
    }
  };
  return { element, triggerFull };
};
