
// import RingsSDK  from 'node_modules/fb5102b908ba428f9ee11b83ae923a43';
import RingsSDK from "@gitonga/sdk_test";

const client: RingsSDK = new RingsSDK({
    apiKey: "ok797nVoYjqA78XKDmLW",
  });
  
  client.getQoutes().then((p: any) => {
    console.log(p);
  }); 
  
//   client.getQuoteById("5cd96e05de30eff6ebcce84b").then((p: any) => {
//     console.log(p);
//   });
  
//   client
//     .createPost({
//       title: "test",
//       body: "test",
//       userId: 1,
//     })
//     .then((p) => {
//       console.log(`Created new post with id ${p.id}`);
//     });