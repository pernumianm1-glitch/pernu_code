// TODO:
// 1. Al click su "Aggiungi" (o premendo Invio) aggiungi un elemento alla lista
//    con il testo inserito nell'input.
// 2. Ogni elemento deve avere un bottone "Rimuovi" che lo elimina dalla lista.
// 3. Se l'input è vuoto, mostra un messaggio di errore e non aggiungere nulla.
// 4. (Bonus) Al click sul testo dell'elemento, barralo come "fatto".


const itemInput = document.getElementById("item");
const btn = document.getElementById("btn-aggiungi");
const lista = document.getElementById("lista");
const err = document.getElementById("errore");
let items = [];

function aggiungiElementi(){
    err.textContent = "";
    if(itemInput.value === ""){
        err.textContent = "Inserire valore adeguato";
        return;
    }
    
    items.push(itemInput.value.trim());
    renderizzaItem();
}

function renderizzaItem() {
    // svuota la lista html 
    lista.innerHTML = "";

    //per ogni elemento in items (array) chiamo la funzione creaItem e aggiungiamo l'elemento alla pagina
    for (let i = 0; i < items.length; i++) {
        const nuovoItem = creaItem(items[i]);
        lista.append(nuovoItem);
    }

}

function creaItem(contenuto) {
    const nuovoItem = document.createElement("li");
    nuovoItem.textContent = contenuto;

    nuovoItem.addEventListener("click", () => {
        nuovoItem.classList.toggle("done");
    });

    const btnRimuovi = document.createElement("button");
    btnRimuovi.textContent = "X";
    nuovoItem.append(btnRimuovi);
    btnRimuovi.addEventListener("click", () => {
    const indice = items.findIndex(item => item === contenuto);
    if(indice !== -1) {
        items.splice(indice, 1);
        renderizzaItem();
    }
    });

    return nuovoItem;
}

btn.addEventListener("click", aggiungiElementi);