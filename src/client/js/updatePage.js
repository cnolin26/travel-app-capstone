const updatePage = async () => {
  const request = await fetch('/all')
  try{
    const allData = await request.json();
      console.log("allData: ",allData);
    

  }catch(error){
    console.log("error", error);
  }
}

export { updatePage }