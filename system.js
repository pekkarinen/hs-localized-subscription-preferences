(function() {
  // bail if no translations found from template
  if(!translations) return ;

  const urlParams = new URLSearchParams(window.location.search);
  const lang = urlParams.has("languagePreference")
    ? urlParams.get("languagePreference").substr(0,2) : false ;
  if(!lang) return ; 
  
  // get hs pref form element, pray the id never changes
  const prefForm = document.querySelector("form#email-prefs-form");
  if(!prefForm) return ;
  
  // get the cos wrapper span containing page type
  const typeElem = document.querySelector('.systems-page span'); 
  if(!typeElem) return ; 

  const type = typeElem.dataset.hsCosType ;
  if(!type) return ;

  const strings = translations[lang][type];
  if(!strings) return ;

  Object.keys(strings).forEach(key => {
    const element = prefForm.querySelector(`[data-key="${key}"]`);
    if(element) {
      element.outerHTML = strings[key] ; 
    }
  });
  
  // kludge buttons
  const buttons = document.querySelectorAll('input[type="submit"]');

  buttons.forEach(button => {
    if (button.getAttribute("name") === "is_resubscribe") {
      button.value = strings.resubscribe_button_text ;
    } else {
      button.value = strings["button_text"] ;
    }
  });

})();
