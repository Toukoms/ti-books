"use client";
import { LiaSpinnerSolid } from "react-icons/lia";
import { Button, buttonVariants } from "../button";
import { VariantProps } from "class-variance-authority";
import { useFormStatus } from "react-dom";

export interface SubmitButtonProps
  extends React.PropsWithChildren,
    VariantProps<typeof buttonVariants> {
  className?: string;
}

const SubmitButton = ({ children, className, ...props }: SubmitButtonProps) => {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className={className} {...props}>
      {pending ? (
        <LiaSpinnerSolid size={24} className="animate-spin" />
      ) : (
        children
      )}
    </Button>
  );
};

export default SubmitButton;
