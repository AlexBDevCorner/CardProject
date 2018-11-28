const oauthPercentEncode = str => {
    
    var char, charCode, i;
    var encodedString = '';
        
    for (i=0; i<str.length; i++) {
        char = str.charAt(i); 
        if  ((char >= '0' && char <= '9') ||
            (char >= 'A' && char <= 'Z') ||
            (char >= 'a' && char <= 'z') ||
            (char == '-') || (char == '.') || 
            (char == '_') || (char == '~')) {
                encodedString += char;
            } else {
                charCode = str.charCodeAt(i);
                encodedString += '%' + charCode.toString(16).toUpperCase();
            }
    }
    return encodedString;
}

module.exports = oauthPercentEncode