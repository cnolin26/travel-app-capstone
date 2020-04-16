/* Global Variables */

let api_key = '&appid=08ca1ff33ce4bb1e3f625332f2411fec';
let base_url = 'https://api.openweathermap.org/data/2.5/weather?zip='; 

document.getElementById('generate').addEventListener('click', p_action);

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();
                              
// fetch GET request to api
const getWeather = async (base_url, zipc, api_key)=>{
    const res = await fetch(base_url+zipc+api_key)
    try{
        const data = await res.json();
        console.log("data.main.temp in getWeather: "+data.main.temp);
        console.log("data.name in getWeather: "+data.name);
        console.log("get appears to work fine");
        return data;        
    } catch(error) {
        console.log("Error in fetch GET", error);
    }
}


// fetch POST
const postData = async(url='', data)=>{
    console.log("postData url: "+url);
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    try{
        const newData = await response.text(); //response.text() shows that it just contains html
        console.log("postData newData: "+newData)
        return newData;
        //let newData = {"temperature": "55", "date": "4.14.2020", "user_resp": "g"};
        //console.log(`postData try newData: ${newData}; newData.temperature: ${newData.temperature}`);
        return newData;
    }catch(error){
        console.log(`Try error: ${error}`);
    } 
}


const updatePage = async (url='', data) => {
    //console.log("Then, now into updatePage");
  const request = await fetch('http://localhost/weather-journal-app/website');
  try{
    const allData = await request.text();
      //console.log("allData: "+allData);
      console.log("allData.temperature: "+allData.temperature);
      console.log("allData[0]: "+allData[0]);
      console.log("allData[0].date: "+allData[0].date);
    document.getElementById('date').innerHTML = "Hi!";//allData[0].date;
    document.getElementById('temp').innerHTML = allData[0].temperature;
    document.getElementById('content').innerHTML = allData[0].user_resp;

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
        console.log(`p_action's data has temperature: ${data.main.temp}; date: ${newDate}; user_resp: ${u_resp}`)
        postData('http://localhost/weather-journal-app/', {temperature: 44, date: "4.15.2020", user_resp: "g"}); // {temperature: data.main.temp, date: newDate, user_resp: u_resp});
    }).then(
        updatePage()
    );
}