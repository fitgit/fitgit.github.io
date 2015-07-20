#Part 1: Optimize PageSpeed Insights score.
##To run the optimize pageSpeed Insights,
1. Click on https://developers.google.com/speed/pagespeed/insights, Type in the url, http://fitgit.github.io in the input area and click on analyze.
##index.html
1. Minifyed index.html,css and Javascripts. In-line comments are in commentedIndex.html for reference.
2. In-lined the style.css, so as to take it out of the CRP.
3. Changed loading of google font from CDN to WebFont loader.<br>
      <!--link href="//fonts.googleapis.com/css?family=Open+Sans:400,700" rel="stylesheet" -->
4. Added media of print to remove print.css loading out of the CRP.
5. Made perfmatters.js async, as it is analysing performance.
6. Reduced the image size of profilePic*png to profilePicOrig*png appropriate for display.<br>Profile pictures were updated on all other htmls.
7. Reduced the image size  of Pizzeria.jpg to PizzeriaRed.jpg corresponding to the display.<br>
      img style="width: 100px;" src="views/images/pizzeriaRed.jpg"
8. Moved the analytics to the end, before the end-body tag,so that text rendering is not blocked

#Part 2: Optimize to 60 Frames per Second.
##To run the optimize to 60FPS code,
1.  click on http://fitgit.github.io/views/pizza.html. Open the developer tools, click on the timeline tab.
2.  click on the record button, scroll the page and stop recording.
3.  Look for the frame which starts with eventScroll(javascript in yellow). This should be below the 60 FPS line to meet the specifications.
   
##views/css

1. Added backface-visisblity to style.css, to have pizza in its own layer .<br>
   -webkit-backface-visibility: hidden; .<br>
    backface-visibility: hidden; .<br>
2. commented the width in the mover class, as the size of the image was manually reduced to 75 x 100px..<br>
    /*width: 256px;*/

##views/pizza.html

1. Reduced the natural pizzeria.jpg(pizzeriaRed.jpg) to a size appropriate for display.Changed the size in images dir
   img src="images/pizzeriaRed.jpg" class="img-responsive" 
2. Made 2 copies of pizza.png, in the images.<br>
    First for foreground pizza(randomPizza.png) who's max display on img-responsive is 165 x 213, so reduced the size ideal      for display. Then changed the pizza.html to below.<br>
      src="images/randomPizza.png" class="img-responsive.<br>
    Second copy for the background pizza(pizza.png) reduced to display size of 73 x 100px in the images dir.
3.  Did not minify html or css for readability(as CRP was not relevant for this part of the project).              

##views/js/main.js

1.  Changed changePizzaSizes function having the line with document.querySelectorAll()<br> to<br> document.getElementsByClassName().<br>Changed computing of randomPizza NodeList repeatedly in the loop, by taking it out. Also moved variable declaration outside the loop for better GC.
2.  Moved computing of scrollTop/1250 outside the loop as its a constant.<br>Moved declaration of the var phase out of the       fo loop to reduce garbage collection.<br>
    Changed the line below adding css3 transforms.<br>
    items[i].style.left = items[i].basicLeft + 100 * phase + 'px'; <br>
    to<br>
    lt = -items[i].basicLeft + 1000 * phase + 'px';<br>
    items[i].style.transform = "translateX("+lt+") translateZ(0)";<br>
    
3. Changed the # of pizza imgs to 32 from 200.
4. Commented the code below, since I have reduced the size of background pizza manually.<br>
   /* elem.style.height = "100px";<br>
    elem.style.width = "73.333px"; */<br>
5.  Note:Please igngore the  moverPizza.js , which has the webworker code, for moving the for loop in updatePositions to a       worker. Which I tried to implement, but was not bettering the performance. I want to retain the code for future              reference.
