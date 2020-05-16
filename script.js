$( document ).ready( readyNow );
function readyNow(){
    // functions get called here:
    $('#submitButton').on('click', handleSubmit);


} // end readyNow

// functions get created here
let employeeArray = []; // empty array of employees to be pushed
function handleSubmit() { // what happens when you click submit
    let firstName = $( '.firstName' ).val(); // retrieve data from DOM input
    let lastName = $( '.lastName' ).val();
    let idNumber = $( '.idNumber' ).val();
    let title = $( '.title' ).val();
    let annualSalary = $( '.annualSalary' ).val();
    let employeeObject = { // empty employee object
        firstName: firstName,
        lastName: lastName,
        idNumber: idNumber,
        title: title,
        annualSalary: annualSalary
    } // end employeeObject
    employeeArray.push( employeeObject ); // push employee object into employee array
    $( '.firstName' ).val(''); // clear out name values
    $( '.lastName' ).val('');
    $( '.idNumber' ).val('');
    $( '.title' ).val('');
    $( '.annualSalary' ).val('');
    displayEmployeeTable ( employeeArray ); // not running?
    console.log('employeeArray:', employeeArray);
} // end handleSubmit function

function displayEmployeeTable( arrayParam ) {
    // $( '#employeeTable').empty();
    for ( let i=0; i<arrayParam.length; i++ )
    $('employeeTable').append(`
            <td>${arrayParam[i].firstName}</td>
            <td>${arrayParam[i].lastName}</td>
            <td>${arrayParam[i].idNumber}</td>
            <td>${arrayParam[i].title}</td>
            <td>${arrayParam[i].annualSalary}</td>
        `);
}


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