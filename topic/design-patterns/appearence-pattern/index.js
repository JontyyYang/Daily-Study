var N = window.N || {};

N.tools = {
  stopPropagation: function (e) {
    if (e.stopPropagation) {
      e.stopPropagation();
    } else {
      e.cancelBubble = true;
    }
  },

  preventDefault: function (e) {
    if (e.preventDefault) {
      e.preventDefault();
    } else {
      e.returnValue = false;
    }
  },

  stopEvent: function (e) {
    N.tools.stopPropagation(e);
    N.tools.preventDefault(e);
  },
};
