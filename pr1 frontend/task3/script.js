document.addEventListener('DOMContentLoaded', function () {

    var listItemsWithSublists = document.querySelectorAll('ul > li');


    listItemsWithSublists.forEach(function (listItem) {

        listItem.addEventListener('click', function () {

            closeAllSublists();


            var sublist = listItem.querySelector('ul');
            if (sublist) {
                sublist.style.display = (sublist.style.display === 'block') ? 'none' : 'block';
            }
        });
    });


    function closeAllSublists() {
        var allSublists = document.querySelectorAll('ul ul');
        allSublists.forEach(function (sublist) {
            sublist.style.display = 'none';
        });
    }
});
