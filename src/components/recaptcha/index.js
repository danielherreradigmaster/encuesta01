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
      sitekey='6LffRR4cAAAAAFI2Lda1sCM3WGp35fV3-Tz6_Laf'
    />
  )
};

export default Recaptcha;