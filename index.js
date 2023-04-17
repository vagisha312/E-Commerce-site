let clip=document.querySelector(".video")
clip.addEventListener("mouseover",function(e){
  clip.play();
})
clip.addEventListener("mouseout",function(e){
  clip.pause();
})




function setNewImage()
{
   document.getElementById("pic1").src="images/pic 21b.webp";
}
function setOldImage()
{
    document.getElementById("pic1").src="images/pic 21a.jfif";
}
function setNewImage1()
{
   document.getElementById("pic2").src="images/pic 22b.webp";
}
function setOldImage1()
{
    document.getElementById("pic2").src="images/pic 22a.jfif";
}
function setNewImage2()
{
   document.getElementById("pic3").src="images/pic 23b.webp";
}
function setOldImage2()
{
    document.getElementById("pic3").src="images/pic 23a.jfif";
}
function setNewImage3()
{
   document.getElementById("pic4").src="images/pic 24b.webp";
}
function setOldImage3()
{
    document.getElementById("pic4").src="images/pic 24a.jfif";
}