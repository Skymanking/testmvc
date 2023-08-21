//@*<script>
//    function AddRow() {
//        //Reference the GridView.
//        var gridView = document.getElementById("gvCustomers");
//        //Reference the TBODY tag.
//        var tbody = gridView.getElementsByTagName("tbody")[0];
//        //Reference the first row.
//        var row = tbody.getElementsByTagName("tr")[0];
//        //Check if row is dummy, if yes then remove.
//        if (row.getElementsByTagName("td")[0].innerHTML.replace(/s/g, '') == "") {
//            tbody.removeChild(row);
//        }
//        //Clone the reference first row.
//        row = row.cloneNode(true);
//        //Add the Name value to first cell.
//        var index =tbody.childElementCount;
//        SetValueRow(row, index);
//        index++;
//        //Add the row to the GridView.
//        tbody.appendChild(row);

//    }
//function SetValueRow(row, index) {
//    var col0 = document.createElement("p");
//    col0.name = "model.detail["+index+"].No";
//    col0.innerHTML = index + 1;
//    row.cells[0].appendChild(col0);

//    var col1 = document.createElement("input");
//    col1.name = "model.detail[" + index + "].MaterialName";
//    col1.value = index + 1;
//    col1.className = "form-control";
//    row.cells[1].appendChild(col1);

//    var col2 = document.createElement("input");
//    col2.name = "model.detail[" + index + "].Note";
//    col2.value = index + 1;
//    col2.className = "form-control";
//    row.cells[2].appendChild(col2);

//    var col3 = document.createElement("input");
//    col3.name = "model.detail[" + index + "].Unit";
//    col3.value = index + 1;
//    col3.className = "form-control";
//    row.cells[3].appendChild(col3);

//    var col4 = document.createElement("input");
//    col4.name = "model.detail[" + index + "].Quantity";
//    col4.value = index + 1;
//    col4.className = "form-control";
//    row.cells[4].appendChild(col4);
//}
//</script>*@
         
function AddRow(dropdownlist,row1,row2) {
    //Reference the GridView.
    var gridView = document.getElementById("gvCustomers");
    //Reference the TBODY tag.
    var tbody = gridView.getElementsByTagName("tbody")[0];
    //Reference the first row.
    var row = tbody.getElementsByTagName("tr")[1];
    //Check if row is dummy, if yes then remove.
    if (row.getElementsByTagName("td")[0].innerHTML.replace(/\s/g, '') == "") {
        tbody.removeChild(row);
    }
    //Clone the reference first row.
    row = row.cloneNode(true);
    //Add the Name value to first cell.
    var dropdown = document.getElementById(dropdownlist);
    GetValueDDL(row, 0, row1, dropdown);
    GetTextDDL(row, 1, row2, dropdown);
    //Add the row to the GridView.
    tbody.appendChild(row);
    return false;
}
        
function GetValueDDL(row, index, name, dropdown) {
    row.cells[index].innerHTML = dropdown.value;
    var input = document.createElement("input");
    input.type = "hidden";
    input.name = name;
    input.value = dropdown.value;
    row.cells[index].appendChild(input);
}
function GetTextDDL(row, index, name, dropdown) {
    row.cells[index].innerHTML = dropdown.options[dropdown.selectedIndex].innerHTML;
    var input = document.createElement("input");
    input.type = "hidden";
    input.name = name;
    input.value = dropdown.options[dropdown.selectedIndex].innerHTML;
    row.cells[index].appendChild(input);
}

function delrow(rowindex)
{
    var gridID = document.getElementById("gvCustomers");
    gridID.deleteRow(rowindex + 1);
    return false;
}