const input = document.getElementById('item');
const btn = document.getElementById('btn-aggiumgi'); // Mantieni l'ID del tuo HTML (o correggi in 'btn-aggiungi' se presente nel DOM)
const lista = document.getElementById('lista');
const errore = document.getElementById('errore');

function aggiungiElemento() {
    const testo = input.value.trim();

    // 3. Gestione errore se l'input è vuoto
    if (testo === '') {
        errore.textContent = 'Inserisci un testo valido prima di aggiungere.';
        return;
    }

    // Pulisci il messaggio di errore se l'input è valido
    errore.textContent = '';

    // 1. Creazione dell'elemento di lista
    const nuovoItem = document.createElement('li');

    // Creo uno span per il testo (facilita la gestione del click/sbarrato)
    const testoSpan = document.createElement('span');
    testoSpan.textContent = testo;

    // 4. (Bonus) Click sul testo per segnarlo come "fatto"
    testoSpan.addEventListener('click', () => {
        testoSpan.classList.toggle('fatto');
    });

    // 2. Creazione del bottone "Rimuovi"
    const btnRimuovi = document.createElement('button');
    btnRimuovi.textContent = 'Rimuovi';
    btnRimuovi.addEventListener('click', () => {
        nuovoItem.remove();
    });

    // Assemblaggio e inserimento nella lista
    nuovoItem.appendChild(testoSpan);
    nuovoItem.appendChild(btnRimuovi);
    lista.appendChild(nuovoItem);

    // Reset del campo di input
    input.value = '';
}

// Evento al click sul pulsante "Aggiungi"
btn.addEventListener('click', aggiungiElemento);

// 1. Evento al tasto "Invio" nell'input
input.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        aggiungiElemento();
    }
});