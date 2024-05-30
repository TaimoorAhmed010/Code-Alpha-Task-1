function calculateAge() {
  var d1 = parseInt(document.getElementById('date').value);
  var m1 = parseInt(document.getElementById('month').value);
  var y1 = parseInt(document.getElementById('year').value);

  if (isNaN(d1) || isNaN(m1) || isNaN(y1)) {
    document.getElementById('age').innerHTML = 'Please enter a valid date of birth';
    return;
  }

  var today = new Date();
  var d2 = today.getDate();
  var m2 = today.getMonth() + 1; // Months are zero-based
  var y2 = today.getFullYear();

  var monthDays = [31, (y2 % 4 == 0 && y2 % 100 != 0) || (y2 % 400 == 0) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  if (d1 > d2) {
    d2 += monthDays[m2 - 1];
    m2--;
  }

  if (m1 > m2) {
    m2 += 12;
    y2--;
  }

  var d = d2 - d1;
  var m = m2 - m1;
  var y = y2 - y1;

  document.getElementById('age').innerHTML = 'Your Age is ' + y + ' Years ' + m + ' Months ' + d + ' Days';
}