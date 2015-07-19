onmessage= function (event) {
  console.log("Begin moverPizza function");
  /*
  var items = document.querySelectorAll('.mover');*/

  //console.log("item array=" + event.data.items);
  console.log("items=" + event.data.items + "typeof=" + typeof(event.data.items) + "scrollTop=" + event.data.scrollTop);
  var items=JSON.parse(event.data.items);
   console.log("items after parse=" + items.toString());
  var phase;
  var scrollTop=event.data.scrollTop;
  
  for (var i = 0; i < items.length; i++) {
    phase = Math.sin((scrollTop / 1250) + (i % 5));
    items[i].left = items[i].basicLeft + 100 * phase + 'px';
  }
  console.log("Posting items to main" +JSON.stringify(items));
  var msgBack={"leftifiedItem":JSON.stringify(items)};
  postMessage(msgBack);
  console.log("End moverPizza function");
};
