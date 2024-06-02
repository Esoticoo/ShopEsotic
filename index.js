document.addEventListener('DOMContentLoaded', () => {
    const searchBar = document.getElementById('search-bar');
    const searchButton = document.getElementById('search-button');
    const suggestionsBox = document.getElementById('suggestions');

    const products = [
        { name: 'Casa Lego', url: 'https://amzn.to/3V9rZis' },
        { name: 'Cuffie', url: 'https://amzn.to/4bHNdei' },
        { name: 'Tablet lenovo', url: 'https://amzn.to/3KpWE5V' },
        {name: 'Google Pixel 8', url: 'https://amzn.to/3X6zMA1' },
        {name: 'Maglia roma' , url:'https://amzn.to/4aKisUE'},
        {name: 'Carta Igenica' , url: 'https://amzn.to/3R8HA0t'}
        // Aggiungi altri prodotti con i relativi URL...
    ];

    searchBar.addEventListener('input', () => {
        const query = searchBar.value.toLowerCase();
        suggestionsBox.innerHTML = '';
        if (query.length > 0) {
            const filteredProducts = products.filter(product => product.name.toLowerCase().includes(query)).slice(0, 6);
            filteredProducts.forEach(product => {
                const suggestionItem = document.createElement('div');
                suggestionItem.classList.add('suggestion-item');
                suggestionItem.textContent = product.name;
                suggestionItem.addEventListener('click', () => {
                    searchBar.value = product.name;
                    suggestionsBox.innerHTML = '';
                    suggestionsBox.style.display = 'none';
                });
                suggestionsBox.appendChild(suggestionItem);
            });
            suggestionsBox.style.display = 'block';
        } else {
            suggestionsBox.style.display = 'none';
        }
    });

    searchButton.addEventListener('click', () => {
        searchProduct();
    });

    searchBar.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            searchProduct();
        }
    });

    function searchProduct() {
        const searchValue = searchBar.value.toLowerCase();
        const product = products.find(product => product.name.toLowerCase() === searchValue);
        if (product) {
            window.location.href = product.url;
        } else {
            console.log('Prodotto non trovato');
        }
    }

    document.addEventListener('click', (event) => {
        if (!searchBar.contains(event.target) && !suggestionsBox.contains(event.target)) {
            suggestionsBox.style.display = 'none';
        }
    });
});



document.querySelector('.scroll-left').addEventListener('click', function() {
    document.querySelector('.righe-container').scrollBy({
        left: -300, // Scorrimento di 300 pixel verso sinistra
        behavior: 'smooth' // Animazione dello scorrimento
    });
});

document.querySelector('.scroll-right').addEventListener('click', function() {
    document.querySelector('.righe-container').scrollBy({
        left: 300, // Scorrimento di 300 pixel verso destra
        behavior: 'smooth' // Animazione dello scorrimento
    });
});

const righeContainer = document.querySelector('.righe-container');
const scrollLeft = document.querySelector('.scroll-left');

righeContainer.addEventListener('scroll', function() {
    const scrollRight = document.querySelector('.scroll-right');
    // Mostra la freccia di sinistra solo se c'è spazio a sinistra da scrollare
    scrollLeft.style.display = righeContainer.scrollLeft > 0 ? 'block' : 'none';
    // Mostra la freccia di destra solo se c'è spazio a destra da scrollare
    scrollRight.style.display = righeContainer.scrollLeft < (righeContainer.scrollWidth - righeContainer.clientWidth) ? 'block' : 'none';
});

righeContainer.addEventListener('mouseenter', function() {
    document.querySelector('.scroll-left').style.display = 'block';
    document.querySelector('.scroll-right').style.display = 'block';
});

righeContainer.addEventListener('mouseleave', function() {
    document.querySelector('.scroll-left').style.display = 'none';
    document.querySelector('.scroll-right').style.display = 'none';
});




function startCountdown(elementId, days, hours, minutes, seconds) {
    var countdownElement = document.getElementById(elementId);
    var targetTime = localStorage.getItem('targetTime_' + elementId);

    if (!targetTime) {
        targetTime = new Date();
        targetTime.setDate(targetTime.getDate() + days);
        targetTime.setHours(targetTime.getHours() + hours);
        targetTime.setMinutes(targetTime.getMinutes() + minutes);
        targetTime.setSeconds(targetTime.getSeconds() + seconds);
        localStorage.setItem('targetTime_' + elementId, targetTime);
    } else {
        targetTime = new Date(targetTime);
    }

    function updateCountdown() {
        var now = new Date();
        var remainingTime = targetTime - now;

        if (remainingTime <= 0) {
            countdownElement.innerHTML = "Offerta scaduta";
            clearInterval(countdownInterval);
            localStorage.removeItem('targetTime_' + elementId);
            return;
        }

        var days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));

        var hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

        countdownElement.innerHTML = "l'articolo verrà aggiornato"+ "<br>"+ "tra "+ days + " giorni " + (hours < 10 ? '0' : '') + hours + ":" + (minutes < 10 ? '0' : '') + minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
    }

    var countdownInterval = setInterval(updateCountdown, 1000);
    updateCountdown(); // Avvia immediatamente il countdown
}

// Avvio del countdown per il prodotto
startCountdown('countdown4', 6, 24, 30, 10);