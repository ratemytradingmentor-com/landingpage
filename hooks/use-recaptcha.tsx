import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

export function useRecaptcha() {
  const { executeRecaptcha } = useGoogleReCaptcha();

  const getCaptchaToken = async (action: string) => {
    if (!executeRecaptcha) {
      console.warn("reCAPTCHA has not been loaded yet");
      return null;
    }
    const token = await executeRecaptcha(action);
    return token;
  };

  return getCaptchaToken;
}
