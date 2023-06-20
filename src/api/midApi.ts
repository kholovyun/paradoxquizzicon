import { instance } from "./instance";


export interface IMidCreateDTO {
    prompt: string,
}
export interface IMidGetDTO {
  taskId: string,
  position: number
}


export const midJourneyApi = async (promptValue: IMidCreateDTO) => {
    try {
      const response = await instance.post('/imagine', 
        promptValue
      , {
        headers: {
            'Authorization': '5bddac90-b756-4e83-a53e-8cd9feab5f10', 
            'Content-Type': 'application/json'
        },
      });
      const getData = {taskId: response.data.taskId, position: 1}
      const images = await instance.post('/result', getData,{
        headers: {
            'Authorization': '5bddac90-b756-4e83-a53e-8cd9feab5f10', 
            'Content-Type': 'application/json'
        }
      }
      )
      console.log(images)
    } catch (error) {
      console.error(error);
    }
};




//export const deepaiGenerator = async (keys: string) => {
//     try {
//       const response = await instance.post('api/text2img', {
//         text: keys,
//       }, {
//         headers: {
//           'api-key': 'e3c65915-fcb4-48ee-9e39-7243d544547a',
//         },
//       });
//       console.log(response)
//     } catch (error) {
//       console.error(error);
//     }
//   };