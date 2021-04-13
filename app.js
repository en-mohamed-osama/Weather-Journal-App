/* Global Variables */
const form = document.querySelector('.app_form');
const icons = document.querySelectorAll('.entry_icon');

// Base URL and API Key for OpenWeatherMap API
const url = 'http://api.openweathermap.org/data/2.5/weather?zip=';
const apiKey = '&appid=c5a2549189a404ba32667d28c751b602';

//Get the date
let d = new Date();
let newDate = d.getDate() + '/' + (d.getMonth()+1) + '/' + d.getFullYear();

// Event listener to add function to existing HTML DOM element
document.getElementById('generate').addEventListener('click', performAction);

/* Function called by event listener */
function performAction(e) {
  e.preventDefault();
  // get user input values
  const newZip = document.getElementById('zip').value;
  const content = document.getElementById('feelings').value;
try{
	if (zip.value== false || feelings.value==false)  {
	//if(zip() === '' || feeling.trim.value() === ''){
		alert('please complete All Fields ')
		return
	}
	else {
  getWeather(url, newZip, apiKey)
    .then(function (userData) {
      // add data to POST request
      postData('/add', { date: newDate, temp: userData.main.temp, content })
    }).then(function (newData) {
      // call updateUI to update browser content
      updateUI()
    })
	
  // reset form
  form.reset();
	
	}}
catch(error)
{
alert('error');
}
}

/* Function to GET Web API Data*/
const getWeather = async (url, newZip, apiKey) => {
  // res equals to the result of fetch function
  const res = await fetch(url + newZip + apiKey);
  try {
    // userData equals to the result of fetch function
    const userData = await res.json();
    return userData;
  } catch (error) {
    console.log("error", error);
  }
}

/* Function to POST data */
const postData = async (url = '', data = {}) => {
  const req = await fetch(url, {
    method: "POST",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json;charset=UTF-8"
    },
    body: JSON.stringify({
      date: data.date,
      temp: data.temp,
      content: data.content
    })
  })

  try {
    const newData = await req.json();
    return newData;
  }
  catch (error) {
    console.log(error);
  }
};
const updateUI = async () => {
  const request = await fetch('/all');
  try {
    const allData = await request.json()
    // show icons on the page
    icons.forEach(icon => icon.style.opacity = '1');
    // update new entry values
    document.getElementById('date').innerHTML = allData.date;
    document.getElementById('temp').innerHTML = allData.temp;
    document.getElementById('content').innerHTML = allData.content;
  }
  catch (error) {
    console.log("error", error);
  }
};
