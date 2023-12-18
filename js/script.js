
function toTop(){
    const toTop = document.querySelector('#to-top');
    window.addEventListener('scroll',()=>{
        if(window.scrollY > 80){
            toTop.classList.add('show');
        }else{
            toTop.classList.remove('show');
        }
    })
}
function scrollTop(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


function incrementStatic (){
    const counters= document.querySelectorAll('.counter')
    counters.forEach((counter)=>{
        counter.innerText = 0;

        const updateCounter = () => {
            const target = +counter.getAttribute('data-target');
            const c = +counter.innerText;

            const increment = target / 200;

            if(c < target){
                counter.innerText = Math.ceil(c + increment);
                setTimeout(updateCounter, 1);
            }else{
                counter.innerText = target;
            }
        }
        updateCounter();
    })
}
document.addEventListener('DOMContentLoaded',incrementStatic);
document.addEventListener('DOMContentLoaded',toTop);
document.querySelector('#to-top').addEventListener('click',scrollTop)
