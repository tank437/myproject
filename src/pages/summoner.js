import styles from './summoner.css';
import {connect} from 'dva';
function Summoner(props){
  console.log(props.summoner);
  return (
    <div className={styles.normal}>
      <h1>Page item</h1>
      <h2>This is {props.summoner}</h2>
    </div>
  );
}

export default connect(({ summoner }) => ({ summoner }))(Summoner);
