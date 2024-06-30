const throttle = (cb, delay) => {
  let timer = null;
  let throttle = false;
  return () => {
    if (!throttle) {
      cb();
      throttle = true;
      timer = setTimeout(() => {
        throttle = false;
      }, delay);
    }
  };
};
const handleScroll = () => {
  console.log('HIITED');
};
const throttleVersion = throttle(handleScroll, 1000);
document.addEventListener('scroll', throttleVersion);
