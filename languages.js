var languagesModule = (function() {
	var defaultLang = "es",
		currentLang,
		currentTag;
	
	var languageDefinitions = {
		es: {
			nav_about: "Acerca de",
			nav_contact: "Contactos de Emergencia",
			nav_volunteer: "Voluntarios",
			nav_contribuir: "Contribuir",
			intro_titulo: "Ayuda Sismo",
			intro_date: "19 de Septiembre",
			intro_button1: "¿Cómo ayudar?",
			intro_button2: "Publicar",
			card_intro1: "¿Cómo ayudar a los afectados del Sismo?",
			card_intro2: "A continuación encontrarás diferentes organizaciones, centros de acopio o formas de ayudar a los afectados o rescatistas del sismo.",
			card_intro3: "Si conoces alguna otra forma de ayudar Contáctanos",
			card_intro4: "Contáctanos",
			filter_type: "Filtrar por tipo de donación",
			filter_type_select: "Selecciona una opción",
			filter_all: "Todas",
			filter_location: "Filtrar por locación",
			filter_location_select: "Selecciona una opción",
			card_type: "Tipo de donación:",
			card_location: "Puedes ayudar desde:",
			more_info: "Más Información",
			modal1_title: "Acerca de Como Ayudar",
			modal1_text1: "Este proyecto sin fines de lucro busca crear un repositorio de información para centralizar el apoyo y la rápida distribución de ayuda.",
			modal1_text2: "Si deseas ayudar y tienes conocimientos de programación colabora con nosotros en",
			modal1_text3: " Sí lo que deseas es agregar un método de ayuda por favor envíanos la información pertinente a:",
			modal2_title: "Públicar Forma de Ayuda",
			modal2_text: "Envía la información del método de ayuda con toda la información pertinente como: A quién se ayuda, Desde dónde se puede ayudar, que tipo de ayuda necesitan. desde los siguientes medios de contacto:",
			text_close: "Cerrar",
			text_or: "o"
		},
		en: {
			nav_about: "About",
			nav_contact: "Emergency Contacts",
			nav_volunteer: "Volunteers",
			nav_contribuir: "Contribute",
			intro_titulo: "Help Needed for Mexico Earthquake",
			intro_date: "Sep 19, 2017",
			intro_button1: "How Can You Help?",
			intro_button2: "Publish",
			card_intro1: "Emergency Contacts",
			card_intro2: "Here is a contact list that can help you if you are in an area affected by the earthquake.",
			card_intro3: "If you know any other important contact information",
			card_intro4: "Contact us",
			filter_type: "Filter by Donation Type",
			filter_type_select: "Select an option",
			filter_all: "All",
			filter_location: "Location",
			filter_location_select: "Select an option",
			card_type: "Donation type:",
			card_location: "Location:",
			more_info: "More Information",
			modal1_title: "About Como Ayudar",
			modal1_text1: "This volunteer project is an effort to centralize all information regarding assistance and distribution to help those affected by the earthquake in Mexico on September 19, 2017.",
			modal1_text2: "If you are a developer and want to help, please check our repo on",
			modal1_text3: " If you wish to add a Helping Source, please contact us here:",
			modal2_title: "Publish a Helping Source",
			modal2_text: "Send us the information about a Helping Source with all the applicable information: Who are you helping, location, type of help. You can send us the information using the following methods:",
			text_close: "Close",
			text_or: "or"
		},
	};
	
	currentLang = languageDefinitions[defaultLang];
	
	function chooseLang(chosenLang) {
		currentLang = languageDefinitions[chosenLang];
	}
	
	function loadLanguage(chosenLang) {
		chooseLang(chosenLang);
	
		textElements = document.querySelectorAll("[data-lang]");
	
		textElements.forEach(function (item, index) {
			currentTag = item.getAttribute('data-lang');
			content = currentLang[currentTag];
	
			if (currentTag === 'hide') {
				(chosenLang === 'es' ? item.classList.remove('hide-lang') : item.classList.add('hide-lang'));
			}
			else {
				item.textContent = content;
			}
		})
	}

	function publicLoadLanguage(chosenLang) {
		loadLanguage(chosenLang);
	}

	return {
		loadLang: publicLoadLanguage
	}
})();