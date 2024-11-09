import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
// public contactForm: FormGroup

ngOnInit(){

}
submit(){
  console.log("submit")
  Swal.fire("SweetAlert2 is working!");

  // emailjs.send('your_service_id', 'your_template_id', {
  //   // from_name: contactForm.value.name,
  //   // reply_to: contactForm.value.email,
  //   // message: contactForm.value.message
  // }, 'your_user_id')
  // .then((result: EmailJSResponseStatus) => {
  //   console.log(result.text);
  //   alert('Email Sent Successfully!');
  // }, (error) => {
  //   console.log(error.text);
  //   alert('Failed to Send Email');
  // });
}
}
