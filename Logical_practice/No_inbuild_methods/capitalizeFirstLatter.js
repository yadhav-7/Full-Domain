//Write a function to capitalize the first letter of each word in a sentence.
function capitalizeFirstLatter(str){
    let res = ""
    let start = true
    for(let i = 0 ; i < str.length ; i++){
        if(str[i]===' '){
            start = true
            res+= ' '
            continue
        }

        if(start)res+=str[i].toUpperCase()
        else res+=str[i]
    start=false
    }

    return res

}

console.log(capitalizeFirstLatter('helo how are you'))