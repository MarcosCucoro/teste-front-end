import './styles.scss';

interface Props {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  fullWidth?: boolean;
  onClick?: () => void;
}

const Button = ({
  children,
  variant = 'primary',
  fullWidth = false,
  onClick,
}: Props) => {
  return (
    <button
      className={`button button--${variant} ${fullWidth ? 'button--full' : ''}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;