$(() => {

    /** Abrir Menu Mobile*/
    $('.btn-menu').on('click', () => {
        $("#modal-menu").removeClass("modal-close");
        $("#modal-menu").addClass("modal-open")
    });

    $('#close').on('click', () => {
        $("#modal-menu").removeClass("modal-open");
        $("#modal-menu").addClass("modal-close")
    });

    /** Abrir Card */
    $('#img-prod').on('click', () => {
        $("#card-prod").removeClass("card-closed");
        $("#card-prod").addClass("card-open");
        $(".box-price").after(`<button class="xiszinho" id="closed" >&nbsp;&times;&nbsp;</button>`);
    });

    $("#closed").on('click', () => {
        $("#card-prod").removeClass("card-open");
        $("#card-prod").addClass("card-closed");
        alert("Apertado!")
        
    });
})