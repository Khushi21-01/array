/*<p>Exercise 5, Arrays: f5 should take array parameters and return an integer.</p>
<p>Create a function f5 to return the sum of all the multiples of factors in a 
    found in in l (a and l should be arrays of integers, a is of length 2)</p>
<p>(Exercise 5.1) Create a page with a button and two wide input boxes, labelled a and l</p>
<p>Call the function f5 in the function called by onClick, and alert the user to the 
    returned answer when they press the button.</p>*/
function f5(c, n) {
    let sum = 0;
    for (let i = 0; i < n.length; i++) {
        if (n[i] % c[0] === 0 || n[i] % c[1] === 0) {
            sum += l[i];
        }
    }
    return sum;
}

function calculate5() {
    let c = document.getElementById('inputC').value.split(',').map(Number); 
    let n = document.getElementById('inputN').value.split(',').map(Number); 

    if (c.length !== 2) {
        alert('Please enter exactly two integers for array c.');
        return;
    }

    let result = f5(c, n);
    alert('The sum of all multiples of factors in array c found in array n is: ' + result);
}