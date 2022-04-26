fetch('https://yesno.wtf/api')
    .then(response => response.json())
    .then(
        data => {
            document.getElementById('print-here').innerHTML = "<h2>" + data.answer + "</h2>";
            document.getElementById('print-here').innerHTML += "<img src=\"" + data.image + "\"/>";
            document.getElementById('print-here').innerHTML += '<img src="' + data.image + '">';
        }
    );
