/* Global Variables */

const base_url = 'http://api.geonames.org/searchJSON?q=';
let loc_name = '';
const api_uname = '&maxRows=1&username=cnolin26';



document.getElementById('generate').addEventListener('click', p_action);

// Create a new date instance dynamically with JS
let d = new Date();
let m = d.getMonth() +1
let newDate = m+'/'+ d.getDate()+'/'+ d.getFullYear();
                              
// fetch GET request to api
const getWeather = async (base_url, loc_name, api_uname)=>{
    const res = await fetch(base_url+loc_name+api_uname)
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
    document.getElementById('temp').innerHTML = `Your city's longitude is: ${allData.lng}`;
    document.getElementById('content').innerHTML = `Your city's latitude is: ${allData.lat}`;

  }catch(error){
    console.log("error", error);
  }
}


function p_action(e){
    let loc = document.getElementById('loc_input').value;
    getWeather(base_url, loc, api_key)
    .then(function(data){
        const u_resp = document.getElementById('feelings').value;
        postData('/weather', {temperature: data.main.temp, date: newDate, user_resp: u_resp});
    }).then(function(data){
        updatePage('/all');
    })
}