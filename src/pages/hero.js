import styles from './hero.css';
import {connect} from 'dva';
function Hero(props){
  console.log(props.hero);
  return (
    <div className={styles.normal}>
      <h1>Page hero</h1>
      <h2>{JSON.stringify(props.hero)}</h2>
    </div>
  );
}

export default connect(({ hero }) => ({ hero }))(Hero);
