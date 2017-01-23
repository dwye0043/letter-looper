// Prompt user to enter a letter
var letter; 

while (!letter) {
    letter = prompt("Please enter a letter:");
}

/* 
  Print the letter in a triangle, so the first line is the letter once,
  the second line is the letter twice, and so on up to 10 times.
*/
var i;
var k;

for (i = 0; i < 10; i += 1) {
    
    for (k = 0; k <= i; k += 1) {
        document.write(letter);
    }
    
    document.write("<br>");
    
}
