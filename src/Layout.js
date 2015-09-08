window.addEventListener("hashchange", locationHashChanged, false);

var page = [];

window.NavigationHashMap = new weavecore.LinkableHashMap();
var activePage = window.NavigationHashMap.requestObject("activePage", weavecore.LinkableString);


function locationHashChanged() {
    try {
        activePage.value = window.location.hash.substr(1) || '/';
    } catch (err) {
        activePage.value = 'error';
    }
}
