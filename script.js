document.getElementById('startButton').addEventListener('click', startGeneratingPapieze);

// Funkcja do generowania papieży bez limitu
function startGeneratingPapieze() {
    document.getElementById('backgroundMusic').play(); // Odtwarzaj muzykę

    setInterval(() => {
        let papiez = document.createElement('img');
        papiez.src = 'papiez_new.jpg'; // Inne zdjęcie papieża
        papiez.classList.add('papiez');
        document.body.appendChild(papiez);

        // Ustawienie losowej pozycji początkowej
        let startX = Math.random() * window.innerWidth;
        let startY = Math.random() * window.innerHeight;
        papiez.style.left = `${startX}px`;
        papiez.style.top = `${startY}px`;

        // Losowy kierunek ruchu
        let directionX = Math.random() < 0.5 ? -1 : 1;
        let directionY = Math.random() < 0.5 ? -1 : 1;

        // Szybkość poruszania się
        let speedX = Math.random() * 5 + 1;
        let speedY = Math.random() * 5 + 1;

        // Funkcja animacji papieża
        function movePapiez() {
            let currentX = parseFloat(papiez.style.left);
            let currentY = parseFloat(papiez.style.top);

            // Sprawdzanie krawędzi, aby papież nie blokował się w rogach
            if (currentX + speedX * directionX > window.innerWidth || currentX + speedX * directionX < 0) {
                directionX *= -1;
            }
            if (currentY + speedY * directionY > window.innerHeight || currentY + speedY * directionY < 0) {
                directionY *= -1;
            }

            // Aktualizacja pozycji
            papiez.style.left = `${currentX + speedX * directionX}px`;
            papiez.style.top = `${currentY + speedY * directionY}px`;

            // Wywołanie ponownie animacji
            requestAnimationFrame(movePapiez);
        }

        // Rozpocznij animację dla nowego papieża
        requestAnimationFrame(movePapiez);

    }, 10); // Papież generuje się co 10ms
}
