const modal = document.getElementById('modal');
const modalShow = document.getElementById('show-modal');
const modalClose = document.getElementById('close-modal');
const bookmarkForm = document.getElementById('bookmark-form');
const websiteNameEl = document.getElementById('website-name');
const websiteUrl = document.getElementById('bookmark-url');
const bookmarkContainer = document.getElementById('bookmarks-container');
// show modal
function showModal(){
    modal.classList.add('show-modal');
    websiteNameEl.focus();
}

modalShow.addEventListener('click' , showModal);
modalClose.addEventListener('click', ()=>modal.classList.remove('show-modal'));
window.addEventListener('click',(e)=>(e.target === modal ? modal.classList.remove('show-modal') : false));