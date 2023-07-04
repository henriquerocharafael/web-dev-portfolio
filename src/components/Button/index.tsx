interface Props {
  className?: string;
}

export function Button({ className }: Props) {
  return <button className={className}>Get in touch</button>;
}
