import {useEffect, useState} from "react";
import style from './CardList.module.css'

function CatList() {
    const [data, setData] = useState([])
    const [visable, setVisable] = useState(4)
    const [title, setTitle] = useState(true)

    useEffect( () => {
         fetch('https://api.thecatapi.com/v1/breeds')
            .then((res) => res.json())
            .then((data) => setData(data))
    },[])

    const changeTitle = () => {
        setTitle(!title)
    }
    const showMoreItems = () => {
        setVisable((preValue) => preValue + 4)
    }
    return (
        <div className={style.cardList}>
            <h1 className={style.fontFamily} onMouseOver={changeTitle}>{title ? 'Cat' : 'Instagram'}</h1>
        <div className={style.catWrapper}>
            {data.slice(0, visable).map((element) => <div key={element.image?.url} className={style.catImage}><img height={400} width={400} src={element.image?.url} alt="Cats"/></div>)}
        </div>
    <button  id='btn' onClick={showMoreItems}><img height={50} width={50} src='https://cdn-icons.flaticon.com/png/512/906/premium/906265.png?token=exp=1640024648~hmac=6aebc006e382075564c88451733036e1' alt="Cat"/></button>
    <br/>
    <label htmlFor="btn">Load more</label>
</div>
)
}


export default CatList