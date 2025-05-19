//Create a Netflix TV Show class with a constructor that makes Netflix TV Shows with 4 properties and 3 methods

class NetflixTvShow{
    constructor(genre,type,rating,length){
        this.genre=genre
        this.type=type
        this.rating=rating
        this.length=length
    }
    isHighRated(){
        if (this.rating > 9){
            return 'This is an amazing movie!'
        }
        else{
            return 'This movie could be better'
        }
    }
    isItAMovie(){
        if(type == 'movie'){
            return 'This is a movie'
        }
        else{
            return 'this is a tv show'
        }
    }
    
}

let theNun = new NetflixTvShow('horror','movie',9.5,'2 hours')

console.log(theNun.isHighRated())
