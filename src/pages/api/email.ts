// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
const nodemailer = require("nodemailer");

type Data = {
  message: string
}

const html = `
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office">

<head>
    <meta charset="UTF-8">
    <meta content="width=device-width, initial-scale=1" name="viewport">
    <meta name="x-apple-disable-message-reformatting">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta content="telephone=no" name="format-detection">
    <title>Email dEquity</title>
    <!--[if (mso 16)]>
    <style type="text/css">
    a {text-decoration: none;}
    </style>
    <![endif]-->
    <!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]-->
    <!--[if gte mso 9]>
<xml>
    <o:OfficeDocumentSettings>
    <o:AllowPNG></o:AllowPNG>
    <o:PixelsPerInch>96</o:PixelsPerInch>
    </o:OfficeDocumentSettings>
</xml>
<![endif]-->

<!-- Web Font / @font-face : BEGIN -->
    <!-- NOTE: If web fonts are not required, lines 9 - 26 can be safely removed. -->

    <!-- Desktop Outlook chokes on web font references and defaults to Times New Roman, so we force a safe fallback font. -->
    <!--[if mso]>
        <style>
            * {
                font-family: Arial, Helvetica, sans-serif;          }
        </style>
    <![endif]-->

    <!-- All other clients get the webfont reference; some will render the font and others will silently fail to the fallbacks. More on that here: http://stylecampaign.com/blog/2015/02/webfont-support-in-email/ -->
    <!--[if !mso]><!-->
        <!-- insert web font reference, eg: <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Red+Hat+Display:wght@400;700&display=swap" rel="stylesheet"> -->
    <!--<![endif]-->

  <!-- Web Font / @font-face : END -->

  <!-- <style>
    @import url(\'https://fonts.googleapis.com/css2?family=Red+Hat+Display:wght@400;700&display=swap\');
    </style> -->
</head>

<style>
    html {
        background: #162C3E;
        margin: 0;
        padding: 0;
    }
</style>

<body>

    <!-- new -->

    <!-- first block -->

    <table  border="0" align="center" valign="top" cellspacing="0" cellpadding="0" bgcolor="#162C3E" style="width: 100%; border:0;background-color:#162C3E; margin: 0;padding: 0;">
        <tr>
            <td align="center" valign="top" bgcolor="#162C3E" style="background-color:#162C3E;" >
                <table border="0" cellspacing="0" cellpadding="0" style="width:652px; height: 306px; margin-top: 56px;">
                    <tr>
                        <td align="center" valign="top"
                            style=" margin-top: 56px;  overflow: hidden;">
                            
                            <img src="cid:first_block" />

                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>

    <!-- first block -->


    <!-- second block -->
    <table  border="0" align="center" valign="top" cellspacing="0" cellpadding="0" bgcolor="#162C3E" style="width: 100%; border:0;background-color:#162C3E; margin: 0;padding: 0;">
        <tr>
            <td align="center" valign="top" bgcolor="#162C3E" style="background-color:#162C3E;" >
                <table border="0" cellspacing="0" cellpadding="0" style="width:652px; height: 306px; margin-top: 56px; margin-bottom: 56px;">
                    <tr>
                        <td align="center" valign="top"
                            style="background-color:rgba(151, 184, 249, 0.05); border-radius: 25px; margin-top: 56px; padding-top: 56px; padding-bottom: 45px; padding-left: 42px; padding-right: 42px;">
                            <table width="100%" height="100%" border="0" cellspacing="0" cellpadding="0" style="position: relative;">

                                <tr>
                                    <td align="center" valign="middle" style="padding-bottom: 16px;">
                                        <img src="cid:second_block_title"/>
                                    </td>
                                </tr>

                                <tr>
                                    <td align="center" valign="middle" style="padding-bottom: 73px;">
                                        <img src="cid:second_block_text"/>
                                    </td>
                                </tr>

                                <tr>
                                    <td align="center" valign="middle" style="padding-bottom: 45px;">
                                        <img src="cid:second_block_thanks"/>
                                    </td>
                                </tr>


                                <tr>
                                <td align="center" valign="middle"
                                    style="padding-top:33px; border-top: 1px solid rgba(255,255,255,0.15)">

                                    <tr>
                                        <td align="left" valign="middle" style="padding-bottom: 23px;">
                                            <img src="cid:second_block_touch" />
                                        </td>
                                    </tr>

                                    <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                        <td width="50%" align="left" valign="middle" >
                                            <table width="80px" border="0" cellspacing="0" cellpadding="0">
                                                <td style="padding-right: 16px;">
                                                    <a href="https://t.me/dEquity_io">
                                                        <img src="cid:telegram" width="32" height="32" style="display:block;">
                                                    </a>
                                                </td>
                                                <td>
                                                    <a href="https://twitter.com/dEquity_io">
                                                        <img src="cid:twitter" width="32" height="32" style="display:block;">
                                                    </a>
                                                </td>
                                            </table>
                                            
                                        </td>
                                        <td width="50%" align="right" valign="middle">
                                            <table width="100%" border="0" cellspacing="0" cellpadding="0">

                                                <tr>
                                                    <td align="right" valign="middle">
                                                        <img src="cid:second_block_info"/>
                                                    </td>
                                                </tr>

                                                
                                            </table>
                                            
                                            
                                        </td>
                                    </table>

                                </td>
                                </tr>


                            </table>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
    <!-- second block -->

    <!-- footer -->

    <table  border="0" align="center" valign="top" cellspacing="0" cellpadding="0" style="width: 100%; border:0;background-color:#1A3245;">
        <tr>
            <td align="center" valign="top" style="background-color:#1A3245;">
                <table style="width:652px;" border="0" cellspacing="0" cellpadding="0">
                    <tr>
                        <td align="center" valign="top" style="background-color:#1A3245;">
                            <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                <tr>
                                    <td align="center" valign="middle" style="padding-top:60px;padding-bottom:90px; background: #1A3245;">
                                        <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                            
                                            <tr>
                                                <td align="left" valign="middle" style="padding-bottom: 36px;">
                                                    <img src="cid:third_block_copyright" />
                                                </td>
                                            </tr>
            
                                            
                                            <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                            <tr>
                                                <td>
                                                    <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                        <td width="67%" align="left" valign="middle" style="padding-right:8%;font-family: Arial, Helvetica, sans-serif; font-size:13px; color: #D1D5D8;"></td>
                                                        <td width="33%" align="left" valign="middle">
                                                            <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                                <tr>
                                                                    <td align="right" valign="middle" style="padding-bottom:24px;"><img src="cid:logo_footer" width="100%" height="auto" style="display:block;"></td>
                                                                </tr>
                                                            </table>
                                                        </td>
                                                    </table>

                                                </td>
                                                
                                            </tr>
                                            <tr>
                                                <td>
                                                    <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                        <td width="67%" align="left" valign="middle" style="padding-right:8%;font-family: Arial, Helvetica, sans-serif; font-size:13px; color: #D1D5D8;">
                                                            <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                                
                                                                <tr>
                                                                    <td>
                                                                        <img src="cid:third_block_unsubscribe" />
                                                                    </td>
                                                                </tr>

                                                            </table>
                                                            
                                                        </td>
                                                        <td width="33%" align="left" valign="middle" height="100%">
                                                            <table width="100%" border="0" cellspacing="0" cellpadding="0" height="100%">
                                                                <td width="60%" align="left" valign="middle">
                                                                    <table width="100%" border="0" cellspacing="0" cellpadding="0">

                                                                        <tr>
                                                                            <td align="left" valign="middle">
                                                                                <img src="cid:third_block_contact"/>
                                                                            </td>
                                                                        </tr>

                                                                    </table>
                                                                </td>
                                                                <td width="30%" height="100%">
                                                                    <table width="100%" height="100%" border="0" cellspacing="0" cellpadding="0">
                                                                        <td  align="right" valign="top">
                                                                            <a href="https://t.me/dEquity_io">
                                                                                <img src="cid:telegram_footer" width="22" height="22" style="display:block;">
                                                                            </a>
                                                                        </td>
                                                                        <td  align="right" valign="top">
                                                                            <a href="https://twitter.com/dEquity_io">
                                                                                <img src="cid:twitter_footer" width="22" height="22" style="display:block;">
                                                                            </a>
                                                                        </td>
                                                                        
                                                                    </table>
                                                                </td>
                                                            </table>
                                                            
                                                            
                                                        </td>
                                                    </table>
                                                </td>
                                            </tr>
                                            </table>


            
                                        </table>
                                    </td>
                                    </tr>
                            </table>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>

    <!-- footer -->
    <!-- new -->

   
    
</body>

</html>
`;

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

  if(req.method === "POST") {
    const data = req.body;

    console.log(data);
    

    if( !data.email ) {
      return res.status(400).json({ message: "Bad Request" });
    } else {

      try {
        // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport(
            {
            host: "smtp.office365.com",
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
              user: "noreply@dequity.io", 
              pass: "j1TqO6w_x80", 
            },
            },
            {
                from: "<noreply@dequity.io>"
            }
          );
        
          // send mail with defined transport object
          transporter.sendMail({
            from: "noreply@dequity.io", // sender address
            to: data.email, 
            subject: "Welcome to the dEquity family!", // Subject line
            text: "Welcome to the dEquity family!", // plain text body
            html: html, // html body
            attachments: [
                {
                filename: 'bg_first_block.png',
                path: './images/bg_first_block.png',
                cid: 'bg_first_block' //same cid value as in the html img src
                },
                {
                filename: 'logo.png',
                path: './images/logo.png',
                cid: 'logo' //same cid value as in the html img src
                },
                {
                filename: 'logo_footer.png',
                path: './images/logo_footer.png',
                cid: 'logo_footer' //same cid value as in the html img src
                },
                {
                filename: 'telegram.png',
                path: './images/telegram.png',
                cid: 'telegram' //same cid value as in the html img src
                },
                {
                filename: 'telegram_footer.png',
                path: './images/telegram_footer.png',
                cid: 'telegram_footer' //same cid value as in the html img src
                },
                {
                filename: 'twitter.png',
                path: './images/twitter.png',
                cid: 'twitter' //same cid value as in the html img src
                },
                {
                filename: 'twitter_footer.png',
                path: './images/twitter_footer.png',
                cid: 'twitter_footer' //same cid value as in the html img src
                },
                {
                filename: 'first_block.png',
                path: './images/first_block.png',
                cid: 'first_block' //same cid value as in the html img src
                },
                {
                filename: 'second_block_info.png',
                path: './images/second_block_info.png',
                cid: 'second_block_info' //same cid value as in the html img src
                },
                {
                filename: 'second_block_text.png',
                path: './images/second_block_text.png',
                cid: 'second_block_text' //same cid value as in the html img src
                },
                {
                filename: 'second_block_thanks.png',
                path: './images/second_block_thanks.png',
                cid: 'second_block_thanks' //same cid value as in the html img src
                },
                {
                filename: 'second_block_title.png',
                path: './images/second_block_title.png',
                cid: 'second_block_title' //same cid value as in the html img src
                },
                {
                filename: 'second_block_touch.png',
                path: './images/second_block_touch.png',
                cid: 'second_block_touch' //same cid value as in the html img src
                },
                {
                filename: 'third_block_contact.png',
                path: './images/third_block_contact.png',
                cid: 'third_block_contact' //same cid value as in the html img src
                },
                {
                filename: 'third_block_copyright.png',
                path: './images/third_block_copyright.png',
                cid: 'third_block_copyright' //same cid value as in the html img src
                },
                {
                filename: 'third_block_unsubscribe.png',
                path: './images/third_block_unsubscribe.png',
                cid: 'third_block_unsubscribe' //same cid value as in the html img src
                },
                
                
                      ]
              });
        
              return res.status(200).json({ message: "Message sent!" });
        } catch {
          return res.status(400).json({ message: "Bad Request" });
        }
     
    }

  } else {
    return res.status(400).json({ message: "Bad Request" });
  }

  return res.status(400).json({ message: "Bad Request" });
}
