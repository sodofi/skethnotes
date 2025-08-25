export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { email, subject, message } = req.body;

  if (!email || !subject || !message) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  try {
    // You can use any email service here
    // For now, we'll just log the data
    console.log('Contact form submission:', { email, subject, message });
    
    // TODO: Add your email service here (SendGrid, Nodemailer, etc.)
    
    res.status(200).json({ message: 'Message sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Error sending message' });
  }
} 