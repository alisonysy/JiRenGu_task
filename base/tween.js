!function(){
  var view = document.querySelector('nav.menu>ul');

  var controller = {
    view:null,
    aTags:null,
    init:function(view){
      this.view = view;
      this.aTags = view.querySelectorAll('li>a');
      this.updateAnimation();
      this.bindEvents();
    },
    updateAnimation: function(){
			function animate(time){
				requestAnimationFrame(animate);
				TWEEN.update(time);
			}
			requestAnimationFrame(animate);
    },
    bindEvents: function(){
      let aTags = this.aTags;
			for(let i=0;i<aTags.length;i++){
				aTags[i].onclick=(x)=>{
					x.preventDefault()
					let a = x.currentTarget
					let href = a.getAttribute('href')
					let element = document.querySelector(href)
					//console.log(element);
					let top = element.offsetTop 
					//offsetTop returns the distance of the current element to its offsetParent node's top
					//its offsetParent node is the element's closest positioned containing element, 
					//i.e. whose css declares position:relative or position:absolute

					let currentTop = window.scrollY
					let targetTop = top - 80
					let s = targetTop - currentTop;
					var coords = {y:currentTop};
					var t = Math.abs((s/100)*400) //it scrolls 100px in 0.4s
					if(t>1200){t = 1200};
					var tween = new TWEEN.Tween(coords)
						.to ({y:targetTop},t)
						.easing(TWEEN.Easing.Back.InOut)
						.onUpdate(function() {
							window.scrollTo(0,coords.y)
						})
						.start();

						/* the following code is primitive version for scrolling animation:
					let n = 25 // how many times it moves;
					let t = 500 / n //the frequency it moves
					let currentTop = window.scrollY
					let targetTop = top - 80
					let s = (targetTop -currentTop) / n
					let i = 0;
					console.log(targetTop + ' ' + currentTop + ' ' + n + ' '+s)
					let id = setInterval(() => {
						if(i===n){
							window.clearInterval(id)
							return 
						}
						i = i+ 1;
						window.scrollTo(0, currentTop + s * i)
					}, t);*/
				}
			}
    }
  }

  controller.init(view)

}.call()

