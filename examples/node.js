function echo(msg, error) {
  return new Promise((resolve, rejected) => {
    setTimeout(() => {
      error ? reject("ups..") : resolve(msg);
      const fetch = require("node-fetch");
      const time = new Date();

      fetch("http://localhost:3000/users", {
        headers: { "Content-Type": "application/json; charset=utf-8" },
        method: "POST",
        body: JSON.stringify({
          first_name: `maciej`,
          last_name: `j`,
          e_mail: `mj@mj.pl`,
          tel: `1234`,
          dateJoin: `${time}`
        })
      });
    }, 10000);
  });
}

p = echo("ala");
p2 = p.then(w => w + " ma ");
p3 = p2.then(w => echo(w + "kota"));
p3.then(w => {
  console.log(w);
});
