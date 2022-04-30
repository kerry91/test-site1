(function (global) {

var dc = {};

var homeHtml = "pages/home.html";
var menuHtml = "pages/menu.html";

// Convenience function for inserting innerHTML for 'select'
var insertHtml = function (selector, html) {
  var targetElem = document.querySelector(selector);
  targetElem.innerHTML = html;
};

// Show loading icon inside element identified by 'selector'.
var showLoading = function (selector) {
  var html = "<div class='text-center'>";
  html += "<img src='images/ajax-loader.gif'></div>";
  insertHtml(selector, html);
};


// On page load (before images or CSS)
document.addEventListener("DOMContentLoaded", function (event) {

// On first load, show home view
showLoading("#main-content");
$ajaxUtils.sendGetRequest(
  homeHtml,
  function (responseText) {
    document.querySelector("#main-content")
      .innerHTML = responseText;
  },
  false);
});

//Load contacts page
dc.loadContacts = function () {
  showLoading("#main-content");
  $ajaxUtils.sendGetRequest(
  menuHtml,
  function (responseText) {
    document.querySelector("#main-content")
      .innerHTML = responseText;
  },
  false);
};

//Load about pagte
dc.loadAbout = function () {
  showLoading("#main-content");
  $ajaxUtils.sendGetRequest(
  menuHtml,
  function (responseText) {
    document.querySelector("#main-content")
      .innerHTML = responseText;
  },
  false);
};


global.$dc = dc;

})(window);

//Carousel
$('.carousel').carousel
      {
  interval: 2000
  pause: "hover"
};
