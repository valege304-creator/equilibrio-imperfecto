window.addEventListener("load", function () {

    document.body.classList.add("pagina-visible");

    const enlaces = document.querySelectorAll("nav a");

    enlaces.forEach(function (enlace) {

        enlace.addEventListener("click", function (event) {

            event.preventDefault();

            const destino = enlace.getAttribute("href");

            document.body.classList.remove("pagina-visible");
            document.body.classList.add("pagina-saliendo");

            setTimeout(function () {
                window.location.href = destino;
            }, 400);

        });

    });

});
