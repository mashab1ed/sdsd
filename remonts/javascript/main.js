$(function(){
var mixer = mixitup('.projects__divani');
$( '.projects__works-top').on('click', function(){
    $( '.projects__works-top').removeClass('projects__works-top--active')
    $( this).addClass('projects__works-top--active')
}
)


    let old;

document.querySelector('.kviz__mebel').addEventListener('click',e => {
	if (e.target.classList.contains('kviz__mebel-item')) {
    	if (old) old.style.background = '';
    	old = e.target;
    	e.target.style.background = '#2C79FF';
    }
});

})


