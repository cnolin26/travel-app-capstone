// fetch GET request to api

const getLocation = async (base_url, loc_name, api_uname)=>{
    console.log("In getLocation's callback, I think");
    console.log("base_url:  ",base_url);
    console.log("loc_name:  ",loc_name);
    console.log("api_uname:  ",api_uname);
    const res = await fetch('https://api.openweathermap.org/data/2.5/weather?zip=84003,us&appid=08ca1ff33ce4bb1e3f625332f2411fec&units=imperial')//base_url+loc_name+api_uname)
    //try{
        console.log("In getLocation's try")
        const data = await res.json();
        console.log("getLocation's data: ",data);
        return data;        
    //} catch(error) //{
    //    console.log("Error in fetch GET", error);
    //}
}

export { getLocation }