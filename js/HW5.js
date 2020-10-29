/*
Name:Sarthak Bhagat
email: Sarthak_bhagat@student.uml.edu
Course name: GUI I
Assingment #5- Creating an Interactive Dynamic Table
File type: .js file
  Sources used: https://www.npmjs.com/package/rules-js
  https://www.w3schools.com/js/js_validation.asp
*/

function passIntoTable() {
  /* Creates variable by taking input from index.html and converts them into an integer value*/
  var min_Col = Number(document.getElementById("mic").value);
  var max_Col = Number(document.getElementById("mac").value);
  var min_Row = Number(document.getElementById("mir").value);
  var max_Row = Number(document.getElementById("mar").value);

  /*Checks if the input is an integer. Otherwise, sends out an alert.
  If an integer is passed then function is used */

  if (!Number.isInteger(min_Col) || !Number.isInteger(max_Col) ||
    !Number.isInteger(min_Row) || !Number.isInteger(max_Row)) {
    alert("Please enter only integers");
  } else {
    make_Table(min_Col, max_Col, min_Row, max_Row);
  }
}


/* This function creates Table by taking in user input on the form */
function make_Table(min_Col, max_Col, min_Row, max_Row) {

  /* Alert message when Minimum Value greater than Maximum Value*/
  if (min_Col > max_Col || min_Row > max_Row) {
    alert("End value has to be greater. Minimum value cannot be greater than Maximum value. Check your inputs and try again!");
  }

  /* this code is implemented if the values are entered correctly and follow the rules */
  else {
    var result = "<tr><th> </th>"; /* Empty value will have a  (0,0) axis. */

    /* Adds the values for the horizontal inputs. */
    for (var i = min_Col; i <= max_Col; i++) {
      result += "<th>" + i + "</th>";
    }
    result += "</tr>";

    /* Adds the values for the vertical inputs. */
    for (var j = min_Row; j <= max_Row; j++) {
      result += "<tr><th>" + j + "</th>";
      for (var k = min_Col; k <= max_Col; k++) {
        result += "<td>" + j * k + "</td>";
      }
      result += "</tr>";
    }

    /*prints the location of the file */
    document.getElementById("print_table").innerHTML = result;
  }
}
