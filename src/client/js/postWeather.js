// fetch POST
const postWeather = async(url='', data)=>{
    console.log("In postWeather");
    console.log("postWeather's data: ",data);
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    try{
        const weatherData = await response.json();
        console.log("postWeather's weatherData: ",weatherData);
        return weatherData;
    }catch(error){
        console.log(`Try error: ${error}`);
    } 
}


export { postWeather }