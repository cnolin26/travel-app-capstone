// fetch POST
const postData = async(url='', data)=>{
    console.log("In postData");
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    try{
        const newData = await response.json();
        return newData;
    }catch(error){
        console.log(`Try error: ${error}`);
    } 
}


export { postData }