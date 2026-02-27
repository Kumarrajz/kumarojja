import { Component } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  // Form fields
  firstName: string = '';
  lastName: string = '';
  mobile: string = '';
  email: string = '';
  message: string = '';
  isSending: boolean = false;

  // EmailJS Credentials
  private SERVICE_ID = 'service_7tijajb';
  private TEMPLATE_ID = 'template_0fjpuu2';
  private PUBLIC_KEY = 'nQpwa1w7772yS27ox';

  ngOnInit() { }

  submit() {
    if (!this.firstName || !this.email || !this.message) {
      Swal.fire({
        icon: 'warning',
        title: 'Missing Fields',
        text: 'Please fill in at least your name, email, and message.',
        background: '#111111',
        color: '#FFFFFF',
        confirmButtonColor: '#FFD700'
      });
      return;
    }

    this.isSending = true;

    const templateParams = {
      from_name: `${this.firstName} ${this.lastName}`.trim(),
      reply_to: this.email,
      mobile: this.mobile,
      message: this.message
    };

    emailjs.send(this.SERVICE_ID, this.TEMPLATE_ID, templateParams, this.PUBLIC_KEY)
      .then((result: EmailJSResponseStatus) => {
        console.log('Email sent:', result.text);
        this.isSending = false;
        Swal.fire({
          icon: 'success',
          title: 'Message Sent!',
          text: 'Thanks for reaching out. I\'ll get back to you soon.',
          background: '#111111',
          color: '#FFFFFF',
          confirmButtonColor: '#FFD700'
        });
        // Reset form
        this.firstName = '';
        this.lastName = '';
        this.mobile = '';
        this.email = '';
        this.message = '';
      }, (error) => {
        console.error('Email error:', error.text);
        this.isSending = false;
        Swal.fire({
          icon: 'error',
          title: 'Failed to Send',
          text: 'Something went wrong. Please try again or email me directly.',
          background: '#111111',
          color: '#FFFFFF',
          confirmButtonColor: '#FFD700'
        });
      });
  }
}
