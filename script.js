const ctg = document.getElementById("ctg");

console.log(ctg);

ctg.addEventListener("change", (eve) => teste(eve));
ctg.addEventListener("mouseenter", (eve) => hover(eve));

const teste = (content) =>
{
    alert(content.target.value);
    window.location.href = `./${content.target.value}.html`;
}

const hover = (content) =>
{
    
}