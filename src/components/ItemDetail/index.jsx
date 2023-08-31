import style from './style.module.css'

export default function ItemDetail({ detail }) {
    return (
        <div className={style['container_detail']}>
        <div className={style['container_imagen']}>
            <img src={detail.img} className={style['img_style']}/>
        </div>
        <div className={style['container_info']}>
            <h1>{detail.name}</h1>
            <h2>${detail.price}</h2>
            </div>
        </div>
    )
}