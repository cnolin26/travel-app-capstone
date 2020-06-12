// fetch GET request to api

const getWeather = async (wbase_url)=>{ 
    console.log("In getWeather's callback, I think");
    const res = await fetch(wbase_url) 
    //'https://api.weatherbit.io/v2.0/forecast/daily?&lat=38.123&lon=-78.543&units=I&days=1&key=00118caaa5884d5897d7035c1a72470e') //
    try{
        const dataW = await res.json();
        console.log("getWeather's dataW: ",dataW);
        console.log("getWeather's dataW.data: ",dataW.data);
        console.log("getWeather's dataW.data[0]: ",dataW.data[0]);
        let d = dataW.data[0];
        return d; //dataW showed up as undefined until I put in dataW.data or dataW.data[0]
    } catch(error) {
        console.log("Error in fetch GET", error);
    }
}

export { getWeather }