import styles from './styles.module.scss';
// import {ImgPigg} from './images/calm.svg'


export function CardPlanos(props ) {
    const { icon, title, content} = props;
    return (
        <>
            <section className={styles.containerCard}>
                <div className={styles.containerImage}>
                    <img src={icon} alt="logo" />
                </div>

                <div className={styles.containerContent}>
                    <h2>{title}</h2>
                    <span>
                        {content}
                    </span>
                </div>
            </section>


        </>
    )
}