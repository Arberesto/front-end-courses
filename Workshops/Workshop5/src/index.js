import './styles/main.scss';

import indexTemplate from './pages/index/index.hbs';
import articleTemplate from './components/article/article.hbs';
import spinnerTemplate from './components/spinner/spinner.hbs';

const urls = [
  'data1.json',
  'data2.json',
  'data3.json',
  'data4.json'
];


document.addEventListener("DOMContentLoaded", function() {
  const root = $('#root');
  root.append(indexTemplate());
  const content = $('.content');

  /**
   * Place your code here
   */

   var promises = [];
  
   urls.forEach(function(item, i, arr) {
    promises.push(fetch('/api/' + item)
       .then(function(response) {
       return response.json();
        }).catch(
            (error) => {
                console.log(error.message);
            })
    )
   });

   Promise.all(promises)
   .then(function(responses) {
       responses.forEach( (responce) => {
                if (responce) {
                    responce.data.forEach((item) => {
                        content.append(articleTemplate(item));
                    })
                }
           }
       );
   })
  .catch(error => {
      console.log(error.message);
  });

});
