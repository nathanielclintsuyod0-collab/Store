import styles from './GlassCard.module.scss';
import { clsx } from 'clsx';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'flat';
}

export const GlassCard = ({ children, className, variant = 'default' }: GlassCardProps) => {
  return (
    <div className={clsx(
      styles['glass-card'],
      styles[`glass-card--${variant}`],
      className
    )}>
      {children}
    </div>
  );
};
