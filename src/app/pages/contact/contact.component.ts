import { Component, OnInit } from '@angular/core';
import { EmailService } from '../../services/email.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss']
})
export class Contact implements OnInit {

    constructor(private EmailService: EmailService) { }

    successMessage: string = '';
    errorMessage: string = '';
    showLoader: boolean = false;
    form: FormGroup;

    ngOnInit() {
        this.form = new FormGroup({
            name: new FormControl('', Validators.required),
            surename: new FormControl('', Validators.required),
            subject: new FormControl('', Validators.required),
            email: new FormControl('', [Validators.required, Validators.email]),
            message: new FormControl('', Validators.required)
        });
    }


    submit() {
        // remove success and error messages
        this.successMessage = '';
        this.errorMessage = '';

        if (this.form.invalid) {
            // iterate over form controls and add invalid class to each one that is invalid
            Object.keys(this.form.controls).forEach(field => {
                // get input form document
                const control = this.form.get(field);
                // add invalid class to input
                control.markAsTouched({ onlySelf: true });
            });
            return;
        }

        this.showLoader = true;
        this.EmailService.sendEmail(
                this.form.get('name').value,
                this.form.get('surename').value,
                this.form.get('subject').value,
                this.form.get('email').value,
                this.form.get('message').value
            )
            .subscribe(res => {
                this.showLoader = false;
                if (res.success) this.handleSuccessMessage(this.form.get('name').value + " " + this.form.get('surename').value);
                else this.handleErrorMessage();
                this.eraseForm();
            });
    }

    handleSuccessMessage(sender: string) {
        this.successMessage = `Dear ${sender}, your message has been sent successfully. I will contact you as soon as possible.`;
    }

    handleErrorMessage() {
        this.errorMessage = 'Something went worng, please try again later.';
    }

    eraseForm() {
        Object.keys(this.form.controls).forEach(field => {
            const control = this.form.get(field);
            control.markAsUntouched({ onlySelf: true });
        });
        this.form.get('name').setValue('');
        this.form.get('surename').setValue('');
        this.form.get('subject').setValue('');
        this.form.get('email').setValue('');
        this.form.get('message').setValue('');
    }

    fakesubmit() {
        this.successMessage = '';
        this.errorMessage = '';

        this.showLoader = true;
        setTimeout(() => {
            this.showLoader = false;
            this.handleSuccessMessage('John Doe');
            //this.handleErrorMessage();
            this.eraseForm();
        }, 5000);
    }
}
