const updatePage = async () => {
  const request = await fetch('/all')
  try{
    const allData = await request.json();
    document.getElementById('forecast').innerHTML = 
        `<h2>The ${allData.date} forecast for ${allData.city_name} is cloud coverage of ${allData.clouds}% of the sky, a high of ${allData.high_temp}F with a low of ${allData.low_temp}F, and ${allData.precip}mm of rain.</h2>`;

  }catch(error){
    console.log("error", error);
  }
}

export { updatePage }