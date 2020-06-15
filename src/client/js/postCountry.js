// fetch POST
const postCountry = async(url='', data)=>{
    console.log("In postCountry");
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    try{
        const postCountry = await response.json();
        console.log("postCountry's postCountry: ",postCountry);
        return postCountry;
    }catch(error){
        console.log(`Try error: ${error}`);
    } 
}


export { postCountry }