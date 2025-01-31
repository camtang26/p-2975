import * as React from 'react';
import { ToastAction } from '@/components/ui/toast';

type ConsentButtonProps = Omit<
  React.ComponentProps<typeof ToastAction>,
  'children'
> & {
  consentLabel: string;
};

export const ConsentButton = React.forwardRef<HTMLButtonElement, ConsentButtonProps>(
  ({ consentLabel, altText = "Consent confirmation", ...props }, ref) => (
    <ToastAction
      ref={ref}
      altText={altText}
      {...props}
    >
      {consentLabel}
    </ToastAction>
  )
);

ConsentButton.displayName = 'ConsentButton';