
import emailjs from '@emailjs/browser';

const PUBLIC_KEY = '7AtgrSVfC3Qn9fW8t';
const SERVICE_ID = 'service_dvwthpi';
const TEMPLATE_ID = 'template_hkmnl59';

// Initialize EmailJS
emailjs.init(PUBLIC_KEY);

export interface EmailData {
  name: string;
  email: string;
  message: string;
}

export const sendEmail = async (data: EmailData): Promise<void> => {
  try {
    const currentDate = new Date().toLocaleString();
    
    console.log('Sending email with data:', {
      user_name: data.name,
      user_email: data.email,
      user_message: data.message,
      date: currentDate
    });

    await emailjs.send(SERVICE_ID, TEMPLATE_ID, {
      user_name: data.name,
      user_email: data.email,
      user_message: data.message,
      date: currentDate,
    });
  } catch (error) {
    console.error('EmailJS error:', error);
    throw new Error('Failed to send email. Please try again.');
  }
};
