
import React from "react";  // import React (to provide access to JSX)

function PhotoViewer(props) {    // declare a new function called 'PhotoViewer'
    return (
        <div className="main-image" >
            <img src={props.src + '/300'} />
        </div>
    );
}


function SmallPhotoViewer(props) {
    return (
        <div className="little-image">
            
            <img className={props.className}  onClick = {props.onClick}  src={props.path + '/70'} />
            
        </div >
    )
}

const brokenImages = [
    1, 24, 32, 36, 44, 47
];

function getImageUrls() {
    const urls = [];

    for (let i = 0; i < 50; i++) {
        if (!brokenImages.includes(i)) {
            const imageNumberString = i.toString().padStart(2, '0');
            urls.push(`https://picsum.photos/id/6${imageNumberString}`)
        }
    }

    return urls;
}

export const ImageUrls = getImageUrls();


export { PhotoViewer, SmallPhotoViewer };       // Export the function so that it can be imported in other files