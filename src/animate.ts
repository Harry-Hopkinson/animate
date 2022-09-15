import throttle from "lodash.throttle";
import debounce from "lodash.debounce";

let $aosElements: any = [];
let initialized = false;
const checkScroll = function checkScroll() {
  if (initialized) {
    $aosElements.forEach((element: any) => {
      if (element.isVisible()) {
        element.addClass("aos-animate");
      }
    });
  }
};

const initializeScroll = function initializeScroll() {
  window.addEventListener("scroll", throttle(checkScroll, 20));

  return $aosElements;
};

const refresh = function refresh(initialize = false) {
  if (initialize) initialized = true;
  if (initialized) initializeScroll();
};
