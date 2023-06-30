// show content with form
let dropDown= document.querySelector('.landing-header_drop-down');
let hiddenContent = document.querySelector('.hidden-content');
dropDown.addEventListener('click', function showBlock() {
    hiddenContent.classList.toggle('visible-content');
});

// show text 'read more'
let readMoreOpener= document.querySelector('.read-more_opener');
let readMoreBlock =  document.querySelector('.read-more');
let openerText =  document.querySelector('#opener-text')
let readMoreText= document.querySelector('.read-more_text');
let imgsOpener = document.querySelectorAll('.read-more_opener-img');

readMoreOpener.addEventListener('click', function showText() {
    readMoreText.classList.toggle('show-text');
    readMoreBlock.classList.toggle('show-text');
    if ( readMoreBlock.classList.contains('show-text') == true) {
        openerText.textContent='Read Less';  
    }else{
        openerText.textContent='Read More';
    };
    
    for (elem of imgsOpener) {
        elem.classList.toggle('rotate');
    }
})
