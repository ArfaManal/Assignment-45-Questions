"use strict";
function make_album(artist, album, tracks) {
    const albumInfo = {
        artist: artist,
        album: album,
    };
    if (tracks !== undefined) {
        albumInfo.tracks = tracks;
    }
    return albumInfo;
}
// Create dictionaries representing different albums
const album1 = make_album('Artist 1', 'Album 1', 10);
const album2 = make_album('Artist 2', 'Album 2');
const album3 = make_album('Artist 3', 'Album 3', 15);
// Print each album information
console.log(album1);
console.log(album2);
console.log(album3);
