

let ScillTad = document.querySelector(`.Scills`);
ScillTad.addEventListener( `click`, NewPage(e));

let ProjTad = document.querySelector(`.Project`);
ScillTad.addEventListener( `click`, NewPage(e));

let ContactTad = document.querySelector(`.Contact`);
ScillTad.addEventListener( `click`, NewPage(e));

function NewPage(e){
    window.location.href = e.href
}
