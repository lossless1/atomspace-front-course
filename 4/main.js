// try {
//   try {
//     throw new Error("Deep try cache error");
//     try {
//       throw new Error("Deep try cache error");
//     } catch (e) {
//       console.error(e);
//     }
//   } catch (e) {
//     console.error(e);
//   }
// } catch (e) {
//   console.log(e);
// }

// console.time("This is error");
// console.timeEnd("This is error");
(async () => {
  console.log(1);
  const user = await fetch("https://api.github.com/users/lossless1/repos", {
    method: "GET",
  });
  console.log(2);

  // name;
  // url;
  // ssh_url;

  const userJson = await user.json();
  console.log(userJson);
  const mainContainerEl = document.getElementById("main-container");
  userJson.forEach((rep) => {
    const div = document.createElement("div");
    const span = document.createElement("span");
    span.innerText = rep.name;
    div.append(span);
    const span2 = document.createElement("span");
    span2.innerText = rep.ssh_url;
    div.append(span2);
    const link = document.createElement("a");
    link.href = rep.url;
    link.innerText = rep.url;
    div.append(link);
    mainContainerEl.append(div);
  });
  // console.log(json);
  console.log(3);
})();
