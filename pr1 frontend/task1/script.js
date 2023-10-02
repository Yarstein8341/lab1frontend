const checkboxes = document.querySelectorAll('input[type="checkbox"]');

checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('change', function () {
        checkboxes.forEach((otherCheckbox) => {
            if (otherCheckbox !== checkbox) {
                if (otherCheckbox.checked) {
                    otherCheckbox.checked = false;
                }
            }
        });
    });
});


