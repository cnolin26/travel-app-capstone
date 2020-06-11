function setCountdown(date) {
    console.log("date: ", date);
    let tday = new Date();
    const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
    const firstDate = new Date(tday);
    const secondDate = new Date(date);
    console.log("firstDate: ",firstDate);
    const diffDays = Math.round(Math.abs((firstDate - secondDate) / oneDay));
    console.log("diffDays: ",diffDays);
    if(diffDays < 17){
        document.getElementById('countdowndays').innerHTML = "<h3>"+diffDays+"</h3>";
    }else {
        document.getElementById('results').innerHTML = "<h3>I'm sorry, no forecast is available more than 16 days in the future</h3>";
    }
    
}

export { setCountdown }