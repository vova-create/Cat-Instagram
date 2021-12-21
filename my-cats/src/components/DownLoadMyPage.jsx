import {useEffect, useState} from "react";

function DownLoadMyPage() {
const [selectImage, setSelectedImage] = useState()

    const upLoadImage = () => {
    const formData = new FormData();
    formData.append('file', selectImage);
    formData.append('sub_id', '');

        fetch('https://api.thecatapi.com/v1/images/upload', {
            method: 'POST',
            headers: {
                'X-Api-Key': 'bdcd53b0-890b-4532-b3ff-4612152c657f',
            },
            body: formData
        })
    }
    return (
        <div className="App">
            <h2>Download my cat photo</h2>

            <input type="file" onChange={(event) => {setSelectedImage(event.target.files[0])}}/>
            <button onClick={upLoadImage}><img width={20} height={20} src="https://cdn-icons.flaticon.com/png/512/2716/premium/2716054.png?token=exp=1640096481~hmac=f1268c9f814d05df0cc10f571d347675" alt=""/></button>
        </div>
    );
}

export default DownLoadMyPage;
