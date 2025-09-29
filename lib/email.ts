import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export async function sendWelcomeEmail(email: string) {
  const mailOptions = {
    from: `DoktorOnline <${process.env.EMAIL_USER}>`,
    replyTo: 'pixelnext9@gmail.com',
    to: email,
    subject: 'Dobrodošli na DoktorOnline listu čekanja 🎉',
    text: `Hvala na prijavi! Javimo se u 48h... 
Prednosti: bolja pozicija, 6 mjeseci besplatno, 50% popusta zauvijek.
Pitanja? +387 66 603 900`,
    headers: {
      'List-Unsubscribe': '<mailto:pixelnext9@gmail.com>'
    },
    html: `
    <div style="display:none;max-height:0;overflow:hidden;opacity:0">
      Hvala na prijavi – javimo se u 48h. 6 mjeseci besplatno + trajni popust.
    </div>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f2f4f7;padding:20px 0">
      <tr>
        <td align="center">
          <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:10px;overflow:hidden;font-family:Arial,Helvetica,sans-serif">
            <tr>
              <td style="background:#0066cc;color:#fff;padding:30px;text-align:center">
                <h1 style="margin:0;font-size:24px;line-height:1.3">Dobrodošli na DoktorOnline! 🩺</h1>
              </td>
            </tr>
            <tr>
              <td style="padding:30px;background:#f9f9f9">
                <h2 style="margin:0 0 10px 0;font-size:18px;color:#111">
                  Hvala što ste se prijavili!
                </h2>
                <p style="margin:0 0 16px 0;color:#333">Uspješno ste upisani na listu čekanja. Javićemo se u roku od 48h.</p>
                <h3 style="margin:20px 0 8px 0;font-size:16px;color:#111">Zašto je važno?</h3>
                <ul style="margin:0 0 16px 20px;color:#333">
                  <li>Bolja pozicija u pretrazi</li>
                  <li>Besplatno prvih 6 mjeseci</li>
                  <li>50% popusta zauvijek</li>
                </ul>
                <p style="margin:20px 0">
                  <a href="https://doktoronline.ba/za-ordinacije" 
                     style="background:#0066cc;color:#fff;text-decoration:none;padding:12px 24px;border-radius:6px;display:inline-block">
                     Saznaj više
                  </a>
                </p>
                <p style="margin:20px 0 0 0;color:#333">
                  Pitanja? Odgovorite na ovaj email ili pozovite 
                  <a href="tel:+38766603900" style="color:#0066cc;text-decoration:none">+387 66 603 900</a>.
                </p>
              </td>
            </tr>
            <tr>
              <td style="padding:20px;text-align:center;color:#666;font-size:12px">
                DoktorOnline | Gradiška, BiH • 
                <a href="https://doktoronline.ba/privatnost" style="color:#444">Politika privatnosti</a>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>`
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, error };
  }
}