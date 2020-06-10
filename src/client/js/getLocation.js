// fetch GET request to api

const getLocation = async (base_url, loc_name, api_uname)=>{
    console.log("In getLocation's callback, I think");
    const res = await fetch('http://api.geonames.org/searchJSON?q=Moscow&maxRows=1&username=cnolin26')//base_url+loc_name+api_uname)
    try{
        const data = await res.json();
        console.log("getLocation's data: ",data);
        return data;        
    } catch(error) {
        console.log("Error in fetch GET", error);
    }
}

export { getLocation }