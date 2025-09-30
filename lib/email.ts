import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export async function sendWelcomeEmail(email: string, formUrl: string = process.env.DOCTOR_REGISTRATION_FORM_URL || "https://docs.google.com/forms/d/e/1FAIpQLScs7Z55FqCM_4Nablz5y5vgQ0PhYGu2cM7kJZbmfihF3N9W0g/viewform?usp=dialog") {
  const mailOptions = {
    from: `DoktorOnline <${process.env.EMAIL_USER}>`,
    replyTo: process.env.REPLY_TO_EMAIL || process.env.EMAIL_USER,
    to: email,
    subject: 'Registracija za DoktorOnline platformu 👨‍⚕️',
    text: `Hvala na interesovanju za DoktorOnline! 
    Sledeći korak: popunite formu sa osnovnim informacijama o ordinaciji.
    Prednosti: 6 mjeseci besplatno, 50% popust zauvijek, prioritetna pozicija.
    Pitanja? ${process.env.CONTACT_PHONE || '+387 66 603 900'}`,
    html: `
    <div style="display:none;max-height:0;overflow:hidden;opacity:0">
      Registrujte ordinaciju na DoktorOnline - 6 mjeseci besplatno + 50% popust zauvijek
    </div>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f2f4f7;padding:20px 0">
      <tr>
        <td align="center">
          <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:10px;overflow:hidden;font-family:Arial,Helvetica,sans-serif">
            <tr>
              <td style="background:#0066cc;color:#fff;padding:30px;text-align:center">
                <h1 style="margin:0;font-size:24px;line-height:1.3">Dobrodošli na DoktorOnline! 👨‍⚕️</h1>
              </td>
            </tr>
            <tr>
              <td style="padding:30px;background:#f9f9f9">
                <h2 style="margin:0 0 10px 0;font-size:18px;color:#111">
                  Hvala na interesovanju!
                </h2>
                <p style="margin:0 0 16px 0;color:#333">
                  Radujemo se što ćete biti dio prve digitalne medicinske platforme u BiH. 
                  Vaša ordinacija će biti vidljiva pacijentima koji aktivno traže doktore.
                </p>
                
                <h3 style="margin:20px 0 8px 0;font-size:16px;color:#111">Sledeći korak:</h3>
                <p style="margin:0 0 20px 0;color:#333">
                  Popunite kratku formu sa osnovnim informacijama o vašoj ordinaciji (potrebno je samo 5 minuta):
                </p>
                
                <p style="margin:20px 0">
                  <a href="${formUrl}" 
                     style="background:#0066cc;color:#fff;text-decoration:none;padding:16px 32px;border-radius:6px;display:inline-block;font-weight:bold;font-size:18px;text-transform:uppercase">
                     📋 Registruj ordinaciju
                  </a>
                </p>

                <div style="background:#e8f4fd;padding:20px;border-radius:8px;margin:25px 0">
                  <h4 style="margin:0 0 12px 0;color:#0066cc;font-size:16px">🎁 Specijalna ponuda za rane korisnike:</h4>
                  <ul style="margin:0;color:#333;padding-left:20px">
                    <li><strong>6 mjeseci potpuno besplatno</strong></li>
                    <li><strong>50% popust zauvijek</strong> nakon probnog perioda</li>
                    <li><strong>Prioritetna pozicija</strong> u pretrazi</li>
                    <li><strong>Ekskluzivni pristup</strong> kao founding member</li>
                  </ul>
                </div>

                <h3 style="margin:25px 0 8px 0;font-size:16px;color:#111">Šta trebamo od vas:</h3>
                <ul style="margin:0 0 20px 20px;color:#333">
                  <li>Osnovni podaci o ordinaciji</li>
                  <li>Vaša specijalizacija</li>
                  <li>Lokacija i radno vreme</li>
                  <li>Kontakt informacije za pacijente</li>
                </ul>
                
                <p style="margin:20px 0 0 0;color:#333">
                  Pitanja? Odgovorite na ovaj email ili pozovite
                  <a href="tel:${process.env.CONTACT_PHONE || '+38766603900'}" style="color:#0066cc;text-decoration:none;font-weight:bold">${process.env.CONTACT_PHONE || '+387 66 603 900'}</a>.
                </p>
              </td>
            </tr>
            <tr>
              <td style="padding:20px;text-align:center;color:#666;font-size:12px">
                DoktorOnline | BiH •
                <a href="${process.env.NEXT_PUBLIC_PRODUCTION_URL || 'https://doktoronline.ba'}/privatnost" style="color:#444">Politika privatnosti</a>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>`
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Doctor registration email sent:', info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error('Error sending doctor registration email:', error);
    return { success: false, error };
  }
}