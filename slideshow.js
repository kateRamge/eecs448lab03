//lots of help from  https://www.wired.com/2010/02/make_a_javascript_slideshow/
//but my code doesn't work and I want to die so that's great news
var random_display=0;
var imageNum=0;
imageArray = new Array();
imageArray[imageNum++] = new imageItem("http://www.proflowers.com/blog/wp-content/uploads/2012/08/white-roses-120823-thumb-new-2.jpg");
imageArray[imageNum++] = new imageItem("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8HbZpleze7Va2PvOEYiuPfRY4risQxULD-nspfrJ8z8WNdq5W6A");
imageArray[imageNum++] = new imageItem("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIv5F4uWmnHmu6BXUvVGDiWvt1CgnVgPIXqeB6dymtI890KKnf");
imageArray[imageNum++] = new imageItem("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi1BsXGR_Ox9buxcwWJLMsVKsL-OCu009UUta8GogkWkRYd-01");
imageArray[imageNum++] = new imageItem("https://i5.walmartimages.com/asr/8410c75a-6741-407c-b485-d2eed9b5f077_1.8875714c666dd43ec0d4757e1e07c8b8.jpeg?odnHeight=180&odnWidth=180&odnBg=FFFFFF");
var numImages = imageArray.length;
function nextPic() {
  imageNum = (imageNum+1)%numImages;
  var nextImage = imageLocation(imageArray[imageNum]);
  return nextImage;
}

function imageItem(imageloc) {
  this.image_item = new Image();
  this.image_item.src = imageloc;
}
function imageLocation(imageObj) {
  return(imageObj.image_item.src);
}

function showNext(place) {
  var newImage = nextPic();
  document[place].src = newImage;
}
