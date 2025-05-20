document.querySelector('button').addEventListener('click',getArt)

async function getArt(){
    let ART_ID = null
    await fetch('https://api.artic.edu/api/v1/artworks')
        .then(res => res.json())
        .then(data => {
            //console.log(data.data[0])
            ART_ID = data.data[0].id
            //console.log(ART_ID)
        })
            
        .catch(err=>(`error: ${err}`))

    let url = `https://api.artic.edu/api/v1/artworks/${ART_ID}?fields=id,title,image_id`
    await fetch(url)
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => (`error: ${err}`))
}