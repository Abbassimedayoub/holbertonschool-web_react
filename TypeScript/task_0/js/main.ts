interface Student {
    firstName: string,
    lastName: string,
    age: number,
    location: string,
}

const student1: Student = {
    firstName: "Shoes",
    lastName: "Cheese",
    age: 61,
    location: "EveryWhere"
};

const student2: Student = {
    firstName: "Capybara",
    lastName: "Potato",
    age: 33,
    location: "NotBornYet"
};

const studentsList: Array<Student> = [student1, student2]

const table: HTMLTableElement = document.createElement('table');

document.body.appendChild(table);

const thead: HTMLTableSectionElement = document.createElement('thead');
thead.innerHTML = '<tr><th>FirstName</th><th>Location</th></tr>';
table.appendChild(thead);
const tbody: HTMLTableSectionElement = document.createElement('tbody');
table.appendChild(tbody);
for (let i: number = 0; i < studentsList.length; i++) {
    const row: HTMLTableRowElement = document.createElement('tr');
    const th1: HTMLTableCellElement = document.createElement('th');
    const th2: HTMLTableCellElement = document.createElement('th');
    th1.innerHTML = studentsList[i].firstName;
    th2.innerHTML = studentsList[i].location;
    row.appendChild(th1);
    row.appendChild(th2);

    tbody.appendChild(row);
}
