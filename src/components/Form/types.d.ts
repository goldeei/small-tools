interface Radio {
  id: string;
  name: string;
  options: (string | number)[];
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}
