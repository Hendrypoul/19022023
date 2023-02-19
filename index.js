const bookNameElement = document.getElementById('book-name');
const issueToElement = document.getElementById('issue-to');
const btnElement = document.getElementById('btn');
const tableBody = document.queryselector('tbody');
const books = [{
    name: "Rd Sharma",
    issue: "Anshu",
    issuedAt: "",
    status: "not returned"
}];



function createTableRow (data, tableBody, id){
    const tr = document.createElement("tr");
    const idTd = document.createElement("td");
    idTd.textContent = id;
    const bookNameTd = document.createElement("td");
    bookNameTd.textContent = data.name;
    const issueToTd = document.createElement("td");
    issueToTd.textContent = data.issueTo;
    const issuedAtTd = document.createElement("td");
    issuedAtTd.textContent = data.issuedAt;
    const statusTd = document.createElement("td");
    statusTd.textContent = data.status;
    tr.appendChild(idTd);
    tr.appendChild(bookNameTd);
    tr.appendChild(issueToTd);
    tr.appendChild(issuedAtTd);   
    tr.appendChild(statusTd);
    tableBody.appendChild(tr);
}
function renderBooksInsideTable()  {
    books.map (function (book, index) {
        createTableRow(book, tableBody, index+1);    
    })
}
function handleFormSumbit () {
    const bookName = bookNameElement.value;
    const issuedTo = issueToElement.value;
    const book = {
        name: bookName,
        issuedTo: issuedTo,
        issuedAt: new Date().toUTCString(),
        status: 'not returned'
    }
}
renderBooksInsideTable();
