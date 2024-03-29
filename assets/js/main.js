$(document).ready(function(){
    $(".slider").slick({
        autoplay: true,
        autoplaySpeed: 3000,
        prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
        nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>"
    });
  });



// FOOD MENU

const foodBtns = document.querySelectorAll('.food-menu .food_menu-btn')
const foodList = document.querySelectorAll('.food-item')

foodBtns.forEach(function(el){
	el.addEventListener('click', function(event){
		const typeFood = event.target.getAttribute('type-food')
		for(let i = 0; i < foodBtns.length; i++){
			foodBtns[i].classList.remove('active')
			this.classList.add('active')
		}


		foodList.forEach(function(item){
			for(let i = 0; i < foodList.length; i++){
				if(typeFood == item.getAttribute('type-food')){
					item.classList.remove('hide')
				}
				else{
					item.classList.add('hide')
				}
			}
		})
	})
})


// count number 
var ct = document.querySelector('.customer h1')
var vt = document.querySelector('.variety h1')
var aw = document.querySelector('.win h1')
var pt = document.querySelector('.team h1')
function count(el, to) {
	let speed = 200
    let from = 0
	let step = to / speed
    const counting = setInterval(function(){
		from += step
		if (from > to){
			clearInterval(counting)
			el.innerText = to
		}
		else {
			el.innerText = Math.ceil(from)
		}
	}, 5)
}

count(ct, 30500)
count(vt, 541)
count(aw, 70)
count(pt, 80)


// testimotial slider
