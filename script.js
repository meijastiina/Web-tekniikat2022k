// Tapahtumankäsittelijä painikkeelle
document.getElementById("submit").onclick = function () {
    // Painiketta klikattu
    // Lue input-kentän sisältö
    let name = document.getElementById("name").value;
    // Jos kentässä sisältöä
    if ( name.length > 0 ) {
        // Näytä success-alert
        document.getElementById("form-success").style.display = "block";
        // Piilota danger-alert
        document.getElementById("form-error").style.display = "none";
    } else {
    // Jos ei 
        // Näytä danger-alert
        document.getElementById("form-error").style.display = "block";
        // Piilota success-alert
        document.getElementById("form-success").style.display = "none";
    }
    // Peruuta formin lähetys
    return false;
}
    