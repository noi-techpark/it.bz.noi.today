window.onload = function () {
    // locations where footer will be hidden
    const locations = ['foyer', 'd1', 'd6']

    const urlParams = new URLSearchParams(window.location.search);
    const locationParam = urlParams.get("location");
    if (locationParam && locations.includes(locationParam.toLocaleLowerCase())) {
        const footer = document.getElementById("footer");
        footer.style.display = 'none';
    }
}