async function p_action(e){
    event.preventDefault()
    const base_url = 'http://api.geonames.org/searchJSON?q=';
    const api_uname = '&maxRows=1&username=cnolin26';
    
    //https://api.weatherbit.io/v2.0/forecast/daily?&lat=38.123&lon=-78.543&units=I&days=1&key=00118caaa5884d5897d7035c1a72470e
    const wbase_url = 'https://api.weatherbit.io/v2.0/forecast/daily';
    const wapi_ = '&units=I&days=1&key=00118caaa5884d5897d7035c1a72470e';
    
    let loc_name = document.getElementById('loc_input').value;
    let loc_date = document.getElementById('date_input').value;
    
    let city_lng = '';
    let city_lat = '';
    
    Client.setCountdown(loc_date);
    
    await Client.getLocation(base_url, loc_name, api_uname)
    .then(async function(data){
        let geo_ar = data.geonames[0];
        console.log("Still before postData;  data.geonames.[0]: ", geo_ar);
        console.log("geo_ar.lng: ", geo_ar.lng);
        city_lat = geo_ar.lat;
        city_lng = geo_ar.lng;
        await Client.postData('/location', {longitude: geo_ar.lng, date: loc_date, latitude: geo_ar.lat});
    }).then(async function(data){
        console.log("before getWeather, data: ",data);
        let coors = `?&lat=${city_lat}&lon=${city_lng}`;
        await Client.getWeather(wbase_url+coors+wapi_);
        //'https://api.weatherbit.io/v2.0/forecast/daily?lat=38.123&lon=-78.543&units=I&days=1&key=00118caaa5884d5897d7035c1a72470e'
    }).then(async function(data){
        console.log("data for second post: ", data);
        //let w_data = data[0];
        //console.log("w_data.data: ", w_data.data);
        await Client.postWeather('/weatherData', {city_name: "Moscow"});// I can manually enter info here to be posted, but I need to use the data from the weatherbit api call
        //,high_temp: , low_temp: , clouds: , precip: });
    }).then(async function(data){
        await Client.updatePage('/all');
    })
}

export { p_action }