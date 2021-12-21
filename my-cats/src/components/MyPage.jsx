import {useEffect, useState} from "react";

function MyPage() {
    const [image, setImage] = useState('')

    useEffect(() => {
        fetch('https://api.thecatapi.com/v1/images', {
            method: 'GET',
            headers: {
                'X-Api-Key': 'bdcd53b0-890b-4532-b3ff-4612152c657f',
            }
        })
            .then((data) => data.json())
            .then((img) => {
                setImage(img[0].url);
            })
    }, [])
    return (
        <div className="App">
           <h2>My Cat photo Picture</h2>
            {<img width={800} height={800} src={image} alt=""/>}
        </div>
    );
}
export default MyPage;
