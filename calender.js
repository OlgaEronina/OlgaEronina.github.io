window.onload = function () {
    var d = new Date();
    console.log(d);
    var monthNames = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
    var month = d.getMonth();
    var year = d.getFullYear();
    var firstDate = monthNames[month] + ' ' + 1 + ' ' + year;
    var tmp = new Date(firstDate).toDateString();
    console.log(firstDay);
    var firstDay = tmp.substring(0, 3);
    var dayName = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    var dayNumber = dayName.indexOf(firstDay);
    var days = new Date(year, month + 1, 0).getDate();
    var calendar = getCalendar(dayNumber, days);
    var leftArrow = document.querySelector('.fa-arrow-left');
    leftArrow.onclick = function(){
        alert('OK')
    }
    document.getElementById('calendar-month-year').innerHTML = monthNames[month] + " " + year;
    document.getElementById('calendar-dates').appendChild(calendar);
}

function getCalendar(dayNumber, days) {
    var table = document.createElement('table');
    var tr = document.createElement('tr');

    for (var c = 0; c <= 6; c++) {
        var td = document.createElement('td');
        td.innerHTML = 'SMTWTFS' [c];
        tr.appendChild(td);
    }
    table.appendChild(tr);

    tr = document.createElement('tr');
    var c;
    for (c = 0; c <= 6; c++) {
        if (c == dayNumber) {
            break;
        }
        var td = document.createElement('td');
        td.innerHTML = '';
        tr.appendChild(td);
    }

    var count = 1;
    for (; c <= 6; c++) {
        var td = document.createElement('td');
        td.innerHTML = count;
        count++;
        tr.appendChild(td);
    }
    table.appendChild(tr);

    for (var r = 3; r <= 7; r++) {
        tr = document.createElement('tr');
        for (var c = 0; c <= 6; c++) {
            if (count > days) {
                table.appendChild(tr);
                return table;
            }
            var td = document.createElement('td');
            td.innerHTML = count;
            count++;
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    return table;
}