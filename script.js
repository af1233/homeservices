// function toggleSearchBar() {
//     var searchBar = document.querySelector('.search-bar');
//     searchBar.style.display = (searchBar.style.display === 'block') ? 'none' : 'block';

// }
// function toggleSearch() {
//     var searchInput = document.querySelector('.search-input');
//     var searchIcon = document.querySelector('.search-icon');
//     var cancelIcon = document.querySelector('.cancel-icon');

//     if (searchInput.style.display === 'none' || searchInput.style.display === '') {
//         searchInput.style.display = 'inline-block';
//         searchInput.style.width = '150px'; /* Adjust width as needed */
//         searchIcon.style.display = 'none';
//         cancelIcon.style.display = 'inline-block';
//     } else {
//         searchInput.style.display = 'none';
//         searchInput.style.width = '0';
//         searchIcon.style.display = 'inline-block';
//         cancelIcon.style.display = 'none';
//     }
// }
function toggleSearch() {
    var searchInput = document.querySelector('.search-input');
    var searchIcon = document.querySelector('.search-icon');
    var cancelIcon = document.querySelector('.cancel-icon');

    if (searchInput.style.display === 'none' || searchInput.style.display === '') {
        searchInput.style.display = 'inline-block';
        searchInput.style.width = '250px'; /* Adjust width as needed */
        searchIcon.style.display = 'none';
        cancelIcon.style.display = 'inline-block';
    } else {
        searchInput.style.display = 'none';
        searchInput.style.width = '0';
        searchIcon.style.display = 'inline-block';
        cancelIcon.style.display = 'none';
    }
}
function toggleMenu() {
    var menuLinks = document.querySelector('.menu-links');
    menuLinks.style.display = menuLinks.style.display === 'block' ? 'none' : 'block';
  }

 