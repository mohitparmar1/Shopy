import { UserModel } from "../../models/userModel.js";
import { OtpModel } from "../../models/OtpModel.js";
import { generateOTP } from "../../utils/generateOTP.js";
import { sendEmail } from "../../utils/sendEmail.js";
import { generateToken } from "../../utils/generateJwtToken.js";
import { decodeJWT } from "../../utils/decodeJwtToken.js";
/*
  Forgot Password
  
*/
const forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(404).json({
        message: "Invalid Email or User Not Found",
        success: false,
      });
    }

    // generating otp
    const otp = generateOTP();
    await OtpModel.create({ email: user.email, otp });
    // Send OTP via email
    const emailOptions = {
      mail: user.email,
      subject: "FORGOT PASSWORD - OTP",

      messageContent: `
      <div style="max-width: 600px; margin: 0 auto; color:black;">
      <h2 style="text-align: center;">Verify Password Reset Request</h2>
      <p>Dear ${user.fullname},</p>
      <p>We noticed that you recently requested to reset your password for your account. Please use the following One-Time Password (OTP) to reset your password:</p>
      <p style="font-weight: bold;">OTP: ${otp}</p>
     
      <p>This OTP Will expires in 2:00 Minutes.<p/>
      <p> <b>Note: </b>If you did not request this password reset, please ignore this email. Your account security is important to us, and we apologize for any inconvenience.</p>
      <p>If you encounter any issues or need further assistance, please don't hesitate to contact our support team at <a href="mailto:[Support Email]">[Support Email]</a> or call us at [Support Phone Number].</p>
      <p>Thank you for choosing Shopy !</p>
      <p>Best regards,<br> <strong>[Company Name]</strong></p>
    </div>
    `,
    };
    await sendEmail(emailOptions);
    res.status(201).json({
      success: true,
      message: `An OTP is send to your email ${email} .`,
      otp: otp,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};
const verifyAndResetPassword = async (req, res) => {
  try {
    const { email, otp } = req.body;
    // console.log(req.body);

    // Retrieve the OTP stored in the database for the user's email
    const otpData = await OtpModel.findOne({ email }).sort({ createdAt: -1 });

    // Check if OTP exists in the database
    if (!otpData) {
      return res
        .status(404)
        .json({ success: false, message: "OTP Expired. Click on Resend OTP" });
    }

    // Compare the OTP provided by the user with the OTP stored in the database
    if (otpData.otp !== otp) {
      return res.status(400).json({
        success: false,
        message: "Invalid OTP.",
      });
    }
    // - Delete the OTP record from the database
    await otpData.deleteOne();
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(404).json({
        message: "User Not Found",
        success: false,
      });
    }

    const password_Reset_Token = generateToken(user._id, "300s");
    const password_Reset_URL = `${process.env.CLIENT_URL}/reset-password/${password_Reset_Token}`;
    // Send OTP via email
    const emailOptions = {
      mail: user.email,
      subject: "RESET PASSWORD ",

      messageContent: `
      <div style="max-width: 600px; margin: 0 auto; color:black;">
      <h2 style="text-align: center;">Reset Your Password</h2>
      <p>Dear ${user.fullname},</p>
      <p>We have received a request to reset the password associated with your account. To proceed with the password reset, please follow the instructions below:</p>

      <ol>
          <li><strong>Click on the following link to reset your password:</strong> <a href=${password_Reset_URL}>Password Reset Link</a></li>
          <li>Please note that this link is valid for 5:00 Minutes. After this period, you will need to request another password reset.</li>
          <li><strong>If you did not request this password reset,</strong> please change your Password Immediately by Logging into your account.</li>
      </ol>
      <p><strong>Note:</strong> If the above link does not work then copy and paste this url into browser.<br/> ${password_Reset_URL}</p>
      <p><strong>Ensure the security of your account:</strong></p>
      <ul>
          <li>Please Don't share this email to anyone it contains your accounts Credentials.</li>
          <li>Choose a strong password that includes a combination of letters, numbers, and special characters.</li>
          <li>Avoid using easily guessable passwords and refrain from sharing your password with anyone.</li>
          <li>Regularly update your password to enhance security.</li>
      </ul>
  
      <p>If you encounter any issues or require further assistance, please feel free to reach out to our support team at <a href="mailto:[Support Email]">[Support Email]</a>.</p>
  
      <p>Thank you for your attention to this matter.</p>
      <p>Best regards,<br> <strong>Shopy!!</strong></p>
    </div>
    `,
    };
    await sendEmail(emailOptions);

    return res.status(200).json({
      success: true,
      message: "Password Reset Link has been Sent to your email.",
      password_Reset_URL,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};
const setNewPassword = async (req, res) => {
  try {
    const { token, newPassword } = req.body;
    console.log(token);

    //decodes token id
    const decoded = await decodeJWT(token);
    console.log(decoded);
    if (!decoded) {
      return res.status(404).json({
        success: true,
        message: "Please make another new password Reset request",
      });
    }
    let user = await UserModel.findOne({ _id: decoded.id }).select("password");
    // console.log(user);
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Invalid Token or User not found",
      });
    }

    user.password = newPassword;
    user = await user.save();

    res.status(200).send({
      message: "Password changed successfully",
      success: true,
      // user,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

export { forgotPassword, verifyAndResetPassword, setNewPassword };
