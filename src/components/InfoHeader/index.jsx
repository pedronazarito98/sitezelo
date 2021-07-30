import styles from './styles.module.scss';

export function InfoHeader() {
    return (

        <div className={styles.containerContent}>

            <h2>
                Planos Zelo para você e sua família
            </h2>

            <span>
                Zela pela memória. Acolher no momento final. <br />
                Homenagear da maneira ideal
            </span>

            <button className={styles.buttonPlanos}>
                Conheça nossos planos
            </button>

        </div>
    )
}