// fetch POST
const postImage = async(url='', data)=>{
    console.log("In postImage");
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    try{
        const imageData = await response.json();
        console.log("postImage's imageData: ",imageData);
        return imageData;
    }catch(error){
        console.log(`Try error: ${error}`);
    } 
}


export { postImage }