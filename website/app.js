/* Global Variables */

const api_key = '&appid=08ca1ff33ce4bb1e3f625332f2411fec';
let base_url = 'https://api.openweathermap.org/data/2.5/weather?zip=';
let imp_units = '&units=imperial';

document.getElementById('generate').addEventListener('click', p_action);

// Create a new date instance dynamically with JS
let d = new Date();
let m = d.getMonth() +1
let newDate = m+'/'+ d.getDate()+'/'+ d.getFullYear();
                              
// fetch GET request to api
const getWeather = async (base_url, zipc, api_key)=>{
    const res = await fetch(base_url+zipc+api_key+imp_units)
    try{
        const data = await res.json();
        return data;        
    } catch(error) {
        console.log("Error in fetch GET", error);
    }
}


// fetch POST
const postData = async(url='', data)=>{
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    try{
        const newData = await response.json();
        return newData;
    }catch(error){
        console.log(`Try error: ${error}`);
    } 
}


const updatePage = async () => {
  const request = await fetch('/all')
  try{
    const allData = await request.json();
    document.getElementById('date').innerHTML = "The date today is: " +allData.date;
    document.getElementById('temp').innerHTML = `Today's temperature is: ${allData.temperature}F`;
    document.getElementById('content').innerHTML = `Your feelings: ${allData.user_resp}`;

  }catch(error){
    console.log("error", error);
  }
}


function p_action(e){
    let z = document.getElementById('zip').value;
    let zipc = z + ',us';
    getWeather(base_url, zipc, api_key)
    .then(function(data){
        const u_resp = document.getElementById('feelings').value;
        postData('/weather', {temperature: data.main.temp, date: newDate, user_resp: u_resp});
    }).then(function(data){
        updatePage('/all');
    })
}