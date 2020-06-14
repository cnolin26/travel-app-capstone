async function p_action(e){
    event.preventDefault()
    const base_url = 'http://api.geonames.org/searchJSON?q=';
    const api_uname = '&maxRows=1&username=cnolin26';
    
    //https://api.weatherbit.io/v2.0/forecast/daily?&lat=38.123&lon=-78.543&units=I&days=1&key=00118caaa5884d5897d7035c1a72470e
    const wbase_url = 'https://api.weatherbit.io/v2.0/forecast/daily';
    const units = '&units=I&days=';
    let days_n = '';
    const wapi_ = '&key=00118caaa5884d5897d7035c1a72470e';
    
    let loc_name = document.getElementById('loc_input').value;
    let loc_date = document.getElementById('date_input').value;
    
    let city_lng = '';
    let city_lat = '';
    
    
    await Client.setCountdown(loc_date)
    .then(async function(data){
        console.log("setCountdown is async?");
        console.log("setCountdown data: ", data);
        days_n = data + 1;
    });
    
    await Client.getLocation(base_url, loc_name, api_uname)
    .then(async function(data){
        let geo_ar = data.geonames[0];
        console.log("Still before postData;  data.geonames.[0]: ", geo_ar);
        console.log("geo_ar.lng: ", geo_ar.lng);
        city_lat = geo_ar.lat;
        city_lng = geo_ar.lng;
        await Client.postData('/location', {longitude: geo_ar.lng, date: loc_date, latitude: geo_ar.lat, city_name: loc_name});
    });
    
    
    let coors = `?&lat=${city_lat}&lon=${city_lng}`;
    let api_ = wbase_url+coors+units+days_n+wapi_;
    console.log("api_: ", api_)
    await Client.getWeather(api_
    /*'https://api.weatherbit.io/v2.0/forecast/daily?lat=38.123&lon=-78.543&units=I&days=1&key=00118caaa5884d5897d7035c1a72470e'*/
    ).then(async function(data){
        console.log("data3 for second post: ", data);
        let f_day = days_n - 1;
        let data3 = data.data[f_day];
        console.log("f_day: ", f_day);
        console.log("data.data[f_day]: ", data.data[f_day]);
        await Client.postWeather('/weatherData', {high_temp: data3.max_temp, low_temp: data3.min_temp, clouds: data3.clouds, precip: data3.precip});
    }).then(async function(data4){
        await Client.updatePage('/all');
    })
}

export { p_action }