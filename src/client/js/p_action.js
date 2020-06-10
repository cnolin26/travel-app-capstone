
/*
if(1==1){
    console.log("In if");
    //p_action(base_url, api_uname);
}
console.log("Before event listener");
const el = document.getElementById('loc_form');
if(el){
    console.log("In event listener");
    el.addEventListener('submit', p_action);
    console.log("Event listener works");
}else{
    console.log("el is wrong");
} */

                              
// fetch GET request to api
/*console.log("Before getLocation");
const getLocation = async (base_url, loc_name, api_uname)=>{
    console.log("In getLocation's callback, I think");
    console.log("base_url:  ",base_url);
    console.log("loc_name:  ",loc_name);
    console.log("api_uname:  ",api_uname);
    const res = await fetch(base_url+loc_name+api_uname)
    try{
        console.log("In getLocation's try")
        const data = await res.json();
        console.log("getLocation's data: ",data);
        return data;        
    } catch(error) {
        console.log("Error in fetch GET", error);
    }
} */





console.log("Before p_action");
function p_action(e){
    event.preventDefault()
    const base_url = 'http://api.geonames.org/searchJSON?q=';
    const api_uname = '&maxRows=1&username=cnolin26';
    
    console.log("In p_action");
    let loc_name = document.getElementById('loc_input').value;
    Client.getLocation(base_url, loc_name, api_uname)
    .then(function(data){
        console.log("In first .then and before postData");
        //const u_resp = document.getElementById('feelings').value;
        console.log("Still before postData;  data.main.lng: ", data.main.lng);
        Client.postData('/weather', {longitude: data.main.lng, date: newDate, latitude: data.main.lat});
    }).then(function(data){
        Client.updatePage('/all');
    })
}

export { p_action }