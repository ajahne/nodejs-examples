const save = () => {
  const request = new XMLHttpRequest();
  handleRequest(request);
  request.open("PUT", getUrl(), true);
  request.setRequestHeader('Content-type','application/json; charset=utf-8');

  request.send(getData());
  // console.log(document.body);
  // console.log(getElement('text'));
  // console.log(getElement('text').toString());
  // console.log(getElement('text').innerHTML);
  // console.log(getElement('text').outerHTML);
  // console.log(document.documentElement.outerHTML);
}

const getUrl = () => {
  const url = "http://localhost:3001/";
  return url;
}

const getData = () => {
  // const element = getElement('text');
  const data = {};
  // data.element = element.innerHTML;
  data.html = document.documentElement.outerHTML;
  console.log('data');
  console.log(data);
  return JSON.stringify(data);
  // return getDummyData();
}

const getElement = (id) => {
  const element = document.getElementById(id);
  return element;
}

const getDummyData = () => {
  console.log('getDummyData');
  const data = {};
  data.firstname = "John2";
  data.lastname  = "Snow2";
  const json = JSON.stringify(data);
  return json;
}

const handleRequest = (xhr) => {
  console.log('handleRequest');
  xhr.onload = function () {
  	const responseText = xhr.responseText; //JSON.parse(xhr.responseText);
  	if (xhr.readyState == 4 && xhr.status == "200") {
      console.log(responseText);
  	} else {
  		console.error(responseText);
  	}
  }
}
