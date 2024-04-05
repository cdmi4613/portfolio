window.addEventListener("load", function(){
	
	AOS.init({
		easing: "ease-in-out-sine",
		once: true
	});

	let titleBox=document.getElementById("title_box");
	let p=document.getElementById("pt");
	let pageinfo=document.getElementById("pageinfo");

	let titleText=new TypeIt("#title_box" , {
		speed: 30,
		// startDelay: 1200,
		//  strings: ["<strong>front End</strong>",
		//  "<span>DEVELOPER</span>"
		// ],
		afterComplete: function (instance) {
			instance.destroy();
			titleBox.classList.add("complete");
			p.classList.add("sc");
			pageinfo.classList.add("pade");
		}
	});

	titleText.type("FrontEnd", {delay: 300})
	.move(-3)
	.pause(300)
	.delete(0)
	.type(" ", {delay: 300})
	.move(null, {to: "END"})
	.type("<br><span>DEVELOPER<span><br>")
	.go();

	// setTimeout(function(){
	// 	titleText.go();
	// }, );

	let wint, winh;
	let section=document.querySelectorAll("section");
	let pageList=[];
	let pageNum=document.getElementById("pagenumber");
	let n=0;
	let pageScroll=document.querySelector("#pagescroll > ul > li");


	pageList[0]=document.getElementById("main");

	for(let i=0; i<section.length; i++){
		pageList.push(section[i]);
	}


	function resizeHandler(){
		winh=window.innerHeight;
	}

	resizeHandler();

	window.addEventListener("resize", resizeHandler);

	function scrollHandler(){
		wint=window.scrollY ;

		console.log(document.body.classList.contains("white") === true)

		if(wint < pageList[1].offsetTop-winh/3 || wint > pageList[3].offsetTop-winh/4){
			if(document.body.classList.contains("white") === true){
				document.body.classList.remove("white");
				pageScroll.classList.remove("tobottom1");

				if(n === 3){
					//pageScroll.removeAttribute("class");
					pageScroll.classList.add("tobottom2");
				
				}
				else{
					//pageScroll.removeAttribute("class");
					pageScroll.classList.remove("tobottom1");
				}
			}
		}
		else{
			if(document.body.classList.contains("white") === false){
				document.body.classList.add("white");
				// pageScroll.removeAttribute("class");
				pageScroll.classList.add("tobottom1");
				pageScroll.classList.remove("tobottom2");
			}
		}

		if(wint <= pageList[0].offsetTop){
			n=1;
		}
		else if(wint <= pageList[1].offsetTop){
			n=2;
		}
		else if(wint <= pageList[3].offsetTop){
			n=3;
		}
		else{
			n=4;
		}
	
		pageNum.innerHTML=n;
	}

	let scrollTopBtn = document.getElementById("pagescroll");

		scrollTopBtn.addEventListener("click", function(e){
			e.preventDefault();

			window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	});
	
	window.addEventListener("scroll", scrollHandler)

	let tab=document.getElementById("tab");
	let sitemap=document.getElementById("sitemap");
	let body=document.querySelector("body");
	let namelogo=document.querySelector("#main header .header_inner .namelogo")
	// 
	let mobileGnb=document.getElementById("sitemap");
	let mobileGnbList=mobileGnb.firstElementChild.firstElementChild.children;
	let topPos=0;
	let j=0;

	tab.addEventListener("click", function(e){ 
		e.preventDefault();
		e.currentTarget.removeAttribute("class");

		if(sitemap.classList.contains("on")){
			e.currentTarget.classList.add("pause");
			sitemap.classList.remove("on");
			body.classList.remove("fixed");
			namelogo.classList.remove("none");
		}
		else{
			e.currentTarget.classList.add("exit");
			sitemap.classList.add("on");
			namelogo.classList.add("none");
			body.classList.add("fixed");
		}
	});

	for(let i=0; i<mobileGnbList.length; i++){
		mobileGnbList[i].addEventListener("click", function(e){
			e.preventDefault();

			j=i;
			topPos=pageList[j].offsetTop;

			tab.removeAttribute("class");
			tab.classList.add("pause");
			sitemap.classList.remove("on");
			body.classList.remove("fixed");
		
			gsap.to(window, {scrollTo: topPos, duration: 0.4, delay: 0.4});
		});
	}

	let video=document.getElementById("Aimg");
	video.muted=true;

	let buttonList=document.querySelectorAll(".right p a");

	let videoList=["layout.mp4", "graph.mp4", "key.mp4"];
	let flag;



	for(let i=0; i<buttonList.length; i++){

		buttonList[i].addEventListener("mouseenter", function(e){
			playVideo(i, videoList[i]);
			video.classList.add("no");
		});

		buttonList[i].addEventListener("mouseleave", function(e){
			video.pause();
			flag=null;
			video.classList.remove("no");
		});
	}

	function playVideo(n, src){
		console.log(n, src);

		if(flag != n){
			flag=n;
			video.setAttribute("src", "video/"+src);

			video.currentTime=0;
			video.play();
		}
		else{
			return;
		}
	}

	video.addEventListener("ended", function(){
		flag=null;
	});
});