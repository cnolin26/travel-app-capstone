

const setCountdown = async (date) =>{
    console.log("date: ", date);
    let tday = new Date();
    const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
    const firstDate = new Date(tday);
    console.log("firstDate: ", firstDate);
    let secondDate = new Date(date);
    let fixed_date = new Date( secondDate.getTime() + Math.abs(secondDate.getTimezoneOffset()*60000));
    console.log("secondDate: ",secondDate);
    console.log("fixed_date: ",fixed_date);
    const diffDays = Math.ceil(Math.abs((firstDate - fixed_date) / oneDay));
    console.log("diffDays: ",diffDays);
    if(diffDays < 17){
        document.getElementById('countdowndays').innerHTML = "<h3>"+diffDays+"</h3>";
    }else {
        document.getElementById('results').innerHTML = "<h3>I'm sorry, no forecast is available more than 16 days in the future</h3>";
    }
    return diffDays;
}

export { setCountdown }