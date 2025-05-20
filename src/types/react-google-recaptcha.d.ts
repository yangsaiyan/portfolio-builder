declare module 'react-google-recaptcha' {
  import { Component } from 'react';
  
  interface ReCAPTCHAProps {
    sitekey: string;
    onChange?: (value: string | null) => void;
  }

  export default class ReCAPTCHA extends Component<ReCAPTCHAProps> {}
} 