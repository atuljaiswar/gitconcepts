const throttle = (cb, delay) => {
  let timer = null;
  // throttle flag
  let throttle = false;
  return (...args) => {
    if (!throttle) {
      cb(...args);
      throttle = true;
      // this will make to call after 1 sec
      timer = setTimeout(() => {
        throttle = false;
      }, delay);
    }
  };
};

const handleScroll = (args) => {
  console.log('HIITED', args);
};
//testing
const throttleVersion = throttle(handleScroll, 1000);
document.addEventListener('scroll', () => {
  throttleVersion('test');
});
