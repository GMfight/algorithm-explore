function jsonpReq(url) {
  return new Promise((resolve, reject) => {
    var methodName = `jsonp_${Math.floor(Math.random() * 100000)
      .toString()
      .substring(2, 10)}`;
    window[methodName] = function (json) {
      // console.log('this is method execute')
      // console.log(json, 5);
      window[methodName] = null;
      methodName = null;
      return resolve(json);
    };
    let scriptEl = document.createElement("script");
    scriptEl.src = `${url}&callback=${methodName}`;

    let headNode = document.getElementsByTagName("script")[0];
    headNode.appendChild(scriptEl);
  });
}
function jsonpReqTest() {
  return jsonpReq(
    `http://h5-test.sys.tv.mi.com/service/vote/getWechatVoteStatus?deviceId=001&actName=sofa0&source=mobile`
  );
}
export {
  // jsonpReq,
  jsonpReqTest,
};
