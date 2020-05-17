$( document ).ready( readyNow );
function readyNow(){
    // functions get called here:
    $('#submitButton').on('click', handleSubmit);
    $('#employeeList').on('deleteBtn').on('click', '.deleteBtn', deleteItem);


} // end readyNow

// functions get created here
const totalBudget = 15000;
let monthlyExpenses = [];

let employeeArray = []; // empty array of employees to be pushed
function handleSubmit() { // what happens when you click submit
    let firstName = $( '.firstName' ).val(); // retrieve data from DOM input
    let lastName = $( '.lastName' ).val();
    let idNumber = $( '.idNumber' ).val();
    let title = $( '.title' ).val();
    let annualSalary = $( '.annualSalary' ).val();
    let employeeObject = {
        firstName: firstName,
        lastName: lastName,
        idNumber: idNumber,
        title: title,
        annualSalary: annualSalary
    } // end employeeObject

    employeeArray.push( employeeObject ); // push employee object into employee array
    $( '.firstName' ).val('');
    $( '.lastName' ).val('');
    $( '.idNumber' ).val('');
    $( '.title' ).val('');
    $( '.annualSalary' ).val('');
    displayEmployeeList(employeeArray);
    
    // displayEmployeeTable ( employeeArray );
} // end handleSubmit function


function displayEmployeeList( arrayParam ) {
    $('#employeeList').empty();
    for (let i=0; i<arrayParam.length; i++) {
        monthlyExpenses.push( (arrayParam[i].annualSalary / 12));
        console.log('monthlyExpenses', monthlyExpenses);
        console.log('arrayParam[i].annualSalary', arrayParam[i].annualSalary);
        
        $('#employeeList').append(`
        <li>
        ${arrayParam[i].firstName}
        ${arrayParam[i].lastName}
        ${arrayParam[i].idNumber}
        ${arrayParam[i].title}
        ${arrayParam[i].annualSalary} 
        <button class="deleteBtn">delete</button>
        </li>`)
    }
    //monthlyExpenses.pop();
}

function deleteItem(){
    console.log('in deleteItem:');
    // when delete item, remove from the DOM
    // $(this).remove(); = removes "this" or the button
    $(this).parent().remove();
}

function displayEmployeeList( arrayParam ) {
    $('#employeeList').empty();
    for (let i=0; i<arrayParam.length; i++) {
        monthlyExpenses.push( (arrayParam[i].annualSalary / 12));
        console.log('monthlyExpenses', monthlyExpenses);
        console.log('test log');
        
        $('#employeeList').append(`
        <li>
        ${arrayParam[i].firstName}
        ${arrayParam[i].lastName}
        ${arrayParam[i].idNumber}
        ${arrayParam[i].title}
        ${arrayParam[i].annualSalary} 
        <button class="deleteBtn">delete</button>
        </li>`)
    }
    //monthlyExpenses.pop();
}





























// function displayEmployeeTable( arrayParam ) {
//     // $( '#employeeTable').empty();
//     for ( let i=0; i<arrayParam.length; i++ )
//     console.log('in displayEmployeeTable:');
//     $('employeeTable').append();
// }


// function displayEmployeeTable ( arrayParam ) {
//     $( '#employeeTable' ).empty();
//     $( '#submitButton').on('click', newRow)

// } // end displayEmployeeTable function

// function newRow () {
//     // let first = $( '.firstName' ).val('');
//     // let last = $( '.lastName' ).val('');
//     // let idNumber = $( '.idNumber' ).val('');
//     // let title = $( '.title' ).val('');
//     // let annualSalary = $( '.annualSalary' ).val('');
//     $( '#peopleList').empty();
//     for ( let i=0; i<arrayParam.length; i++ )
//     // $('#peopleList').append(`
//     //         <td>${arrayParam[i].firstName}</td>
//     //         <td>${arrayParam[i].lastName}</td>
//     //         <td>${arrayParam[i].idNumber}</td>
//     //         <td>${arrayParam[i].title}</td>
//     //         <td>${arrayParam[i].annualSalary}</td>
//     //     `);
//     let markup = `
//     <tr>
//         <td>${arrayParam[i].firstName}</td>
//         <td>w</td>
//         <td>e</td>
//         <td>r</td>
//         <td>t</td>
//         <td><button class="deleteBtn">delete</button></td>
//     </tr>`;
//     $("table tbody").append(markup);
//     // or let button = `<li>${arrayParam[i].firstName} ${arrayParam[i].lastName}<button class="deleteBtn">delete<button></li>`
// } // end newRow function


// const row = tr td. append(row)
// delete row
// function deleterow is a loop

// let row = (<th>
//     <td>${arrayParam[i].firstName}</td>
//     <td>${arrayParam[i].lastName}</td>
//     <td>${arrayParam[i].idNumber}</td>
//     <td>${arrayParam[i].title}</td>
//     <td>${arrayParam[i].annualSalary}</td>
// </th>);


// `
//     <td>${arrayParam[i].firstName}</td>
//     <td>${arrayParam[i].lastName}</td>
//     <td>${arrayParam[i].idNumber}</td>
//     <td>${arrayParam[i].title}</td>
//     <td>${arrayParam[i].annualSalary}</td>