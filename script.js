function insert_Row() {
    var table = getElementById("sampleTable")
	var newRow = table.insert_Row(0)
	var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
	cell1.innerHTML="New Cell1"
	cell2.innerHTML="New Cell2"
}
