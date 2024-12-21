function setSessionSel(event) {
	var sessionText =document.getElementById("selSessions").value;
	mTable = document.getElementById("mainTable"); //NOSONAR Global Variable

	//alert(sessionText);
	rows = mTable.tBodies[0].rows; //NOSONAR Global Variable
	for (let i=0; i<rows.length; i++) {
		rowSessionMain = rows[i].cells[0].innerHTML; //NOSONAR Global Variable
		if (rowSessionMain == sessionText || sessionText=="All") {
			rows[i].style.display='';
		} else {
			rows[i].className = "listRow";
			rows[i].style.display='none';

		}
	}
	// Add functionality to recalculate the average
	var el = document.getElementById("topCred");
	showTop(el.value);
}