const body = document.querySelector('body');

const table = document.createElement('table');
body.appendChild(table);

const thead = document.createElement('thead');
table.appendChild(thead);

const tr1 = document.createElement('tr');
thead.appendChild(tr1);

const th1 = document.createElement('th');
th1.textContent = "ID";
const th2 = document.createElement('th');
th2.textContent = "NAME";
const th3 = document.createElement('th');
th3.textContent = "LOCATION";
const th4 = document.createElement('th');
th4.textContent = "DESIGNATION";
const th5 = document.createElement('th');
th5.textContent = "EXPERIENCE";
tr1.append(th1, th2, th3, th4, th5);

const tbody = document.createElement('tbody');
table.appendChild(tbody);
const tr2 = document.createElement('tr');
const tr3 = document.createElement('tr');
const tr4 = document.createElement('tr');
const tr5 = document.createElement('tr');
const tr6 = document.createElement('tr');
tbody.append(tr2, tr3, tr4, tr5, tr6);


let td1  = document.createElement('td');
td1.textContent = "101";
let td2  = document.createElement('td');
td2.textContent = "Prerit";
let td3  = document.createElement('td');
td3.textContent = "Delhi";
let td4  = document.createElement('td');
td4.textContent = "Software Intern";
let td5  = document.createElement('td');
td5.textContent = "Fresher";
tr2.append(td1, td2, td3, td4, td5);

td1  = document.createElement('td');
td1.textContent = "102";
td2  = document.createElement('td');
td2.textContent = "Riya Goyal";
td3  = document.createElement('td');
td3.textContent = "Noida";
td4  = document.createElement('td');
td4.textContent = "Software Intern";
td5  = document.createElement('td');
td5.textContent = "Fresher";
tr3.append(td1, td2, td3, td4, td5);

td1  = document.createElement('td');
td1.textContent = "103";
td2  = document.createElement('td');
td2.textContent = "Deep";
td3  = document.createElement('td');
td3.textContent = "Noida";
td4  = document.createElement('td');
td4.textContent = "Software Intern";
td5  = document.createElement('td');
td5.textContent = "Fresher"

tr4.append(td1, td2, td3, td4, td5);

td1  = document.createElement('td');
td1.textContent = "104";
td2  = document.createElement('td');
td2.textContent = "Saksham Kashyap";
td3  = document.createElement('td');
td3.textContent = "Delhi";
td4  = document.createElement('td');
td4.textContent = "Software Intern";
td5  = document.createElement('td');
td5.textContent = "Fresher";

tr5.append(td1, td2, td3, td4, td5);

td1  = document.createElement('td');
td1.textContent = "105";
td2  = document.createElement('td');
td2.textContent = "Varun Chetal";
td3  = document.createElement('td');
td3.textContent = "Haryana"
td4  = document.createElement('td');
td4.textContent = "Software Intern";
td5  = document.createElement('td');
td5.textContent = "Fresher";

tr6.append(td1, td2, td3, td4, td5);


//Styling:
table.style.border = "1px solid black";
const th = document.querySelectorAll('th');

    for(let i=0; i<th.length; i++){
        th[i].style.border = "1px solid black";
        th[i].style.padding = "10px";
    }

const td = document.querySelectorAll('td');

    for(let i=0; i<td.length; i++){
        td[i].style.border = "1px solid black";
        td[i].style.padding = "10px";
    }

    table.style.borderCollapse = "collapse";