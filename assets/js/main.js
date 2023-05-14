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

$('#boo').popover({
    placement: 'right',
    html: true,
    trigger: 'show',
    title: "Aturan Pangkat Turunan",
    content: "Jika $y= ax^{n}$ maka $y'=a.nx^{n-1}$"
});

$('#boo').popover('show')