import React from 'react';
import { useToast } from "@/hooks/use-toast";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { RefreshCw } from "lucide-react";

interface Props {
  children: React.ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class VideoErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { 
      hasError: false,
      error: null
    };
  }

  static getDerivedStateFromError(error: Error): State {
    return {
      hasError: true,
      error
    };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Video Error:', error);
    console.error('Error Info:', errorInfo);
    
    // We can't use hooks directly in class components, so we'll show the error UI instead
    // The toast will be handled by the ErrorFallback component
  }

  handleRetry = () => {
    this.setState({ 
      hasError: false,
      error: null 
    });
  };

  render() {
    if (this.state.hasError) {
      return <ErrorFallback error={this.state.error} onRetry={this.handleRetry} />;
    }

    return this.props.children;
  }
}

interface ErrorFallbackProps {
  error: Error | null;
  onRetry: () => void;
}

const ErrorFallback = ({ error, onRetry }: ErrorFallbackProps) => {
  const { toast } = useToast();

  React.useEffect(() => {
    toast({
      variant: "destructive",
      title: "Video Error",
      description: error?.message || "An error occurred while loading the video",
    });
  }, [error, toast]);

  return (
    <div className="w-full h-full flex items-center justify-center bg-black/90">
      <Alert variant="destructive" className="max-w-md mx-auto">
        <AlertTitle className="text-lg font-semibold mb-2">
          Video Error
        </AlertTitle>
        <AlertDescription className="mb-4">
          {error?.message || "An error occurred while loading the video"}
        </AlertDescription>
        <Button 
          onClick={onRetry}
          variant="outline"
          className="w-full"
        >
          <RefreshCw className="mr-2 h-4 w-4" />
          Retry
        </Button>
      </Alert>
    </div>
  );
};