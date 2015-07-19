onmessage= function (items,scrollTop) {
  console.log("Begin moverPizza function");
  var phase;
  for (var i = 0; i < items.length; i++) {
    phase = Math.sin((scrollTop / 1250) + (i % 5));
    items[i].style.left = items[i].basicLeft + 100 * phase + 'px';
  }
  console.log("Posting items to main");
  postMessage(items);
  console.log("End moverPizza function");
}
