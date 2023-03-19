// Function for slideshow, with index variables initialised at start

let slideIndex = 0;
showSlides();
function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1};
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 3500); // Change image every 3.5 seconds
}



 $(document).ready(function() {

        $('#tableBody').empty();
        //ajax call to load XML and parse it
        $.ajax({
            type: 'GET',
            url: 'movies.xml',
            dataType: 'xml',
            success: function(xml) {
               //find all movie tags, loop through them and append to table body on page
                $(xml).find('movie').each(function() {

                    // Append new data to the table body element.
                    $('#tableBody').append(
                        '<tr>' +
                            '<td>' +
                                $(this).find('Name').text() + '</td> ' +
                            '<td>' +
                                $(this).find('Genre').text() + '</td> ' +
                            '<td>' +
                                $(this).find('Cast').text() + '</td> ' +
                            '<td>' +
                                $(this).find('Year').text() + '</td> ' +
                            '<td>' +
                        '</tr>'
                        );
                });
            }
        });
});