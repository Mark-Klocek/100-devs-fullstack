document.querySelector('button').addEventListener('click',buttonClicked)

function buttonClicked(){
    let SEARCH_QUERY = document.querySelector('input').value
    console.log(SEARCH_QUERY)
    URL = `https://images-api.nasa.gov/search?q=${SEARCH_QUERY}`
    fetch(URL)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        let RESULTS_ARRAY = data.collection.items
        // for (items in RESULTS_ARRAY){
        //     document.getElementById('imageCollection').innerHTML = `<img src="${items.href}">`
        // }
        console.log(RESULTS_ARRAY)
        //RESULTS_ARRAY.forEach(element => console.log(element[href]))
        RESULTS_ARRAY.forEach(element=>{
            let LINK_ARRAY = element.links
            if (LINK_ARRAY[LINK_ARRAY.length -1].render === 'image'){
                document.getElementById('imageCollection').innerHTML += `<img src="${LINK_ARRAY[LINK_ARRAY.length -1].href}">`
            }
            console.log(LINK_ARRAY[LINK_ARRAY.length -1])
        })
        //document.getElementById('imageCollection').innerHTML = `<img src="${RESULTS_ARRAY[0].href}">`
    })
    
}
