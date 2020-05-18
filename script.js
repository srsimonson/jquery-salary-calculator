$( document ).ready( readyNow );
function readyNow(){
    // functions get called here:
    $('#submitButton').on('click', handleSubmit);
    $('#employeeList').on('deleteBtn').on('click', '.deleteBtn', deleteItem);
    

} // end readyNow

// functions get created here
const totalBudget = 15000;
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
    displayToDom( employeeArray );
    // tallyMonthlyExpenses( monthlyExpenses );

    
    // displayEmployeeTable ( employeeArray );
} // end handleSubmit function


// function displayEmployeeList( arrayParam ) {
//     $('#employeeList').empty();
//     for (let i=0; i<arrayParam.length; i++) {
//         monthlyExpenses.push( (arrayParam[i].annualSalary / 12));
//         console.log('monthlyExpenses', monthlyExpenses);
//         console.log('arrayParam[i].annualSalary', arrayParam[i].annualSalary);
    
//         $('#employeeList').append(`
//         <li>
//         ${arrayParam[i].firstName}
//         ${arrayParam[i].lastName}
//         ${arrayParam[i].idNumber}
//         ${arrayParam[i].title}
//         ${arrayParam[i].annualSalary} 
//         <button class="deleteBtn">delete</button>
//         </li>`)
//     }
//     //monthlyExpenses.pop();
// }

function deleteItem(){
    console.log('in deleteItem:');
    // when delete item, remove from the DOM
    // $(this).remove(); = removes "this" or the button
    $(this).parent().remove();
}

function displayToDom(  ) {
    let x = 0;
    let monthlyLabor = 0;
    $('#employeeList').empty();
    $('#totalSalaries').empty();
    for (let i=0; i<employeeArray.length; i++) {
        //monthlyExpenses.push(( arrayParam[i].annualSalary / 12 ));
        monthlyLabor = monthlyLabor + Number((employeeArray[i].annualSalary / 12));
        
        console.log('monthlyLabor', monthlyLabor);
        console.log('arrayParam[i].annualSalary:', employeeArray[i].annualSalary);
        console.log('test log');
        $('#employeeList').append(
        `<li>
            ${employeeArray[i].firstName}
            ${employeeArray[i].lastName}
            ${employeeArray[i].idNumber}
            ${employeeArray[i].title}
            ${employeeArray[i].annualSalary} 
            <button class="deleteBtn">delete</button>
        </li>`)
        $('#totalSalaries').append(monthlyLabor);
    } // end for loop
    x = x + monthlyLabor;
    //x.push(monthlyLabor);
    console.log('x post push', x);
    $('#totalSalaries').empty();
    $('#totalSalaries').append(x);
    
} // end displayToDom

// function appendEmployee() {
//     $('#iAppend').empty();
//     annualLabor = 0;
//     for (let i = 0; i < employeesEntered.length; i++) {
//         annualLabor += Number(employeesEntered[i].annualSalaryEntry);
//         // console.log('annualLabor', annualLabor); //Functions as intended
//         $('#iAppend').append(`
//         <tr>  
//             <td>${employeesEntered[i].firstNameEntry}</td>
//             <td>${employeesEntered[i].lastNameEntry}</td>
//             <td>${employeesEntered[i].iDEntry}</td>  
//             <td>${employeesEntered[i].jobTitleEntry}</td>
//             <td>${employeesEntered[i].annualSalaryEntry}</td>
//             <td><button class = "deleteBtn">Delete</button></td> 
//APPENDS our variables ^ to their respective fields
//         </tr>
//Also creates a delete button to be displayed inline with other appendages. :]
    
//         `);
//     }
//     calcMonthlyCost(); //calling our new function calcMonthlyCost which we will use to help us put an inline "counter" on monthlyLabor
// }




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