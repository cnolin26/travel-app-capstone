function handleSubmit(event) {
    event.preventDefault()
    // check what text was put into the form field
    let formText = document.getElementById('users_url').value;
    if(Client.urlValid(formText)){ //check for url valid
        console.log("Url valid");
        /*const posted_URL = async (url = '', url2 = {})=> {
            const response = await */fetch("/sentiment", {
                method: 'POST',
                mode: 'cors',
                credentials: 'same-origin',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify( { formText } )
            }).then(res=>res.json())
            .then(data=>{
                //const nData = response.json();
                console.log('data in second then: ',data);
                document.getElementById('results').innerHTML = 
                    `<p>Results: </p>
                    <p>polarity: ${data.polarity}</p>
                    <p>subjectivity: ${data.subjectivity}</p>
                    <p>text: ${data.text}</p>`;
                return data;
            });//.catch(error=>console.log(error));

            /*
            try {
                const nData = await response.json();
                document.getElementById('results').innerHTML = 
                    `<p>Results: </p>
                    <p>polarity: ${nData.polarity}</p>
                    <p>subjectivity: ${nData.subjectivity}</p>
                    <p>text: ${nData.text}</p>`;
                return nData;
            } catch (error) {
                console.log("Error from try: ", error);
            } */
        //};
        //posted_URL('/sentiment', { url: formText })
    }
}


export { handleSubmit }


