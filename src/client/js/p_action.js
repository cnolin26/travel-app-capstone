function p_action(e){
    event.preventDefault()
    const base_url = 'http://api.geonames.org/searchJSON?q=';
    const api_uname = '&maxRows=1&username=cnolin26';
    
    console.log("In p_action");
    let loc_name = document.getElementById('loc_input').value;
    
    let loc_date = document.getElementById('date_input').value;
    Client.setCountdown(loc_date);
    
    Client.getLocation(base_url, loc_name, api_uname)
    .then(function(data){
        console.log("getLocation's data in .then() of p_action: ", data);
        let geo_ar = data.geonames[0];
        console.log("Still before postData;  data.geonames.[0]: ", geo_ar);
        console.log("geo_ar.lng: ", geo_ar.lng);
        Client.postData('/weather', {longitude: geo_ar.lng, date: loc_date, latitude: geo_ar.lat});
    }).then(function(data){
        Client.updatePage('/all');
    })
}

export { p_action }