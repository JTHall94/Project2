let apiRequest = new XMLHttpRequest();
let menu = document.getElementById('menu');
let entree_1 = document.getElementById('entree-1');
let entree_2 = document.getElementById('entree-2');
let entree_3 = document.getElementById('entree-3');
let entree_4 = document.getElementById('entree-4');
let entree_5 = document.getElementById('entree-5');
let entree_6 = document.getElementById('entree-6');
let entree_7 = document.getElementById('entree-7');
let entree_8 = document.getElementById('entree-8');

document.onreadystatechange = function () {
  if (document.readyState == "interactive") {
    getMenu();
  }
};

function getMenu() {
  let url = 'https://entree-f18.herokuapp.com/v1/menu';
  apiRequest.onload = onSuccess;
  apiRequest.onerror = onError;
  apiRequest.open('get', url, true);
  apiRequest.send();
}

function onSuccess() {
  console.log(apiRequest);

  if (apiRequest.status == "200") {
    let response = JSON.parse(apiRequest.responseText);
    let menu_items = response.menu_items;
    entree_1.innerHTML = JSON.stringify(menu_items[0]).slice(16, -2);
    entree_2.innerHTML = JSON.stringify(menu_items[1]).slice(16, -2);
    entree_3.innerHTML = JSON.stringify(menu_items[2]).slice(16, -2);
    entree_4.innerHTML = JSON.stringify(menu_items[3]).slice(16, -2);
    entree_5.innerHTML = JSON.stringify(menu_items[4]).slice(16, -2);
    entree_6.innerHTML = JSON.stringify(menu_items[5]).slice(16, -2);
    entree_7.innerHTML = JSON.stringify(menu_items[6]).slice(16, -2);
    entree_8.innerHTML = JSON.stringify(menu_items[7]).slice(16, -2);
  } else {
    onError();
  }
}

function onError() {
  alert = 'NOOOO!';
}