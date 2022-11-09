function addRecord(
    recordIcon,
    recordName,
    recordUrl,
    description,
    developerName,
    developerUrl,
    date
) {
    //set record icon
    switch (recordIcon) {
        case "course":
            recordIcon = "course.png";
            break;
        case "exam":
            recordIcon = "exam.png";
            break;
        default:
            recordIcon = "assignment.png";
            break;
    }

    //get record download url
    const downloadUrl = recordUrl.replace("/index.html", "");

    var objTo = document.getElementById("table-data");
    var record = document.createElement("tr");
    record.innerHTML =
        "<td class='align-middle'> <div class='d-flex align-items-center'> <div> <img class='table-body-item-icon' src='src/assets/icons/" +
        recordIcon +
        "' alt='assignment icon' /> </div> <div class='ms-3 lh-1'> <h5 class='mb-1'> <a class='text-inherit' href='" +
        recordUrl +
        "' target='_blank' >" +
        recordName +
        "</a> </h5> </div> </div> </td> <td class='align-middle'>" +
        description +
        "</td> <td class='align-middle'> <a class='btn btn-success' href='" +
        developerUrl +
        "' target='_blank' > " +
        developerName +
        " </a> </td> <td class='align-middle'>" +
        date +
        "</td> <td class='align-middle'> <a class='btn btn-success' href='https://minhaskamal.github.io/DownGit/#/home?url=https:%2F%2Fgithub.com%2FUUinc%2FJS-Solutions%2Ftree%2Fmain%2F" +
        downloadUrl +
        "' target='_blank' > download </a> </td>";
    objTo.appendChild(record);
}

//number To Show less or equal 0 show all
function LoadData(numberToShow) {
    //Fetch data.json
    fetch("src/data.json")
        .then((obj) => obj.json())
        .then((data) => {
            for (let record in data) {
                //stop laoding record
                if (record > numberToShow - 1 && numberToShow > 0) return;

                //Add record
                addRecord(
                    data[record].info.type,
                    data[record].name,
                    data[record].url,
                    data[record].description,
                    data[record].developer.name,
                    data[record].developer.url,
                    data[record].date
                );
            }
        });
}

//Initialize App
LoadData(5);
