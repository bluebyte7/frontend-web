function fullScreen()
{
  if (screenfull.enabled) {
  	screenfull.request();
  }
}

document.getElementById("fullBtn").addEventListener("click", fullScreen);
\
