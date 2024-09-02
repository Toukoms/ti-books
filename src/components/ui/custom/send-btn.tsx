"use client";
import LoadingButton from "./loading-button";

const SendMessageBtn = () => {
  return (
    <LoadingButton
      size={"lg"}
      onBtnClick={() => {
        const contactForm: HTMLFormElement = document.getElementById(
          "contact-form"
        ) as HTMLFormElement;
        contactForm.submit();
        contactForm.reset();
      }}
    >
      Send
    </LoadingButton>
  );
};

export default SendMessageBtn;
