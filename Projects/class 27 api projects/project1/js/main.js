document.querySelector('button').addEventListener('click',getArt)

async function getArt(){
    let ART_ID = null
    let BASE_URL = null
    let IMAGE_ID = null
    let URL_ENDING = '/full/843,/0/default.jpg'
    await fetch('https://api.artic.edu/api/v1/artworks')
        .then(res => res.json())
        .then(data => {
            //console.log(data.data[0])
            ART_ID = data.data[5].id
            //console.log(ART_ID)
        })
            
        .catch(err=>(`error: ${err}`))

    let ART_URL = `https://api.artic.edu/api/v1/artworks/${ART_ID}?fields=id,title,image_id`
    await fetch(ART_URL)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            BASE_URL = data.config.iiif_url
            IMAGE_ID = data.data.image_id

        })
        .catch(err => (`error: ${err}`))
    let IMG_URL = `${BASE_URL}/${IMAGE_ID}${URL_ENDING}`
    document.querySelector('img').src = IMG_URL
    console.log(`${IMG_URL}`)
}