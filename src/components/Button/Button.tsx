import { clsx } from 'clsx';
import styles from './Button.module.scss';

interface ButtonProps {
  variant?: 'primary' | 'outline';
  children: React.ReactNode;
  onClick?: () => void;
}

export const Button = ({ variant = 'primary', children, onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={clsx(
        styles.button,
        styles[`button--${variant}`]
      )}
    >
      <span className={styles.button__text}>{children}</span>
    </button>
  );
};
