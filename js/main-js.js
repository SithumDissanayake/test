window.onload = async () => {
  // Put EVERYTHING in here Sithum
  // I mean EVERYTHING
      const url = "https://meos.codecadets.com/meos-mop/results-api.php";
      const promise = await fetch(url);
      const data = await promise.json();
      console.log(data);

      const navContent = document.getElementById('navContent');
      const mainResults = document.getElementById('mainResults');

      for (var i = 0; i < data.cmpResults.length; i++) {
        const table = document.createElement('table');
        table.classList.add('table')
        table.classList.add('table-striped')
        mainResults.appendChild(table);
        const tableRowHead = document.createElement('tr');
        table.appendChild(tableRowHead);

        const tableRowHeadEvent = document.createElement('th');
        tableRowHeadEvent.innerHTML = data.cmpResults[i].clsName + ": <span style='font-weight: normal; font-size: 16px'>" + mToKm(data.cmpResults[i].length) + " • " + data.cmpResults[i].course;
        tableRowHeadEvent.setAttribute("style", "width: 30%");
        tableRowHead.appendChild(tableRowHeadEvent);

        const tableRowHeadClub = document.createElement('th');
        tableRowHeadClub.setAttribute("style", "width: 10%");
        tableRowHeadClub.textContent = "Club";
        tableRowHead.appendChild(tableRowHeadClub);

        const tableRowHeadTotal = document.createElement('th');
        tableRowHeadTotal.setAttribute("style", "width: 10%");
        tableRowHeadTotal.textContent = "Total Time";
        tableRowHead.appendChild(tableRowHeadTotal);

        for (var j = 0; j < data.cmpResults[i].radioCount; j++) {
          const tableRowHeadSplit = document.createElement('th');
          tableRowHeadSplit.innerHTML = "Split "+ [j+1] + " - " + mToKm(data.cmpResults[i].radioInfo[j].distance);
          tableRowHeadSplit.setAttribute("style", "width: 20%");
          tableRowHead.appendChild(tableRowHeadSplit);
        }

        for (var k = 0; k < data.cmpResults[i].clsResults.length; k++) {
          const tableRowBody = document.createElement('tr');
          table.appendChild(tableRowBody);

          const tableRowCellName = document.createElement('td');
          tableRowCellName.innerHTML = data.cmpResults[i].clsResults[k].competitor;
          tableRowCellName.setAttribute("style", "width: 30%");
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
      const br = document.createElement("br");
      table.appendChild(br);
    }
      function mToKm(valNum) {
        var km = valNum/1000;;
        return km.toFixed(1) + " km";
      }
      function nullCheck(valNum) {
        if (valNum == null) {
          return ""
        }
        else {
          return valNum
        }
      }
      function nullCheckRank(valNum) {
        if (valNum == null) {
          return ""
        }
        else {
          return "(" + valNum + ")"
        }
      }
  // Use `data` as a JavaScript object
  // Contact me if issues - I'm good with `forEach` and `map`ping over things
  // Arrays, particularly of objects, are my speciality because I can make it look simple
};

  // const title = document.createElement('h1');
  // title.textContent = data.cmpName;
  // title.classList.add('jumbotron')
  // title.classList.add('text-center')
  // title.style.backgroundColor = "#3B762E";
  // title.style.color = "white";
  // title.style.marginBottom = "0";
  // app.appendChild(title);
  // const nav = document.createElement('nav');
  // nav.classList.add('navbar')
  // nav.classList.add('navbar-expand-sm')
  // nav.classList.add('navbar-custom')
  // nav.classList.add('navbar-dark')
  // app.appendChild(nav);
  // const navA = document.createElement('a');
  // navA.classList.add('navbar-brand')
  // nav.appendChild(navA);
  // const navButton = document.createElement('button');
  // navButton.innerHTML = "<span class='navbar-toggler-icon'></span>";
  // navButton.classList.add('navbar-toggler')
  // navButton.setAttribute("type", "button");
  // navButton.setAttribute("data-toggle", "collapse");
  // navButton.setAttribute("data-target", "#navbarText");
  // navButton.setAttribute("aria-controls", "navbarText");
  // navButton.setAttribute("aria-expanded", "false");
  // navButton.setAttribute("aria-label", "Toggle navigation");
  // nav.appendChild(navButton);
  // const navContent = document.createElement('div')
  // navContent.classList.add('collapse')
  // navContent.classList.add('navbar-collapse')
  // navContent.id = "navbarText"
  // nav.appendChild(navContent);
  // const navList = document.createElement('ul')
  // navContent.classList.add('nav')
  // navContent.classList.add('navbar-nav')
  // navContent.classList.add('ml-auto')
  // navContent.appendChild(navList);


  // const navListItem = document.createElement('li')
  // navListItem.classList.add('nav-item')
  // navList.appendChild(navListItem);
  // const navListItemLink = document.createElement('li')

  // navListItem.appendChild(navListItemLink);












// const app = document.getElementById('root');
// var request = new XMLHttpRequest();
// request.open('GET', 'https://meos.codecadets.com/meos-mop/results-api.php', true);
// request.onload = function () {
//     // Begin accessing JSON data here
//     var data = JSON.parse(this.response);
//     if (request.status >= 200 && request.status < 400) {
//         const noScript = document.createElement('noscript');
//         noScript.textContent = "<strong>We're sorry but meos-results-screens doesn't work properly without JavaScript enabled. Please enable it to continue.</strong>"
//         app.appendChild(noScript)
//         const title = document.createElement('h1');
//         title.textContent = data.query.results.cmpName;
//         // app.appendChild(title);
//         // const list = document.createElement('ul');
//         // app.appendChild(list);
//         // const sunrise = document.createElement('li');
//         // sunrise.innerHTML = "<strong>Sunrise: </strong>" + data.query.results.channel.astronomy.sunrise;
//         // list.appendChild(sunrise);
//         // const sunset = document.createElement('li');
//         // sunset.innerHTML = "<strong>Sunset: </strong>" + data.query.results.channel.astronomy.sunset;
//         // list.appendChild(sunset);
//         // const conditionsforcanberra = document.createElement('h2');
//         // conditionsforcanberra.textContent = data.query.results.channel.item.title;
//         // app.appendChild(conditionsforcanberra);
//         // const table = document.createElement('table');
//         // app.appendChild(table);
//         // const thead = document.createElement('thead');
//         // table.appendChild(thead);
//         // const trhead = document.createElement('tr');
//         // thead.appendChild(trhead);
//         // const tdhead1 = document.createElement('th');
//         // tdhead1.innerHTML = "Date";
//         // trhead.appendChild(tdhead1);
//         // const tdhead2 = document.createElement('th');
//         // tdhead2.innerHTML = "Min";
//         // trhead.appendChild(tdhead2);
//         // const tdhead3 = document.createElement('th');
//         // tdhead3.innerHTML = "Max";
//         // trhead.appendChild(tdhead3);
//         // const tdhead4 = document.createElement('th');
//         // tdhead4.innerHTML = "Conditions";
//         // trhead.appendChild(tdhead4);
//         // for(i = 0; i < 10; i++){
//         //     var add = i+1;
//         //     const tbody = document.createElement('tbody');
//         //     table.setAttribute('class', 'tbody');
//         //     table.appendChild(tbody);
//         //     const trbody = document.createElement('tr');
//         //     tbody.appendChild(trbody);
//         //     const tdbody1 = document.createElement('td');
//         //     tdbody1.textContent = data.query.results.channel.item.forecast[i].day + " "+data.query.results.channel.item.forecast[i].date;
//         //     trbody.appendChild(tdbody1);
//         //     const tdbody2 = document.createElement('td');
//         //     tdbody2.textContent = Math.round((data.query.results.channel.item.forecast[i].low - 32)/1.8) + "°C";
//         //     trbody.appendChild(tdbody2);
//         //     const tdbody3= document.createElement('td');
//         //     tdbody3.textContent = Math.round((data.query.results.channel.item.forecast[i].high - 32)/1.8) + "°C";
//         //     trbody.appendChild(tdbody3);
//         //     const tdbody4 = document.createElement('td');
//         //     tdbody4.textContent = data.query.results.channel.item.forecast[i].text;
//         //     trbody.appendChild(tdbody4);
//         // }
//         // const lastbuilt = document.createElement('p');
//         // app.appendChild(lastbuilt);
//         // const em = document.createElement('em');
//         // em.innerHTML = "Data last built at: " + data.query.results.channel.lastBuildDate;
//         // lastbuilt.appendChild(em);
//     } else {
//         const errorMessage = document.createElement('h1');
//         errorMessage.textContent = `ERROR, PLEASE RELOAD!`;
//         app.appendChild(errorMessage);
//     }
// }

// request.send();