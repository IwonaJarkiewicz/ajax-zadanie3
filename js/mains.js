'use strict'
$(function () {
    $(window).scroll(function () {
        //console.log('test');
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
            //console.log('')
            $.ajax({
                url: 'https://jsonplaceholder.typicode.com/users',
                dataType: 'json',
                success: function (response) {

                    var beginOfData = document.createElement('p');
                    var endOfData = document.createElement('p');

                    beginOfData.innerHTML = '<br>--------Begin of data--------<br><br>';
                    beginOfData.innerHTML = '<br>--------Begin of data--------<br><br>';

                    document.body.appendChild(beginOfData);

                    response.forEach(function (element) {
                        var pUserId = document.createElement('p');
                        var pUserName = document.createElement('p');
                        var pUserURL = document.createElement('p');

                        pUserId.innerHTML = element.id;
                        pUserName.innerHTML = element.username;
                        pUserURL.innerHTML = element.website;

                        document.body.appendChild(pUserId);
                        document.body.appendChild(pUserName);
                        document.body.appendChild(pUserURL);
                    });

                    document.body.appendChild(endOfData);

                },
                onerror: function (msg) {
                    console.log(error);
                }
            });
        }
    });
});
