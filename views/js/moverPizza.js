onmessage= function (event) {
  console.log("Begin moverPizza function");
  /*
  var items = document.querySelectorAll('.mover');*/
//  var items=JSON.parse(event.data.items);
  console.log("item array=" + event.data.items);
  var phase;
  var scrollTop=event.data.scrollTop;
  console.log("items=" + event.data.items + "scrollTop=" + event.data.scrollTop);
  for (var i = 0; i < items.length; i++) {
    phase = Math.sin((scrollTop / 1250) + (i % 5));
    items[i].style.left = items[i].basicLeft + 100 * phase + 'px';
  }
  console.log("Posting items to main");
  postMessage({msg:"all done"});
  console.log("End moverPizza function");
};
