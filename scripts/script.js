// scripts/script.js
function googleTranslateElementInit() {
  new google.translate.TranslateElement(
    {
      pageLanguage: "en",
      includedLanguages: "en,de,es,fr,it,ja,ko,pt,zh",
      layout: google.translate.TranslateElement.InlineLayout.VERTICAL,
    },
    "google_translate_element"
  );
}

$(window).on("load", function () {
  $(".goog-te-gadget").html($(".goog-te-gadget").children());
  $("#google-translate").fadeIn("1000");

  function cleartimer() {
    setTimeout(function () {
      window.clearInterval(myVar);
    }, 500);
  }
  function myTimer() {
    if ($(".goog-te-combo option:first").length) {
      $(".goog-te-combo option:first").html($pageLanguage);
      cleartimer();
    }
  }
  var myVar = setInterval(function () {
    myTimer();
  }, 0);
});
