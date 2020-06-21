/*if ('serviceWorker' in navigator && 'PushManager' in window) {
  console.log('Service Worker and Push is supported');

  navigator.serviceWorker.register('sw.js')
    .then(function(swReg) {
      console.log('Service Worker is registered', swReg);

      swRegistration = swReg;
    })
    .catch(function(error) {
      console.error('Service Worker Error', error);
    });
} else {
  console.warn('Push messaging is not supported');
  //pushButton.textContent = 'Push Not Supported';
}
*/

console.log("Hello World!")
var date = new Date();
var n = date.getUTCDate();
console.log(n);

var startTime = new Date(date.getUTCFullYear(), 0, 1);
console.log(startTime);

var yearEndDay = new Date(date.getUTCFullYear(), 12, 1) 
console.log(yearEndDay);

var currentTime = new Date(date.getUTCFullYear(), date.getMonth(), date.getDate()) ;
console.log(currentTime);

day = 1000 * 3600 * 24;

diff = Math.round((yearEndDay.getTime())-(currentTime.getTime()));
console.log(diff);

Fdiff = diff/(day);
console.log('Remains',Fdiff.toFixed(0));

v = Fdiff.toFixed(0);


tot = Math.round((yearEndDay.getTime())-(startTime.getTime()));

u = (tot / (1000 * 3600 * 24));
console.log('total',tot / (1000 * 3600 * 24));

fina=(v/u)*100;
console.log("Final", fina);

document.querySelector('#p1').addEventListener('mdl-componentupgraded', function() {
    this.MaterialProgress.setProgress(100-fina);
  });
  
document.querySelector('#p2').innerHTML = ` ` +Math.round(100-fina);

function darkMode() {
  var element = document.body;
  element.classList.toggle("dark-mode");
};