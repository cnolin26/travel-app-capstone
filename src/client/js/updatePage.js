const updatePage = async () => {
  const request = await fetch('/all')
  try{
    const allData = await request.json();
      console.log("updatePage's allData: ",allData);
    
    /*document.getElementById('temp').innerHTML = `Your city's longitude is: ${allData.lng}`;
    document.getElementById('content').innerHTML = `Your city's latitude is: ${allData.lat}`; */

  }catch(error){
    console.log("error", error);
  }
}

export { updatePage }