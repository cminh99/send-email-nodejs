# Send email with `nodemailer`

This is a simple Nodejs application that sends and receives emails.

### Usage

Firstly, you have to [**disabled 2-factor authentication**](https://support.google.com/accounts/answer/1064203) and [**allow less secure apps to access account**](https://myaccount.google.com/lesssecureapps) on your Google account.

Then clone the repository and install dependencies.

```
$ git clone https://github.com/nhcminh303/send-email-nodejs.git
$ cd send-email-nodejs
$ npm install
```

The application uses environment variables to configure the sender email and the sender password required to send the email.

```
APP_EMAIL=your.gmail.account@gmail.com
APP_PASSWORD=your.gmail.password
```

Use the command `npm start` to run the application .

Go to http://localhost:3000/contact on your browser to see the application in action.
