export const generateOtpEmailTemplate = (otp) => {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <style>
          * { margin: 0; padding: 0; box-sizing: border-box; }
          body { font-family: 'Segoe UI', sans-serif; background: #0f0f0f; color: #ffffff; }
          .container { max-width: 600px; margin: 40px auto; background: linear-gradient(135deg, #1a1a2e, #16213e); border-radius: 20px; overflow: hidden; box-shadow: 0 20px 60px rgba(0,0,0,0.5); }
          .header { background: linear-gradient(135deg, #667eea, #764ba2); padding: 40px; text-align: center; }
          .header h1 { font-size: 32px; font-weight: 800; letter-spacing: 4px; text-transform: uppercase; }
          .header p { margin-top: 8px; opacity: 0.85; font-size: 14px; letter-spacing: 2px; }
          .body { padding: 40px; text-align: center; }
          .body p { color: #a0aec0; font-size: 15px; line-height: 1.8; }
          .otp-box { margin: 30px auto; background: linear-gradient(135deg, #667eea22, #764ba222); border: 1px solid #667eea55; border-radius: 16px; padding: 30px; width: fit-content; }
          .otp { font-size: 48px; font-weight: 900; letter-spacing: 12px; background: linear-gradient(135deg, #667eea, #764ba2); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
          .otp-label { color: #667eea; font-size: 12px; letter-spacing: 3px; text-transform: uppercase; margin-top: 8px; }
          .expiry { margin-top: 24px; background: #ff6b6b22; border: 1px solid #ff6b6b55; border-radius: 10px; padding: 12px 24px; display: inline-block; color: #ff6b6b; font-size: 13px; }
          .footer { background: #0f0f0f55; padding: 24px; text-align: center; border-top: 1px solid #ffffff11; }
          .footer p { color: #4a5568; font-size: 12px; line-height: 1.8; }
          .footer span { color: #667eea; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Eventora</h1>
            <p>✦ Verify Your Identity ✦</p>
          </div>
          <div class="body">
            <p>You requested a One-Time Password.<br/>Use the code below to complete your verification.</p>
            <div class="otp-box">
              <div class="otp">${otp}</div>
              <div class="otp-label">One Time Password</div>
            </div>
            <div class="expiry">⏳ Expires in 10 minutes</div>
            <p style="margin-top: 24px; font-size: 13px;">If you didn't request this, please ignore this email<br/>or contact support if you're concerned.</p>
          </div>
          <div class="footer">
            <p>This is an automated message from <span>Eventora</span><br/>Please do not reply to this email.</p>
          </div>
        </div>
      </body>
    </html>
  `;
};
