/*
  Here is a rough idea for the steps you could take:
*/

// 1. First select and store the elements you'll be working with
// 2. Create your `submit` event for getting the user's search term
// 3. Create your `fetch` request that is called after a submission
// 4. Create a way to append the fetch results to your page
// 5. Create a way to listen for a click that will play the song in the audio play

let url = "https://itunes.apple.com/search?term=jack+johnson&limit=25"

// let value = document.querySelector("#searchBox").value
// url += value

let artistName
let trackName
let artworkUrl100
let previewUrl
let collectionName // Album name

// Select and store the information we want to work with
fetch(url).then(response => response.json()).then(data => {
  for (var i = 0; i < data.results.length; i++) {
    artistName = data.results[i].artistName
    trackName = data.results[i].trackName
    artworkUrl100 = data.results[i].artworkUrl100
    previewUrl = data.results[i].previewUrXl
    collectionName = data.results[i].collectionName
    console.log(collectionName)
  }
})
