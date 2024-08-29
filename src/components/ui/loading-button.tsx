"use client";
import { useState } from "react";
import { Button } from "./button";
import { LiaSpinnerSolid } from "react-icons/lia";

const LoadingButton = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = useState(false);

  return (
    <Button
      type="submit"
      size={"lg"}
      onClick={(event) => {
        event.preventDefault();
        const contactForm: HTMLFormElement = document.getElementById(
          "contact-form"
        ) as HTMLFormElement;
        setLoading(true);
        contactForm.submit();
        contactForm.reset();
        setTimeout(() => {
          setLoading(false);
        }, 3000);
      }}
    >
      {loading ? (
        <LiaSpinnerSolid size={24} className="animate-spin" />
      ) : (
        children
      )}
    </Button>
  );
};

export default LoadingButton;
