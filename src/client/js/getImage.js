// fetch GET request to api

const getImage = async (wbase_url)=>{ 
    console.log("In getImage's callback, I think");
    const res = await fetch(wbase_url) 
    //'https://api.weatherbit.io/v2.0/forecast/daily?&lat=38.123&lon=-78.543&units=I&days=1&key=00118caaa5884d5897d7035c1a72470e') //
    try{
        const data = await res.json();
        console.log("getImage's data: ",data);
        console.log("getImage's data.hits[1]: ",data.hits[0]);
        //let d = dataW.data[0];
        return data.hits[0]; //dataW showed up as undefined until I put in dataW.data or dataW.data[0]
    } catch(error) {
        console.log("Error in fetch GET", error);
    }
}

export { getImage }