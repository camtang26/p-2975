declare namespace JSX {
  interface IntrinsicElements {
    'elevenlabs-convai': React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement> & {
        'agent-id': string;
        size?: 'small' | 'medium' | 'large';
      },
      HTMLElement
    >;
  }
}