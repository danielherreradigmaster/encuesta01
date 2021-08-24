import ReCAPTCHA from "react-google-recaptcha";

const Recaptcha = ({
  formStep = 0,
  setCaptcha = f=>f,
}) => {
  if(formStep > 1) return null;
  return (
    <ReCAPTCHA
      ref={e => (setCaptcha(_ => e))}
      style={{ width: "300px", margin: "auto", paddingBottom: '34px' }}
      theme="light"
      size= "normal"
      sitekey='6LcGcuUUAAAAAO1HI5FvaNDShKdNFKL7byWFtA_o'
    />
  )
};

export default Recaptcha;