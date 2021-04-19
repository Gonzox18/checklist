var checklist_form = document.getElementById("checklist-form");
var main_btn = document.getElementById("main_btn")


function getChecklist(event) {


    var form = event.target.form;
    var data = new FormData(form).values();
    let row = document.createElement("tr");
    for (const input of data) {
        if (input) {
            let inputcontainer = document.createElement("td");
            inputcontainer.innerText = input;
            row.appendChild(inputcontainer);
        }
    }

    var table = document.getElementById("table-body");
    table.appendChild(row);

}

main_btn.onclick = getChecklist;


