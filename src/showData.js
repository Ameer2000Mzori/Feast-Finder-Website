export const showData = (data) => {
  data.forEach((element) => {
    console.log('title', element.title)
    console.log('publisher', element.publisher)
    console.log('image_url', element.image_url)
  })
}
