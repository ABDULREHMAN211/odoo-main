import ReCAPTCHA from 'react-google-recaptcha';

function onChange(value){
  console.log("Captcha Value", value);
}

const Capch = () =>{
  return(
    <ReCAPTCHA
    sitekey='6LdMCuQfAAAAAFZCWbVTs0j_3PLYm6JnhubVukbN'
    onChange={onChange}
    />
  )
}
export default Capch;