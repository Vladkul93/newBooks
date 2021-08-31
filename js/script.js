        let carousel = document.querySelectorAll(".carusel-btn");
        console.log(carousel);
        carousel.forEach(item => {item.addEventListener('click', ()=>{
            let span = document.querySelectorAll('.btn-span');
            let itemData = item.getAttribute('data-number');
            for (let x =0; x < span.length; x++) {
                span[x].classList.remove('bg-red')
            }
            for(let i = 0; i < span.length; i++) {
                if ( itemData == i) {
                    span[i].classList.toggle('bg-red');
                }
            }
        })})
function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
    }
    

    function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
    }

    function viewDiv(){
        document.getElementById("div1").style.display = "block";
        document.getElementById("div2").style.display = "block";
        document.getElementById("div3").style.display = "block";
        document.getElementById("div4").style.boxShadow = "0px 7px 24px 0 rgba(0, 0, 0, 0.14)";
        };

    function closeDiv(){
        document.getElementById("div1").style.display = "none";
        document.getElementById("div2").style.display = "none";
        document.getElementById("div3").style.display = "none";
        document.getElementById("div4").style.boxShadow = "none";
        };
            let boxItem = document.querySelectorAll(".box__info-1");
            boxItem.forEach(item => {item.addEventListener('click', () =>{
                let info1 = document.querySelectorAll(".info__1");
                for(let i = 0; i < length.boxItem; i++) {
                    info1[i].classList.remove('active-tab')
                }
                let itemData = item.getAttribute('data-number');
                for(let x = 0; x < info1.length; x++) {
                    if (itemData == x) {
                        info1[x].classList.toggle('active-tab');
                    }
                }
            })})
        var swiper = new Swiper(".mySwiper", {
            navigation: {
        nextEl: '.swiper-button-prev',
        prevEl: '.swiper-button-next'
    },
            slidesPerView: 5,
            freeMode: true,
            spaceBetween: 30,
            loop:true,
            pagination: {
            el: ".swiper-pagination",
            clickable: true,
            },
            breakpoints: {
                300: {
                    slidesPerView: 1,
                },
                420: {
                    slidesPerView: 1,
                },
                620: {
                    slidesPerView: 2,
                },
                800: {
                    slidesPerView: 3,
                },
                1200: {
                    slidesPerView: 5,
                }
            },
        });