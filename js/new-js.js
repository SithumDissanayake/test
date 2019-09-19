setInterval(function() {
    $.ajax({
        url: "https://meos.codecadets.com/meos-mop/results-api.php",
        dataType: "json",
        success: function(data) {

            // const listItem = $('<li class="nav-item">');
            // $('#navContent').append(listItem)
            // const listItemLink = $('<a class="nav-link">')
            // $(listItem).append(listItemLink)
            // $(listItemLink).append(data.cmpResults[i].clsName)
            const navContent = document.getElementById('navContent');
            const mainResults = document.getElementById('mainResults');
      
            for (var i = 0; i < data.cmpResults.length; i++) {
                const listItem = document.createElement('li');
                listItem.classList.add('nav-item')
                navContent.appendChild(listItem);
                const listItemLink = document.createElement('a');
                listItemLink.innerHTML = data.cmpResults[i].clsName;
                listItemLink.classList.add('nav-link')
                listItemLink.setAttribute("href", "#" + data.cmpResults[i].clsName);
                listItem.appendChild(listItemLink);
      
      
      
                const table = document.createElement('table');
                table.classList.add('table')
                table.classList.add('table-striped')
                table.classList.add('table-dark')
                table.classList.add('table-bordered')
                mainResults.appendChild(table);
      
                const br = document.createElement("br");
                mainResults.appendChild(br);
      
                const tableHead = document.createElement('thead');
                table.appendChild(tableHead);
      
                const tableRowHead = document.createElement('tr');
                tableHead.appendChild(tableRowHead);
      
                const tableRowHeadEvent = document.createElement('th');
                tableRowHeadEvent.innerHTML = data.cmpResults[i].clsName + ": <span style='font-weight: normal; font-size: 16px'>" + mToKm(data.cmpResults[i].length) + " • " + data.cmpResults[i].course;
                tableRowHeadEvent.id = data.cmpResults[i].clsName;
                tableRowHeadEvent.setAttribute("style", "width: 25%");
                tableRowHeadEvent.setAttribute("scope", "col");
                tableRowHead.appendChild(tableRowHeadEvent);
      
                const tableRowHeadClub = document.createElement('th');
                tableRowHeadClub.textContent = "Club";
                tableRowHeadClub.setAttribute("style", "width: 10%");
                tableRowHeadClub.setAttribute("scope", "col");
                tableRowHead.appendChild(tableRowHeadClub);
      
                const tableRowHeadTotal = document.createElement('th');
                tableRowHeadTotal.textContent = "Total Time";
                tableRowHeadTotal.setAttribute("style", "width: 10%");
                tableRowHeadTotal.setAttribute("scope", "col");
                tableRowHead.appendChild(tableRowHeadTotal);
      
                for (var j = 0; j < data.cmpResults[i].radioCount; j++) {
                    const tableRowHeadSplit = document.createElement('th');
                    tableRowHeadSplit.innerHTML = "Split " + [j + 1] + " - " + mToKm(data.cmpResults[i].radioInfo[j].distance);
                    tableRowHeadSplit.setAttribute("style", "width: 20%");
                    tableRowHeadSplit.setAttribute("scope", "col");
                    tableRowHead.appendChild(tableRowHeadSplit);
                }
      
                const tableBody = document.createElement('tbody');
                table.appendChild(tableBody);
      
                for (var k = 0; k < data.cmpResults[i].clsResults.length; k++) {
                    const tableRowBody = document.createElement('tr');
                    tableBody.appendChild(tableRowBody);
      
                    const tableRowCellName = document.createElement('td');
                    tableRowCellName.innerHTML = data.cmpResults[i].clsResults[k].competitor;
                    tableRowCellName.setAttribute("style", "width: 25%");
                    tableRowCellName.setAttribute("scope", "row");
                    tableRowBody.appendChild(tableRowCellName);
      
                    const tableRowCellClub = document.createElement('td');
                    tableRowCellClub.innerHTML = data.cmpResults[i].clsResults[k].club;
                    tableRowCellClub.setAttribute("style", "width: 10%");
                    tableRowBody.appendChild(tableRowCellClub);
      
                    const tableRowCellFinshTime = document.createElement('td');
                    tableRowCellFinshTime.innerHTML = data.cmpResults[i].clsResults[k].finishTime + " <span style='font-size:10px'>" + nullCheck(data.cmpResults[i].clsResults[k].finishDiff);
                    tableRowCellFinshTime.setAttribute("style", "width: 10%");
                    tableRowBody.appendChild(tableRowCellFinshTime);
      
                    for (var l = 0; l < data.cmpResults[i].radioCount; l++) {
                        const tableRowCellSplit = document.createElement('td');
                        tableRowCellSplit.innerHTML = nullCheck(data.cmpResults[i].clsResults[k].radios[l].time) + " " + nullCheckRank(data.cmpResults[i].clsResults[k].radios[l].rank) + " <span style='font-size:10px'>" + nullCheck(data.cmpResults[i].clsResults[k].radios[l].diff);
                        tableRowCellSplit.setAttribute("style", "width: 20%");
                        tableRowBody.appendChild(tableRowCellSplit);
                    }
                }
      
            }
      
            function mToKm(valNum) {
                var km = valNum / 1000;;
                return km.toFixed(1) + " km";
            }

            function nullCheck(valNum) {
                if (valNum == null) {
                    return ""
                } else {
                    return valNum
                }
            }

            function nullCheckRank(valNum) {
                if (valNum == null) {
                    return ""
                } else {
                    return "(" + valNum + ")"
                }
            }
        }
    });
}, 1000);