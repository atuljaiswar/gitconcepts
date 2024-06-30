const throttle = (cb, delay) => {
  let timer = null;
  return () => {
    timer = setTimeout(cb, delay);
  };
};
const handleScroll = () => {
  console.log('HIITED');
};
const throttleVersion = throttle(handleScroll, 1000);
document.addEventListener('scroll', throttleVersion);
