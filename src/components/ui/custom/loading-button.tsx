"use client";
import React, { useState } from "react";
import { LiaSpinnerSolid } from "react-icons/lia";
import { Button, buttonVariants } from "../button";
import { VariantProps } from "class-variance-authority";

export interface LoadingButtonProps extends React.PropsWithChildren, VariantProps<typeof buttonVariants> {
  className?: string;
  onBtnClick: (event?: React.FormEvent<HTMLButtonElement>) => void;
}

const LoadingButton = ({children, className, onBtnClick: onClick, ...props }: LoadingButtonProps) => {
  const [loading, setLoading] = useState(false);

  return (
    <Button
      onClick={(event) => {
        event.preventDefault();
        setLoading(true);
        onClick();
        setTimeout(() => {
          setLoading(false);
        }, 3000);
      }}
      disabled={loading}
      className={className}
      {...props}
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
