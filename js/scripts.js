    var link = document.querySelector(".contacts__btn");

    var popup = document.querySelector(".modal__form");
    var close = popup.querySelector(".modal__form_close");


    link.addEventListener("click", function(event) {
      event.preventDefault();
      popup.classList.add("modal__form_show");
      });

    close.addEventListener("click", function(event) {
      event.preventDefault();
      popup.classList.remove("modal__form_show");
      });
      window.addEventListener("keydown", function(event) {
        if (event.keyCode === 27) {
          if (popup.classList.contains("modal__form_show")) {
            popup.classList.remove("modal__form_show");
          }
        }
      });

    var mapOpen = document.querySelector(".js__map_open");

    var mapPopup = document.querySelector(".modal__map_big");
    var mapClose = mapPopup.querySelector(".modal__form_close");
    mapOpen.addEventListener("click", function(event) {
      event.preventDefault();
      mapPopup.classList.add("modal__map_show");
    });

    mapClose.addEventListener("click", function(event) {
      event.preventDefault();
      mapPopup.classList.remove("modal__map_show");
    });

    window.addEventListener("keydown", function(event) {
      if (event.keyCode === 27) {
        if (mapPopup.classList.contains("modal__map_show")) {
          mapPopup.classList.remove("modal__map_show");
        }
      }
    });

    var addConfirm = document.querySelector(".actions__buy");

    var addWindow = document.querySelector(".modal__add_confirmation");
    var addWindowClose = addWindow.querySelector(".modal__form_close");
    addConfirm.addEventListener("click", function(event) {
      event.preventDefault();
      addWindow.classList.add("modal__window_show");
    });

    addWindowClose.addEventListener("click", function(event) {
      event.preventDefault();
      addWindow.classList.remove("modal__window_show");
    });
