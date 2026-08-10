// Unsplash API
const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');
let photoArray = [];
const count = 30;
const apiKey = 'HZMnMuLTFF6IFwg4zTIJcpHwvHy89_RJDXfcpmPJUOA';
const apiUrl = `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=${count}`;

function displayPhoto() {
    photoArray.forEach((photo) => {
    const item = document.createElement('a');
        item.setAttribute('href', photo.links.html);
        item.setAttribute('target', '_blank');
        const img = document.createElement('img');
        img.setAttribute('src', photo.urls.regular);
        img.setAttribute('alt', photo.alt_description || 'Unsplash Image');
        img.setAttribute('title', photo.alt_description || 'Unsplash Image');

        item.appendChild(img);
        imageContainer.appendChild(item);
    });
}

async function getPhoto() {
    try {
        const response = await fetch(apiUrl);
        photoArray = await response.json();
        console.log(photoArray);
        displayPhoto();
    } catch (error) {
        console.log('Error:', error);
    }
}
window.addEventListener('scroll',()=>{
   
    if(window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000){
        console.log('window.innerHeight: ', window.innerHeight);
        console.log('window.scrolly:',window.scrollY);
        console.log('window.innerHeight + scoller : ',window.scrollY + window.innerHeight);
        console.log('document.body.offsetHeight - 1000 :',document.body.offsetHeight - 1000 );
         console.log('load more');
    }
})
getPhoto();