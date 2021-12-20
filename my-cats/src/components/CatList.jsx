import {useEffect, useState} from "react";
import style from './CardList.module.css'


function CatList() {
    const [data, setData] = useState([])
    const [visable, setVisable] = useState(2)
    console.log(data.name)


    useEffect( () => {
        const req  = fetch('https://api.thecatapi.com/v1/breeds')
            .then((res) => res.json())
            .then((data) => setData(data))
    },[])

    const showMoreItems = () => {
        setVisable((preValue) => preValue + 2)
    }
    return (
        <div className={style.cardList}>
            <h1 className={style.fontFamily}>Cat Instagram</h1>
        <div className={style.catWrapper}>
            {data.slice(0, visable).map((element) => <div className='cat-image'><img height={450} width={450} src={element.image?.url} alt=""/></div>)}
        </div>
    <button  id='btn' onClick={showMoreItems}><img height={50} width={50} src='https://cdn-icons.flaticon.com/png/512/906/premium/906265.png?token=exp=1640024648~hmac=6aebc006e382075564c88451733036e1' alt="Cat"/></button>
    <br/>
    <label htmlFor="btn">Load more</label>
</div>
)
}


export default CatList