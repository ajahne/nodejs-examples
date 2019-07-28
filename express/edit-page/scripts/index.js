const save = () => {
  const request = new XMLHttpRequest();
  handleRequest(request);
  request.open("PUT", getUrl(), true);
  request.setRequestHeader('Content-type','application/json; charset=utf-8');

  request.send(getData());
}

const getUrl = () => {
  const url = "http://localhost:3001/";
  return url;
}

const getData = () => {
  console.log('getData');
  const data = {};
  data.firstname = "John2";
  data.lastname  = "Snow2";
  const json = JSON.stringify(data);
  return json;
}

const handleRequest = (xhr) => {
  console.log('handleRequest');
  xhr.onload = function () {
    console.log('xhr');
  	var users = JSON.parse(xhr.responseText);
  	if (xhr.readyState == 4 && xhr.status == "200") {
  		console.table(users);
  	} else {
  		console.error(users);
  	}
  }
  // xhr.send(json);
}
