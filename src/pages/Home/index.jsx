import { CardPlanos } from '../../components/Cards/index'
import styles from './styles.module.scss'
import { DadosCard } from '../../utils/content_cards/index'
import { InfoHeader } from '../../components/InfoHeader';

import imgMalvino from '../../images/imgHome.png'
import { InfoVideo } from '../../views/infoVideo';
import { MenuPlanos } from '../../views/viewPlanos';


export function Home() {
  return (
    <>

      <header>
        
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
          <polygon fill="white" points="0,100 100,0 100,100" />
        </svg>

          <div className={styles.containerInfoHeader}>
            <InfoHeader/>
          </div>

          <div className={styles.containerImagem}>
            <img src={imgMalvino} alt="" />
          </div>
          
      </header>


      <h1>Qual a importância de um plano funerário?</h1>
      <section className={styles.containerCardPlanos}>
        {DadosCard.map((props) =>
          <CardPlanos
            icon={props.imagem}
            title={props.title}
            content={props.content}
          />
        )}
      </section>

      <section className={styles.containerView_video}>
          <InfoVideo/>
      </section>

      <section className={styles.containerView_planos}>
      <MenuPlanos/>
      </section>



    </>
  )
}