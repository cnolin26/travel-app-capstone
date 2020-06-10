function setCountdown(date) {
    console.log("date: ", date);
    let tday = new Date();
    const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
    const firstDate = new Date(tday);
    const secondDate = new Date(date);
    console.log("firstDate: ",firstDate);
    const diffDays = Math.round(Math.abs((firstDate - secondDate) / oneDay));
    console.log("diffDays: ",diffDays)
    document.getElementById('countdowndays').innerHTML = "<h3>"+diffDays+"</h3>";
    /*document.getElementById('temp').innerHTML = `Your city's longitude is: ${allData.lng}`;
    document.getElementById('content').innerHTML = `Your city's latitude is: ${allData.lat}`; */
    
}

export { setCountdown }