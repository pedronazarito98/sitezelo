import styles from './styles.module.scss';

export function InfoVideo() {
    return (
        <>
            <section className={styles.containerContent}>
                <div className={styles.containerTitle}>
                    <h1>
                        Conte com a melhor e maior assistência
                        funerária do Brasil.
                    </h1>
                </div>
                <ul className={styles.containerColor}>
                    <li> <strong>+ 2 milhões </strong> de associados</li>
                    <li> <strong>Cobertura </strong> Nacional</li>
                    <li> <strong>+ 150 </strong> unidades própias</li>
                </ul>
            </section>


            <section className={styles.sectionVideo}>
                <div className={styles.containerVideo}>
                    <iframe
                        width="539"
                        height="315"
                        src="https://www.youtube.com/embed/JGvGOQrERnI"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; 
                        clipboard-write; encrypted-media;
                        gyroscope; picture-in-picture"
                        allowfullscreen></iframe>
                </div>
                <div className={styles.containerInfoVideo}>
                    <h2>Nosso papel é zelar
                        por você e a todos que ama.</h2>
                        <button>Conheça nossos planos</button>
                </div>
            </section>


        </>
    )
}