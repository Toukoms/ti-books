"use client";
import { LiaSpinnerSolid } from "react-icons/lia";
import { Button, buttonVariants } from "../button";
import { VariantProps } from "class-variance-authority";
import { useFormStatus } from "react-dom";

export interface FormButtonProps
  extends React.PropsWithChildren,
    VariantProps<typeof buttonVariants> {
  className?: string;
}

const FormButton = ({ children, className, ...props }: FormButtonProps) => {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" className={className} {...props}>
      {pending ? (
        <LiaSpinnerSolid size={24} className="animate-spin" />
      ) : (
        children
      )}
    </Button>
  );
};

export default FormButton;
