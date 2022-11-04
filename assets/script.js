

var timeDisplayEl = $('#current-date');

function displayDay() {
    var rightNow = moment ().format('dddd, MMMM DD, YYYY');
    timeDisplayEl.text(rightNow);
}
  
setInterval(displayDay, 1000);
console.log(displayDay)





