onmessage= function (event) {
  console.log("Begin moverPizza function");
  var items = document.querySelectorAll('.mover');
  var phase;
  var scrollTop=event.data.scrollTop;
  console.log("items=" + items.length + "scrollTop=" + event.scrollTop);
  for (var i = 0; i < items.length; i++) {
    phase = Math.sin((scrollTop / 1250) + (i % 5));
    items[i].style.left = items[i].basicLeft + 100 * phase + 'px';
  }
  console.log("Posting items to main");
  postMessage({msg:"all done"});
  console.log("End moverPizza function");
};
