import { Component } from '@angular/core';

@Component({
  selector: 'app-play5',
  templateUrl: './play5.component.html',
  styleUrls: ['./play5.component.css']
})
export class Play5Component {

   
  likes: number = 54;
  isInterested: boolean = false;

  onClickInterested() {
    this.isInterested  = !this.isInterested;
   if(this.isInterested){
      this.likes++;               
   }
   else{
    this.likes--;
   }
  }

  isLiked: boolean = false;
  likeCount: number = 0;
  likeStatus: string = "Click on Interested to stay updated about this event.";

  toggleLike() {
    this.isLiked = !this.isLiked;
    if (this.isLiked) {
      this.likeCount++;
      this.likeStatus = this.likeCount === 1 ? "Great! You will now be updated with all the happenings of this event." : `${this.likeCount} people like this`;
      
    } else {
      this.likeCount--;
      this.likeStatus = this.likeCount === 0 ? "Click on Interested to stay updated about this event." : `${this.likeCount} people like this`;
    }
  }
}
