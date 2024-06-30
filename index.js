const throttle = (cb, delay) => {
  let timer = null;
  // throttle flag
  let throttle = false;
  return () => {
    if (!throttle) {
      cb();
      throttle = true;
      // this will make to call after 1 sec
      timer = setTimeout(() => {
        throttle = false;
      }, delay);
    }
  };
};
const handleScroll = () => {
  console.log('HIITED');
};
//testing
const throttleVersion = throttle(handleScroll, 1000);
document.addEventListener('scroll', throttleVersion);
