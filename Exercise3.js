/*<p>Exercise 6, Arrays: f6 should take array parameters and return an integer.</p>
<p>Create a function f6 to return the sum of all the multiples of factors in a 
    found in in l (a and l should be arrays of integers)</p>
<p>(Exercise 6.1) Create a page with a button and two wide input boxes, labelled a and l</p>
<p>Call the function f6 in the function called by onClick, and alert the user to the 
    returned answer when they press the button.</p>
</p>
<p>You may find the split function useful for creating arrays from the strings entered: <a href="https://www.w3schools.com/jsref/jsref_split.asp">Split</a></p>*/
function f6(a, l) {
    let sum = 0;
    for (let i = 0; i < l.length; i++) {
        for (let j = 0; j < a.length; j++) {
            if (l[i] % a[j] === 0) {
                sum += l[i];
                break;
            }
        }
    }
    return sum;
}
function calculate6() {
    let a = document.getElementById('inputA').value.split(',').map(Number); 
    let l = document.getElementById('inputL').value.split(',').map(Number);

    let result = f6(a, l);
    alert('The sum of all multiples of factors in array a found in array l is: ' + result);
}