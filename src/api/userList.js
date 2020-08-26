import axios from "axios";

async function getUserList() {
  return new Promise((resolve, reject) => {
    axios
      .get("/data.json")
      .then(res => {
        res && res.data && resolve(res.data);
      })
      .catch(err => {
        reject(err);
      });
  });
}

export { getUserList };
