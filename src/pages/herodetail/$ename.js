import styles from './ename.css';

export default function ({ match }) {
    //    isExact: true
  //    params:
  //        ename: "123"
  //    path: "/herodetail/:ename"
  //    url: "/herodetail/123"
  console.log(match);
  return (
    <div >
      <h1>herodetail ename Page ename</h1>
    </div>
  );
}
