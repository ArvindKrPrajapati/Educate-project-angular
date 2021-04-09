import { Component, OnInit } from '@angular/core';
import { YtchannelService } from '../../service/ytchannel.service';  


@Component({
  selector: 'app-channel',
  templateUrl: './channel.component.html',
  styleUrls: ['./channel.component.css']
})
export class ChannelComponent implements OnInit {
 channels:any[]=[];
  constructor(private _service:YtchannelService) { }

  ngOnInit(): void {
    this.channels=this._service.getYtchannel();
  }
  
  goToYt(link):void{
    window.location.href=link;
  }

}
