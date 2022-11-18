function enablePhotoUpload(){
    const imageInput = document.querySelector("#image-input")

    imageInput.addEventListener("change", function(){
        const reader = new FileReader()
        reader.addEventListener("load", ()=>{
            const uploadImage = reader.result

            changeMemePicture(uploadImage)

            // document.querySelector("#display-image").style.backgroundImage = `url(${uploadImage})`

        })

        reader.readAsDataURL(this.files[0])

        })
    
}

async function mapImageList(){
    const memesObjetct = [
      { 
        "name": "Felipão",
        "path": "images/felipao.png"
      
      },
      {
        "name": "Bruxa do 71 (1)",
        "path": "images/bruxa1.jpg"
      },
      {
        "name": "Bruxa do 71 (2)",
        "path": "images/bruxa2.jpg"
      },
      {
        "name": "Bruxa do 71 (3)",
        "path": "images/bruxa3.jpg"
      }
    ]

    return memesObjetct
}

async function createGallery(imageList){
    const memeSelector = document.querySelector("#meme-list")

    imageList.forEach(picture => {
        let newOption = document.createElement("option")
        newOption.text = picture.name.toUpperCase()
        newOption.value = picture.path
        memeSelector.appendChild(newOption)
    } )

}

async function changeMemePicture(photo) {
    let displayImage = document.querySelector("#display-image")
    displayImage.style.backgroundImage = `url('${photo}')`

}

/* main ou init */

async function main(){
    const memesImageList = await mapImageList()
    console.log(memesImageList)

    enablePhotoUpload()
    await createGallery(memesImageList)
    await changeMemePicture(memesImageList[0].path)
    
}

main()