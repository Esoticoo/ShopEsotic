document.addEventListener('DOMContentLoaded', () => {
    const searchBar = document.getElementById('search-bar');
    const searchButton = document.getElementById('search-button');
    const suggestionsBox = document.getElementById('suggestions');

    const products = [
        { name: 'Casa Lego', url: 'https://www.amazon.it/LEGO-31139-Accogliente-Giocattolo-Differenti/dp/B0BBRWHP5F/?_encoding=UTF8&ref_=dlx_gate_sd_dcl_tlt_ebf4841f_dt_pd_hp_d_btf_unk&pd_rd_w=9u3Kv&content-id=amzn1.sym.8af244a2-a64e-4d2f-8495-a6b5146fa3f9&pf_rd_p=8af244a2-a64e-4d2f-8495-a6b5146fa3f9&pf_rd_r=ZQKYE54CJNJQTVT9NM71&pd_rd_wg=3uIpL&pd_rd_r=3005abb0-c411-4f8f-98f2-719289203863&th=1' },
        { name: 'Cuffie', url: 'https://www.amazon.it/HUAWEI-FreeBuds-Resistenti-Connessione-Bluetooth/dp/B0CDLFK7JN/?_encoding=UTF8&pd_rd_w=tp5DZ&content-id=amzn1.sym.17588632-908c-4d26-92c5-2e25c2c0269c%3Aamzn1.symc.cdb151ed-d8fe-485d-b383-800c8b0e3fd3&pf_rd_p=17588632-908c-4d26-92c5-2e25c2c0269c&pf_rd_r=RNJVBVMFZX4HKBY1ESPK&pd_rd_wg=XFEf5&pd_rd_r=d8edfe9f-41f3-41b6-be69-c97813552503&ref_=pd_hp_d_atf_ci_mcx_mr_hp_atf_m' },
        { name: 'Tablet lenovo', url: 'https://www.amazon.it/Lenovo-Display-7040mAh-MediaTek-Esclusiva/dp/B0CQT997ZP/ref=sr_1_14?crid=3X8JRMKIVLIB&dib=eyJ2IjoiMSJ9.2cSTJiaTUY3le2tnBb8ssQMAo-wO_xX7v1hV-0tLjzmNgcGxxfkqIlrKZUQ79O9gg_avbw8JiLZ8lLczoqnbvw82XAINEu8jkGJE8glaKxClWS0ieSdb-Zr1bxifGP-vX0jmu_tPpTohI4FSW_izQUNZePB6WCzSnyg-Z25T2L33iAOoebybt33OOBFaynjHy-QBB_uuZtA1com_l11bIlW2_Mhd6103TVZ8t3LTTGNZUgXfMgNxudpnOgrqoev8eDQfBQJQnFX2n8onXJau0-JMApf6Rd0eprt98L8tKjw.OvtVo07vEcKweiWHnp5Gm1vCrCz2aiQzzRyiz2-4TMo&dib_tag=se&keywords=tablet&qid=1716721823&s=pc&sprefix=t%2Ccomputers%2C189&sr=1-14&ufe=app_do%3Aamzn1.fos.d4b79b69-7fa3-49d4-9d2a-f8ac4bab3f93' },
        {name: 'Google Pixel 8', url: 'https://www.amazon.it/Google-Pixel-smartphone-sbloccato-fotocamera/dp/B0CGVP8NRC/ref=sr_1_1_sspa?dib=eyJ2IjoiMSJ9.lIE8QiAZcqax75iFf0q6DF18tPDz76EJGVJVk4Zzm716XhNjQeEToZv7oYx2lDA9qDrvKD9KO0p1v4EpH_4Td-NllsossrZ_UGk6e_PDd7ILt-r74qIHZjk6f1j6z2sSgYWxTzYnQ2NnFWXZyLcGmJ1VYLhbPeX43w2AeAQMi7eCnMbEvzdY_uqWQVHixLHw0FsgkU_y4m_3TmG5fhUwgYMPk_iuXz7Xs3akzunhxuG49I7xqVo_zuXURIKlqKq3X6l0Uiwn7xZVJ-56ODEQEWhM9apckp-MFdWGDi6sMQM.HE77o_4xOx8IlZUwPYB0_gCG3d1Z1fBooCFO4QW9cIo&dib_tag=se&keywords=telefono&qid=1716722135&sr=8-1-spons&ufe=app_do%3Aamzn1.fos.d4b79b69-7fa3-49d4-9d2a-f8ac4bab3f93&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1' },
        {name: 'Maglia roma' , url:'https://www.amazon.it/dp/B0CLVX5QKC/ref=twister_B0CMR1FXK2?_encoding=UTF8&th=1&psc=1'},
        {name: 'Carta Igenica' , url: 'https://www.amazon.it/Tenderly-Comfort-Igienica-Delicata-Dermatologicamente/dp/B0BYVM4ZXL/?_encoding=UTF8&pd_rd_w=askZv&content-id=amzn1.sym.c60a350d-e857-4e42-bcea-c2f952e71de5%3Aamzn1.symc.36bd837a-d66d-47d1-8457-ffe9a9f3ddab&pf_rd_p=c60a350d-e857-4e42-bcea-c2f952e71de5&pf_rd_r=EAVSA47ZXR9RBXD1TKXS&pd_rd_wg=qoNgG&pd_rd_r=53ff9ac2-648f-4a07-9b81-b75681bfa64c&ref_=pd_hp_d_btf_ci_mcx_mr_hp_atf_mo'}
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

        countdownElement.innerHTML = "Questo prezzo scadrà tra "+ "<br>" + days + " giorni " + (hours < 10 ? '0' : '') + hours + ":" + (minutes < 10 ? '0' : '') + minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
    }

    var countdownInterval = setInterval(updateCountdown, 1000);
    updateCountdown(); // Avvia immediatamente il countdown
}

// Avvio del countdown per il prodotto
startCountdown('countdown4', 6, 24, 30, 10);