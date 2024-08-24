import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-varanambookticket',
  templateUrl: './varanambookticket.component.html',
  styleUrls: ['./varanambookticket.component.css']
})
export class VaranambookticketComponent {

  value: number = 0; // Default value
  showValue: boolean = false;

  onInputChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.value = Number(input.value);
    this.showValue = true;
  }
  onBlur(): void {
    this.showValue = false;
  }

  bgColor1 = 'white';
  textColor1 = 'rgb(247, 92, 92)';

  bgColor2 = 'white';
  textColor2 = 'rgb(247, 92, 92)';

  bgColor3 = 'white';
  textColor3 = 'rgb(247, 92, 92)';

  bgColor4 = 'white';
  textColor4 = 'rgb(247, 92, 92)';

  bgColor5 = 'white';
  textColor5 = 'rgb(247, 92, 92)';

  bgColor6 = 'white';
  textColor6 = 'rgb(247, 92, 92)';

  bgColor7 = 'white';
  textColor7 = 'rgb(247, 92, 92)';

  bgColor8 = 'white';
  textColor8 = 'rgb(247, 92, 92)';

  bgColor9 = 'white';
  textColor9 = 'rgb(247, 92, 92)';

  // Function to change colors for a specific button
  changeColor(button: string) {
    if (button === 'button1') {
      this.bgColor1 = this.bgColor1 === 'white' ? 'rgb(247, 92, 92)' : 'white';
      this.textColor1 = this.textColor1 === 'rgb(247, 92, 92)' ? 'white' : 'rgb(247, 92, 92)';
    } else if (button === 'button2') {
      this.bgColor2 = this.bgColor2 === 'white' ? 'rgb(247, 92, 92)' : 'white';
      this.textColor2 = this.textColor2 === 'rgb(247, 92, 92)' ? 'white' : 'rgb(247, 92, 92)';
    }
    else if (button === 'button3') {
      this.bgColor3 = this.bgColor3 === 'white' ? 'rgb(247, 92, 92)' : 'white';
      this.textColor3 = this.textColor3 === 'rgb(247, 92, 92)' ? 'white' : 'rgb(247, 92, 92)';
    }
    else if (button === 'button4') {
      this.bgColor4 = this.bgColor4 === 'white' ? 'rgb(247, 92, 92)' : 'white';
      this.textColor4 = this.textColor4 === 'rgb(247, 92, 92)' ? 'white' : 'rgb(247, 92, 92)';
    }
    else if (button === 'button5') {
      this.bgColor5 = this.bgColor5 === 'white' ? 'rgb(247, 92, 92)' : 'white';
      this.textColor5 = this.textColor5 === 'rgb(247, 92, 92)' ? 'white' : 'rgb(247, 92, 92)';
    }
    else if (button === 'button6') {
      this.bgColor6 = this.bgColor6 === 'white' ? 'rgb(247, 92, 92)' : 'white';
      this.textColor6 = this.textColor6 === 'rgb(247, 92, 92)' ? 'white' : 'rgb(247, 92, 92)';
    }
    else if (button === 'button7') {
      this.bgColor7 = this.bgColor7 === 'white' ? 'rgb(247, 92, 92)' : 'white';
      this.textColor7 = this.textColor7 === 'rgb(247, 92, 92)' ? 'white' : 'rgb(247, 92, 92)';
    }
    else if (button === 'button8') {
      this.bgColor8 = this.bgColor8 === 'white' ? 'rgb(247, 92, 92)' : 'white';
      this.textColor8 = this.textColor8 === 'rgb(247, 92, 92)' ? 'white' : 'rgb(247, 92, 92)';
    }
    else if (button === 'button9') {
      this.bgColor9 = this.bgColor9 === 'white' ? 'rgb(247, 92, 92)' : 'white';
      this.textColor9 = this.textColor9 === 'rgb(247, 92, 92)' ? 'white' : 'rgb(247, 92, 92)';
    }
  }
  alertWithSuccess(){
    Swal.fire({
      icon: "success",
      title: "submitted successfully",
      showConfirmButton: false,
      timer: 1800
    });
  }


}
