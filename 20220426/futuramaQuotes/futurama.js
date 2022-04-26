fetch('http://futuramaapi.herokuapp.com/api/quotes')
    .then(response => response.json())
    .then(data => {
        // Data haettu -> käsittele
        // Luo ul-elementti
        let ul = document.createElement('ul');
        // Looppaa array läpi
        data.forEach(quote => {
            // Luo li-elementti
            let li = document.createElement('li');
            // Aseta sisältö li-elementille
            li.innerHTML = quote.quote;       
            // Lisää li-elementti ul-elementille
            ul.appendChild(li);
        });
        // Lisää ul-elementti domiin
        document.getElementById('print-here').appendChild(ul);
    });
