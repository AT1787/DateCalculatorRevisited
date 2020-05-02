const monthsObject = {
  '01': 'January',
  '02': 'February',
  '03': 'March',
  '04': 'April',
  '05': 'May',
  '06': 'June',
  '07': 'July',
  '08': 'August',
  '09': 'September',
  '10': 'October',
  '11': 'November',
  '12': 'December',
};

const talkingCalendar = function(date) {
  let year = date.slice(0,4);
  let month = date.slice(5,7);
  const day = function(num) {
    if (num[0] === '0') {
      num = num.slice(1,4);
    } else if (num[1] === '1') {
      num = num + 'st';
    } else if (num[1] === '2') {
      num = num + 'nd';
    } else if (day[1] === '3') {
      num = num + 'rd';
    } else {
      num = num + 'th';
    }
    return num;
  };

  for (let monthKey in monthsObject) {
    if (monthKey === month) {
      month = monthsObject[monthKey];
    }
  }

  return `${month} ${day(date.slice(8,10))} ${year}`;

};


  

console.log(talkingCalendar("2017/04/10"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));