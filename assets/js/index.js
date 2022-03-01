const counters = document.querySelectorAll('.counter')
const add = document.querySelector('#add')
const subtract = document.querySelector('#subtract')
const valueBox = document.querySelector('#valueBox')
const counterArea = document.querySelector('#counterArea')

const slider = tns({
    container: "#carousel",
    items: 1,
    nav: false,
    controls: false,
    mouseDrag: true,
    autoplayButton: false,
    autoplay: false,
    autoplayButtonOutput: false
})

function isInViewPort(element) {
    // Get the bounding client rectangle position in the viewport
    var bounding = element.getBoundingClientRect();

    // Checking part. Here the code checks if it's *fully* visible
    // Edit this part if you just want a partial visibility
    if (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth) &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    ) {
        return true;
    } else {
        return false;
    }
}

window.addEventListener('scroll', function (event) {
    if (isInViewPort(counterArea)) {
        // Number Counter
        for(let n of counters) {
            const updateCount = () => {
                const target = + n.getAttribute('data-target');
                const count = + n.innerText;
                const speed = 999999; // change animation speed here
                const inc = target / speed; 
                if(count < target) {
                    n.innerText = Math.ceil(count + inc);
                    setTimeout(updateCount, 1);
                } else {
                    n.innerText = target;
                }
            }
            updateCount();
        }

    }
}, false);
  
// Number Counter
// for(let n of counters) {
//     const updateCount = () => {
//         const target = + n.getAttribute('data-target');
//         const count = + n.innerText;
//         const speed = 100000; // change animation speed here
//         const inc = target / speed; 
//         if(count < target) {
//             n.innerText = Math.ceil(count + inc);
//             setTimeout(updateCount, 1);
//         } else {
//             n.innerText = target;
//         }
//     }
//     updateCount();
// }


add.addEventListener('click', () => {
    let value = valueBox.innerHTML

    valueBox.innerHTML = Number(value) + 1
})

subtract.addEventListener('click', () => {
    let value = valueBox.innerHTML

    if(value > 1){
        valueBox.innerHTML = Number(value) - 1
    }
})