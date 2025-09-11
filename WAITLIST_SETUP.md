# Waitlist Setup - Google Sheets + Email

## 1. Google Sheets Setup

### Kreirajte Google Sheet:
1. Idite na [Google Sheets](https://sheets.google.com)
2. Kreirajte novi spreadsheet
3. Nazovite ga "DoktorOnline Waitlist"
4. U prvi red dodajte headers:
   - A1: Email
   - B1: Timestamp
   - C1: Follow_Up_Status

### Kopirajte Spreadsheet ID:
- Iz URL-a: `https://docs.google.com/spreadsheets/d/SPREADSHEET_ID/edit`
- Kopirajte dio između `/d/` i `/edit`

## 2. Google Service Account

### Kreirajte Service Account:
1. Idite na [Google Cloud Console](https://console.cloud.google.com)
2. Kreirajte novi projekt ili koristite postojeći
3. Omogućite Google Sheets API:
   - Idite na "APIs & Services" > "Enable APIs"
   - Pretražite "Google Sheets API"
   - Kliknite "Enable"

### Kreirajte credentials:
1. Idite na "APIs & Services" > "Credentials"
2. Kliknite "Create Credentials" > "Service Account"
3. Unesite ime (npr. "doktoronline-sheets")
4. Kliknite "Create and Continue"
5. Skip grant access (kliknite "Continue")
6. Kliknite "Done"

### Preuzmite private key:
1. Kliknite na kreiran service account
2. Idite na tab "Keys"
3. Kliknite "Add Key" > "Create New Key"
4. Odaberite "JSON"
5. Sačuvajte file

### Share Sheet sa Service Account:
1. Otvorite vaš Google Sheet
2. Kliknite "Share" dugme
3. Kopirajte email iz JSON file-a (client_email)
4. Paste email i dajte "Editor" permisije
5. Kliknite "Send"

## 3. Gmail App Password

### Omogućite 2FA:
1. Idite na [Google Account Security](https://myaccount.google.com/security)
2. Omogućite 2-Factor Authentication

### Kreirajte App Password:
1. Idite na [App Passwords](https://myaccount.google.com/apppasswords)
2. Odaberite "Mail"
3. Odaberite "Other" i unesite "DoktorOnline"
4. Kopirajte generirani password (16 karaktera)

## 4. Environment Variables

Kreirajte `.env.local` file u root direktoriju:

```env
# Google Sheets
GOOGLE_SHEETS_ID=your_spreadsheet_id_here
GOOGLE_SHEETS_CLIENT_EMAIL=your-service-account@project.iam.gserviceaccount.com
GOOGLE_SHEETS_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----"

# Email (Gmail)
EMAIL_USER=your.email@gmail.com
EMAIL_PASS=your_16_char_app_password

# Site
NEXT_PUBLIC_SITE_URL=https://doktoronline.ba
```

**VAŽNO**: 
- Private key mora biti u quotes
- Zamijenite `\n` sa stvarnim new lines ili ostavite `\n` u stringu
- Ne commitujte .env.local file!

## 5. Test

1. Restartujte dev server: `npm run dev`
2. Idite na homepage
3. Unesite test email
4. Provjerite:
   - Google Sheet za novi red
   - Email inbox za welcome email

## 6. Production

Za Vercel deployment:
1. Idite na Vercel dashboard
2. Project Settings > Environment Variables
3. Dodajte sve varijable iz .env.local
4. Redeploy

## Troubleshooting

**"The caller does not have permission"**
- Provjerite da li ste share-ovali Sheet sa service account email

**"Invalid login"**
- Provjerite da li koristite App Password, ne običan password
- Provjerite da li je 2FA omogućen

**Email ne stiže**
- Provjerite Spam folder
- Provjerite da li je "Less secure apps" omogućen (ako ne koristite App Password)

**Sheet se ne update-uje**
- Provjerite Spreadsheet ID
- Provjerite da li je Google Sheets API omogućen