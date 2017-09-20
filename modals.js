$('.modal__link').click(function (e) {
  e.preventDefault();
  var modal = $(this).data('modal');
  $('.modal[data-modal="' + modal + '"]').addClass('show');
})

$('.modal__close').click(function (e) {
  e.preventDefault();
  $(this).parent().removeClass('show');
})

// Map
$('.map-container').click(function () {
  $(this).find('iframe').addClass('clicked')
}).mouseleave(function () {
  $(this).find('iframe').removeClass('clicked')
});

$(function () {
  var categories = ["Monetaria",
    "Víveres",
    "Artículos de limpieza",
    "Artículos de aseo personal",
    "Equipo de auxilio médico",
    "Medicamentos",
    "Sangre",
    "Herramientas",
    "Equipo de rescate",
    "Albergue",
    "Trabajo voluntario",
    "Asesoría",
    "Alojamiento",
    "Veterinario"];

  function split(val) {
    return val.split(/,\s*/);
  }
  function extractLast(term) {
    return split(term).pop();
  }

  $("#help_type").on("keydown", function (event) {
    if (event.keyCode === $.ui.keyCode.TAB &&
      $(this).autocomplete("instance").menu.active) {
      event.preventDefault();
    }
  }).autocomplete({
    minLength: 0,
    source: function(request, response) {
      response($.ui.autocomplete.filter(
        categories, extractLast(request.term)));
    },
    focus: function () {
      return false;
    },
    select: function (event, ui) {
      var terms = split(this.value);
      terms.pop();
      terms.push(ui.item.value);
      terms.push("");
      this.value = terms.join(", ");
      return false;
    }
  });
});