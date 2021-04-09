import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class YtchannelService {
 ytdata:any[]=[
   {
     id:1,
     name:"yahoo baba",
     link:"https://m.youtube.com/channel/UCuT0rj__qEq_ZO3kYwun4Qg",
     img:"https://yt3.ggpht.com/ytc/AAUvwniAqYwWxV6bmf3tjZ_DhxkttNGnh9AJqDiNhZ_AAQ=s900-c-k-c0x00ffffff-no-rj"
   },
   {
     id:2,
     name:"kudvenkat",
     link:"https://www.youtube.com/user/kudvenkat",
     img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmaCksUrBWlairCWR8Vq2cTJtB9FCI3Env0Q&usqp=CAU"
    },
   {
     id:3,
     name:"freecodecamp",
     link:"https://www.google.com/url?sa=t&source=web&rct=j&url=https://m.youtube.com/c/Freecodecamp/videos&ved=2ahUKEwi_s-KB9fDvAhUXyzgGHcmACOIQjjgwC3oECAUQAg&usg=AOvVaw3ZeF45j-nFhrDBc1_a_483",
     img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6PkbkKlpTeSzimaOM8_l6aeuWyznTiR9KdQ&usqp=CAU"
     
   },
   {
     id:4,
     name:"Codding Addict",
     link:"https://m.youtube.com/channel/UCMZFwxv5l-XtKi693qMJptA",
     img:"https://yt3.ggpht.com/ytc/AAUvwniaHN7MZyFEiNvdHuKMzIWnDF604Z2--O4GCMq-FA=s900-c-k-c0x00ffffff-no-rj"
   },
   {
     id:5,
     name:"Programming with mosh",
     link:"https://m.youtube.com/user/programmingwithmosh",
     img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRquOYydBGPlJqm6LHCGYXaInKfpy_9yNW3cQ&usqp=CAU"
   },
   {
     id:6,
     name:"codevolution",
     link:"https://www.google.com/url?sa=t&source=web&rct=j&url=https://m.youtube.com/c/Codevolution/playlists%3Fview%3D1&ved=2ahUKEwjCmKf1_vDvAhXxmuYKHfi3AlIQjjgwGXoECAgQAg&usg=AOvVaw1mRYsh2Xr3k1AUZvEQpnSc",
     img:"https://yt3.ggpht.com/ytc/AAUvwnj5vbwTemGpOuabZnfkl_tDzb_Fldf_CSMW2cg3=s100-c-k-c0x00ffffff-no-rj"
   },
   {
     id:7,
     name:"simpli learn",
     link:"https://m.youtube.com/user/Simplilearn",
     img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0V909UcZOsvFO5BWJa5TwSu21nvt0-xetQA&usqp=CAU"
   },
   {
     id:8,
     name:"edureka!",
     link:"https://www.youtube.com/channel/UCkw4JCwteGrDHIsyIIKo4tQ",
     img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT27NeImgm_sTSQUZQSe7M29rktLHLwSpo51g&usqp=CAU"
   },
   {
     id:9,
     name:"intelipaat",
     link:"https://www.youtube.com/c/Intellipaat/playlists?view=50&sort=dd&shelf_id=3",
     img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTntm_81tzHXn4C1aI5ykM7D85CJa8mKefwaQ&usqp=CAU"
   },
   {
     id:10,
     name:"code with Harry",
     link:"https://www.youtube.com/channel/UCeVMnSShP_Iviwkknt83cww",
     img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZSqJy2VCewKDkQVRvGyXneKm7_tIE4wwRhQ&usqp=CAU"
   }
   ];
  constructor() { }
  
  getYtchannel():any[]{
    return this.ytdata;
  }
}
