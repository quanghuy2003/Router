import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {YoutubePlaylistComponent} from "./youtube-playlist/youtube-playlist.component";
import {YoutubePlayerComponent} from "./youtube-player/youtube-player.component";


const routes: Routes = [
  {
    path: 'youtube',
    children: [{
      path: ':id',
      component: YoutubePlayerComponent
    }]
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
