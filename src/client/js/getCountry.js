// fetch GET request to api

const getCountry = async (c_url)=>{
    console.log("In getCountry's callback, I think");
    const res = await fetch(c_url)
    try{
        const data = await res.json();
        console.log("getCountry's data: ",data[0]);
        return data[0];        
    } catch(error) {
        console.log("Error in fetch GET", error);
    }
}

export { getCountry }