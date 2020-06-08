function urlValid(inputText) {
    var regex = RegExp('^(http|https):\/\/');
    if (regex.test(inputText) == false) {
        alert('Invalid url');
        alert('Must have \"http(s)://\".')
        alert('invalid url: ',inputText)
        return false;
    } else {
        console.log('valid url: ',inputText)
        return true;
    }
}
export { urlValid }
