// Cambiar el color de fondo y alternar todo lo blanco a negro y el texto negro a blanco
document.getElementById("colorButton").addEventListener("click", () => {
    const body = document.body;
    const colorIcon = document.getElementById("colorIcon");
    const isBlackBackground = body.style.backgroundColor === "black";

    body.style.backgroundColor = isBlackBackground ? "white" : "black";
    body.style.color = isBlackBackground ? "#333" : "white"; // Alternar color del texto

    // Actualizar todos los elementos con fondos blancos
    document.querySelectorAll("header, article, #feedbackSection textarea").forEach((element) => {
        element.style.backgroundColor = isBlackBackground ? "white" : "black";
        element.style.color = isBlackBackground ? "#333" : "white"; // Alternar color del texto
    });

    colorIcon.textContent = isBlackBackground ? "🌞" : "🌙"; // Alternar ícono
});

// Funcionalidad del contador con un límite de 10
let counter = 0;
document.getElementById("incrementButton").addEventListener("click", () => {
    if (counter < 10) {
        counter++;
        document.getElementById("counter").innerHTML = counter;
    } else {
        alert("El puntaje máximo es 10.");
    }
});
document.getElementById("decrementButton").addEventListener("click", () => {
    if (counter > 0) {
        counter--;
        document.getElementById("counter").innerHTML = counter;
    }
});

// Alternar la visibilidad del contenido de los artículos
document.querySelectorAll(".toggle-article").forEach((button) => {
    button.addEventListener("click", () => {
        const targetId = button.getAttribute("data-target");
        const articleContent = document.getElementById(targetId);
        const isHidden = articleContent.style.display === "none" || !articleContent.style.display;
        articleContent.style.display = isHidden ? "block" : "none";
        button.textContent = isHidden ? "⬇" : "⬆"; // Cambiar dirección de la flecha
    });
});

// Artículos sean visibles por defecto
document.querySelectorAll(".toggle-article").forEach((button) => {
    const targetId = button.getAttribute("data-target");
    const articleContent = document.getElementById(targetId);
    articleContent.style.display = "block";
});

// Envío de comentarios
document.getElementById("submitFeedback").addEventListener("click", () => {
    const feedback = document.getElementById("feedback").value.trim();
    if (feedback) {
        alert("Gracias por tu opinión: " + feedback);
        document.getElementById("feedback").value = ""; // Limpiar el área de texto
    } else {
        alert("Por favor, escribe tu opinión antes de enviar.");
    }
});

// Habilitar desplazamiento suave al hacer clic en los enlaces del menú de navegación
document.querySelectorAll("nav ul li a").forEach((link) => {
    link.addEventListener("click", (event) => {
        event.preventDefault(); // Prevenir el comportamiento predeterminado
        const targetId = link.getAttribute("href").substring(1); // Obtener el ID del destino
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({ behavior: "smooth" }); // Desplazamiento suave
        }
    });
});
