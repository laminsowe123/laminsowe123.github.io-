const MY_TOKEN = "pk.eyJ1IjoibGFtaW5zb3dlIiwiYSI6ImNsc3QwZWswazB4ZHcya3FpMHlsMTRwcm0ifQ.Q_j87Q5QrGUbORgT5s3Bqw"

function outputTable(json) {
  let element = document.getElementById("results");
  element.innerHTML = "";
  let features = json.features;
  for (i=0; i<features.length; i++) {
    let tr = document.createElement('tr');
    let a = features[i].attributes;
    let td = document.createElement('td');
    td.innerHTML = a.TOILET_NAME;
    tr.appendChild(td);

    td = document.createElement('td');
    td.innerHTML = a.ADDRESS;
    tr.appendChild(td); 

    td = document.createElement('td');
    td.innerHTML = a.MALE;
    tr.appendChild(td);  

    td = document.createElement('td');
    td.innerHTML = a.FEMALE;
    tr.appendChild(td);

    element.appendChild(tr);
  }
}
  

// Request user geolocation and callback with lat, lon
function getLocation(page,win = window, nav = navigator) {
  if (nav.geolocation) {
      nav.geolocation.getCurrentPosition(
        function(loc) { // permission granted
          win.location.href=`${page}?lat=${loc.coords.latitude}&lon=${loc.coords.longitude}`;
        },
        function() { // permission denied
          // location defaults to central Bristol
          win.location.href=`${page}?lat=51.454514&lon=-2.587910`;              
        }
      )
  }
  else { // unsupported feature
      win.alert("Geolocation is not supported by this browser.");
      // location defaults to central Bristol
      win.location.href=`${page}?lat=51.454514&lon=-2.587910`;
  }
}