import './styles.scss';

interface Props {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  size?: 'xs' |'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  uppercase?: boolean;
  className?: string;
  onClick?: () => void;
}

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  uppercase = false,
  className,
  onClick,
}: Props) => {
  return (
    <button
      className={`button 
        button--${variant} 
        button--${size} 
        ${fullWidth ? 'button--full' : ''} 
        ${uppercase ? 'button--uppercase' : ''} 
        ${className || ''}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;