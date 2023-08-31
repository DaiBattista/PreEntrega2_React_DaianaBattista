import style from './style.module.css'

export default function ItemDetail({ detail }) {
    return (
        <div className={style['container_detail']}>
        <div className={style['container_imagen']}>
        </div>
        <div className={style['container_info']}>
            <h1>{detail.name}</h1>
            <p>${detail.price}</p>
            </div>
        </div>
    )
}