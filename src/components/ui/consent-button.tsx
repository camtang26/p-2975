import React from 'react';
import { ToastAction, ToastActionProps } from '@/components/ui/toast';

type ConsentButtonProps = Omit<ToastActionProps, 'children'> & {
  consentLabel: string;
};

export const ConsentButton: React.FC<ConsentButtonProps> = ({ 
  consentLabel, 
  ...props 
}) => (
  <ToastAction {...props}>
    {consentLabel}
  </ToastAction>
);