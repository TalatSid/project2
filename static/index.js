document.addEventListener('DOMContentLoaded', () => {

        document.querySelector('#chform').onsubmit = () => {

        const request = new XMLHttpRequest();
        const chnl = document.querySelector('#newchnl').value;

        request.open('POST', '/addchnl');

        request.onload = () => {

            const data = JSON.parse(request.responseText);
            data.forEach(add_list);
                            };

            const data = new FormData();
            request.send(data);
                        };
 
          function add_list(contents) {
            const li = document.createElement('li');
            li.innerHTML = contents;
            document.querySelector('chnlist').append(li);
                               };
});
