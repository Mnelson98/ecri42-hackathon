document.addEventListener('DOMContentLoaded', function () {
  const img = document.createElement('img');
  console.log('img', img);
  img.setAttribute('src', 'https://c4.wallpaperflare.com/wallpaper/12/964/14/animals-australia-quokka-wallpaper-preview.jpg') 
  
  const node = document.querySelector('body');
  node.append(img)
  console.log('node', node);
  
  const pageTitle = document.title;
  console.log('Page title:', pageTitle);
});