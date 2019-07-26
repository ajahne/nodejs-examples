const save = () => {
  const url = "http://localhost:3001/";

  const request = new XMLHttpRequest();
  request.open("PUT", url, true);
  request.setRequestHeader('Content-type','application/json; charset=utf-8');
  request.send(getData());
}

const getData = () => {
  var data = {};
  data.firstname = "John2";
  data.lastname  = "Snow2";
  var json = JSON.stringify(data);
  return json;
}

//
// xhr.onload = function () {
// 	var users = JSON.parse(xhr.responseText);
// 	if (xhr.readyState == 4 && xhr.status == "200") {
// 		console.table(users);
// 	} else {
// 		console.error(users);
// 	}
// }
// xhr.send(json);
