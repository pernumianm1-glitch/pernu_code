// TODO scrivi lo script

const btn = document.getElementById("btn-calcola");
const aInput = document.getElementById("a");
const bInput = document.getElementById("b");
const cInput = document.getElementById("c");
const s1 = document.getElementById("soluzione1");
const s2 = document.getElementById("soluzione2");



/*
 btn.addEventListener("click", () => {})

 */
function calcolaSolzioni(){
    let a = parseFloat(aInput.value) || 1;
    let b = parseFloat(bInput.value) || 1;
    let c = parseFloat(cInput.value) || 0;
    /* if(a == NaN || b == NaN || c == NaN){
        a = 1;
        b = 1;
        c = 1;
    } */
    const delta = (b*b)+4*(a)*(c);
    console.log("delta", d);

    if (d>0){
    let sol1 =   (-b + Math.sqrt(d))/(2*a);
    let sol2 =   (-b + Math.sqrt(d))/(2*a);
    s1.textContent = 
    s2.textContent = 
    }
    else if(d==0){
        let x = -b/ (2*a);
    s1.textContent = "Soluzione uscita: "(x);
    s2.textContent = " ";
    }
    else if (d<0)
    s1.textContent = "nessuna soluzione§";
    s2.textContent = " ";




}
btn.addEventListener("click", calcolaSolzioni);