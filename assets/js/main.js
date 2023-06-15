//Mathjax
window.MathJax = {
    tex: {
        inlineMath: [['$', '$'], ['\\(', '\\)']]
    },
    svg: {
        fontCache: 'global'
    }
};

(function () {
    var script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js';
    script.src = "https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js";
    script.async = true;
    document.head.appendChild(script);
})();

var openButton = document.getElementById('openButton');
var closeButton = document.getElementById('closeButton');
var popupContainer = document.getElementById('popupContainer');

openButton.addEventListener('click', function () {
    popupContainer.style.display = 'block';
});

closeButton.addEventListener('click', function () {
    popupContainer.style.display = 'none';
});

window.addEventListener('click', function (event) {
    if (event.target === popupContainer) {
        popupContainer.style.display = 'none';
    }
});