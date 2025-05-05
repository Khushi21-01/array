/*<p>Exercise 5, Arrays: f5 should take array parameters and return an integer.</p>
<p>Create a function f5 to return the sum of all the multiples of factors in a 
    found in in l (a and l should be arrays of integers, a is of length 2)</p>
<p>(Exercise 5.1) Create a page with a button and two wide input boxes, labelled a and l</p>
<p>Call the function f5 in the function called by onClick, and alert the user to the 
    returned answer when they press the button.</p>*/
function f5(a, l) {
    let sum = 0;
    for (let i = 0; i < l.length; i++) {
        if (l[i] % a[0] == 0 || l[i] % a[1] == 0) {
            sum += l[i];
        }
    }
    return sum;
}

function calculate5() {
    let a = document.getElementById('inputA').value.split(',').map(Number); 
    let l = document.getElementById('inputL').value.split(',').map(Number); 

    if (a.length !== 2) {
        alert('Please enter exactly two integers for array a.');
        return;
    }

    let result = f5(a, l);
    alert('The sum of all multiples of factors in array a found in array l is: ' + result);
}