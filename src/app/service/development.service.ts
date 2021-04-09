import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DevelopmentService {
frontend:any[]=[
  {
   id:1,
   name:"Angular",
   img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_1PBzpB_POWUR2X3ajy4WMNVgmGhcy1nwfA&usqp=CAU"
  },
  {
   id:2,
   name:"ReactJs",
   img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx4qF1hSIMJoyCeJ2IRqLDGUZSKDkhfYdSkw&usqp=CAU"
  },
  {
   id:3,
   name:"VueJs",
   img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfw0OV4qoBAXltrlnbtyq2pBdON072Y7TkHA&usqp=CAU"
  },
  {
   id:4,
   name:"Angular Material",
   img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsjtdqYUXxtVLgYaphFJup1hiQ0dc73dqA6w&usqp=CAU"
  }
];
 
backend:any[]=[
  {
  id:1,
  name:"Php",
  img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJXbX5Jg9eLXvRsfe0QynHjghWcucy2xNXcg&usqp=CAU"
},
  {
  id:2,
  name:"NodeJs",
  img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6QdmLH-VXb9Uk3xc3vBxcUqdZ4JRx-njofQ&usqp=CAU"
},
  {
  id:3,
  name:"Python",
  img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe3plb1F_jHYIgr6fDiL5SO9zEviEty6hgIQ&usqp=CAU"
},
  {
  id:4,
  name:"Ruby",
  img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHb7k-3o_meQEPfLkgIFNVIluXNEG8U8HdaA&usqp=CAU"
}
];
  constructor() { }
  getFrontend():any[]{
    return this.frontend;
  }
  getBackend():any[]{
    return this.backend;
  }
}
