import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";

import { Link } from "react-router-dom";
/**
 * useSelector用来获取store中的值，可以获取总的，也可以获取某个模块
 * useDispatch用来发送action，改变store中的值
 */
import { getUserList } from "../../api/userList";
import Test from "../../components/test";
import Test2 from "../../components/test2";
import Test3 from "../../components/test3";

const Home = props => {
  const data = useSelector(state => state.calc);
  const dispatch = useDispatch();

  const [users, setUsers] = useState([]);
  const [count, setCount] = useState(0);
  const [countPar, setCountPar] = useState(0);
  const [results, setResults] = useState({ name: "dingxueSOng", score: 99 });
  const [testData, setTestData] = useState([
    { title: "吃饭", isFinish: false },
    { title: "洗衣服", isFinish: false },
    { title: "购物", isFinish: false },
    { title: "追剧", isFinish: false }
  ]);

  /**
   * 两种请求数据的方法 在回调里setState 和 使用await函数
   */
  // useEffect(() => {
  //   axios
  //     .get("/data.json")
  //     .then(res => {
  //       res && res.data && setUsers(res.data.data);
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // }, []);

  useEffect(() => {
    (async function() {
      const res = await getUserList();
      res && setUsers(res.data);
    })();
  }, []);

  const handleAdd = () => {
    dispatch({
      type: "ADD"
    });
  };

  const handleReduce = () => {
    dispatch({
      type: "REDUCE"
    });
  };

  const handleClick = index => {
    // setTestData([..._.set(testData, [index, "isFinish"], true)]);
    testData.forEach((item, i) => {
      if (i == index) {
        item.isFinish = true;
      }
    });
    setTestData([...testData]);
    console.log("🐍---------------->", testData);
  };

  return (
    <div>
      <h1>Home</h1>
      <button
        onClick={() => {
          props.history.push({ pathname: "/about" });
        }}
      >
        跳转到 about 页面
      </button>
      {/* <Link to="/more/110">跳转更多-路由传参</Link> */}
      <button
        onClick={() => {
          props.history.push({
            pathname: "/more",
            state: {
              userName: "dingSOngSOng"
            }
          });
        }}
      >
        跳转更多-编程式跳转
      </button>

      <hr />
      <button onClick={handleAdd}>加1</button>
      {data.num}
      <button onClick={handleReduce}>减1</button>
      <hr />
      {users &&
        users.length > 0 &&
        users.map(user => <div key={user.id}>{user.name}</div>)}
      <hr />
      <button
        onClick={() => {
          setCountPar(countPar + 1);
        }}
      >
        父组件中自己的状态(父组件中的任何一个状态的改变都会触发所有子组件的render，即使传递给子组件的props没有发生改变,注意：即使会触发render但是diff运算后可不一定会重新渲染dom)
      </button>
      <span>{countPar}</span>
      <hr />
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        改变子组件中的值(shouldComponentUpdate)
      </button>
      <Test count={count} />
      <hr />
      <button
        onClick={() => {
          setResults(
            Object.assign({}, { ...results, score: results.score + 1 })
          );
        }}
      >
        HookTest
      </button>
      <Test2 info={results} />
      <hr />
      <button
        onClick={() => {
          // setTestData({ ...testData, age: testData.age + 1 });
          setTestData(Object.assign({}, testData, { age: testData.age + 1 }));
        }}
      >
        改变子组件Test3中的值
      </button>
      <Test3 data={testData} onClick={handleClick} />
    </div>
  );
};

export default Home;
