
export const getPicture = (url, rating, random) =>{
        url = "https://picsum.photos/id/"+random+"/200/300"
        rating = 0

    return url
}

export const lessRating = (rating) =>{
    if(rating>0){
        rating -= 1
    }
    return rating
}
export const moreRating = (rating) =>{
    if(rating<10){
        rating += 1
    }
    return rating
}
export const resetRating = (rating) =>{
    rating = 0
    return rating
}
export const storeRatings = (ratingList, rating, random) =>{

    if(ratingList.length > 0){
        for(let x = 0; x < ratingList.length; x++){
            
            if(random == ratingList[x]){
                let ratingName = Object.keys(ratingList[x])                
                ratingList[ratingName] += rating
                ratingList.splice(-1)
                x = ratingList.length
                
            } 
            else{
                ratingList = [...ratingList, {random: rating}]
                ratingList[ratingList.length-1][random] = ratingList[ratingList.length-1]["random"]            
                delete ratingList[ratingList.length-1]["random"]
                x = ratingList.length
            }

        }    
        
    }
    else{

        ratingList = [...ratingList, {random: rating}]
        ratingList[0][random] = ratingList[0]["random"]
        delete ratingList[0]["random"]

    }
    return ratingList
}
export const getRandom = (random) =>{
    random = Math.floor(Math.random()*1084)
    return random
}
export const getShowlist = (ratingList, rating, random, showList) => {
    if(ratingList.length > 0){
        for(let x = 0; x < ratingList.length; x++){
            
            if(random == ratingList[x]){
                
                showList[x].photo += 1
                x = ratingList.length
                
            } 
            else{
                showList = [...showList, {photo: rating}]
                x = ratingList.length
            }

        }    
        
    }
    else{
        showList = [...showList, {photo: rating}]
    }
    console.log(showList)
    return showList
}
export const saveLinks = (linkList, url) =>{
    linkList = [...linkList, url]
    console.log(linkList)
    return linkList
}
