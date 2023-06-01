// Obtener el elemento del menú desplegable
var menu = document.getElementById("menuItems");

// Cargar el JSON utilizando AJAX
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
  if (xhr.readyState === 4 && xhr.status === 200) {
    var menuData = JSON.parse(xhr.responseText);

    // Generar los elementos del menú dinámicamente
    menuData.menu.forEach(function(item) {
      var menuItem = document.createElement("div");
      menuItem.className = "dropdown";

      var menuButton = document.createElement("button");
      menuButton.innerText = item.name;

      var submenu = document.createElement("div");
      submenu.className = "dropdown-content";

      if (item.submenu && item.submenu.length > 0) {
        item.submenu.forEach(function(subitem) {
          var subLink = document.createElement("a");
          subLink.href = subitem.url;
          subLink.innerText = subitem.name;
          submenu.appendChild(subLink);
        });
      }

      menuItem.appendChild(menuButton);
      menuItem.appendChild(submenu);
      menu.appendChild(menuItem);
    });
  }
};
xhr.open("GET", "menu.json", true);
xhr.send();


//El elemento del menú desplegable
var menu = document.getElementById("menuItems");
/********************************************************************************* */
// Cargar el JSON utilizando AJAX
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
  if (xhr.readyState === 4 && xhr.status === 200) {
    var menuData = JSON.parse(xhr.responseText);

    // Generar los elementos del menú dinámicamente
    generateMenu(menuData.menu, menu);
  }
};
xhr.open("GET", "menu.json", true);
xhr.send();
/********************************************************************************* */
// Cargar el JSON utilizando AJAX
function generateMenu(menuItems, parentElement) {
  menuItems.forEach(function(item) {
    var menuItem = document.createElement("div");
    menuItem.className = "dropdown";

    var menuButton = document.createElement("button");
    menuButton.innerText = item.name;

    var submenu = document.createElement("div");
    submenu.className = "dropdown-content";

    if (item.submenu && item.submenu.length > 0) {
      generateMenu(item.submenu, submenu);
    }

    menuItem.appendChild(menuButton);
    menuItem.appendChild(submenu);
    parentElement.appendChild(menuItem);
  });
}
