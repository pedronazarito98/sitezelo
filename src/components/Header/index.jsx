import styles from './styles.module.scss';

export function Header() {
    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <img src="./images/logoZelo.svg" alt="Logo" />
    
                <nav>
                    <a href="/">Quem Somos</a>
                    <a href="/"> Planos Funerários</a>
                    <a href="/"> Desconto Ducash</a>
                    <a href="/"> Contato </a>
                    <a href="/"> Blog </a>

                    <button> Área do Cliente</button>
                </nav>

            </div>
        </header>
    )
}