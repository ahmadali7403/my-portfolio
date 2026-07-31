/**
 * EmailJS Configuration
 *
 * Replace these placeholder values with your actual EmailJS credentials:
 * 1. Sign up at https://www.emailjs.com/
 * 2. Create an Email Service (Gmail recommended)
 * 3. Create an Email Template with variables: from_name, from_email, subject, message
 * 4. Copy your Service ID, Template ID, and Public Key below
 */
export const emailjsConfig = {
  serviceId: 'service_w0tqt8q',
  templateId: 'template_9mnje6k',
  publicKey: 't2pZYJAlYGYZ_kkLf',
}

// My EmailJs id's and key

// service_83wvd29  service_id
// template_9mnje6k template_id
// t2pZYJAlYGYZ_kkLf  public_key

export const isEmailJsConfigured = () =>
  !Object.values(emailjsConfig).some((value) => value.startsWith('YOUR_'))
