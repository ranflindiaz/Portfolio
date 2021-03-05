
//#region /*Typing and deliting text*/ 

let _CONTENT =["I'm the Web Developer you were looking for.","hola" ];

let _PART = 0;

let _PART_INDEX = 0;

let _INTERNAL_VAL;

const _TipingText = document.querySelector('#typing-text');
const _Cursor = document.querySelector('#cursor');

function Type() {
    let text = _CONTENT[_PART].substring(0, _PART_INDEX + 1);
    _TipingText.innerHTML = text;
    _PART_INDEX++;

    if (text === _CONTENT[_PART]) {
        _Cursor.style.display = 'none';

        clearInterval(_INTERNAL_VAL);
        // setTimeout(function(){
        //     _INTERNAL_VAL = setInterval(Delete, 50);
        // }, 900);
    }
}

// function Delete() {
// 	// Get substring with 1 characater deleted
// 	let text =  _CONTENT[_PART].substring(0, _PART_INDEX - 1);
// 	_TipingText.innerHTML = text;
// 	_PART_INDEX--;

// 	// If sentence has been deleted then start to display the next sentence
// 	if(text === '') {
// 		clearInterval(_INTERVAL_VAL);

// 		// If current sentence was last then display the first one, else move to the next
// 		if(_PART == (_CONTENT.length - 1))
// 			_PART = 0;
// 		else
// 			_PART++;
		
// 		_PART_INDEX = 0;

// 		// Start to display the next sentence after some time
// 		setTimeout(function() {
// 			_Cursor.style.display = 'inline-block';
// 			_INTERVAL_VAL = setInterval(Type, 100);
// 		}, 200);
// 	}
// }

// Start the typing effect on load
_INTERVAL_VAL = setInterval(Type, 100);
//#endregion

//jQuery Smooth Scroll
// $('.menu a').on('click', function(e){
//     if (this.hash !== '') {
//         e.preventDefault();

//         const hash = this.hash;
//         $('html, body').animate({
//             scrollTop: $(hash).offset().top
//         }, 800);
//     }
// });

const scroll = new SmoothScroll('.menu a[href*="#"]',{
    speed: 800
});