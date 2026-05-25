import styles from './Hero.module.scss';
import logo from '@/assets/images/seraphyx_logo.png';
import accountsIcon from '@/assets/images/accounts.png';
import pingIcon from '@/assets/images/ping_online.png';
import downIcon from '@/assets/images/down_icon.png';
import { clsx } from 'clsx';
import { useState, useCallback, useEffect } from 'react';

export const Hero = () => {
  const serverIP = "seraphyx.usga.me";
  const [copied, setCopied] = useState(false);
  const [isCooldown, setIsCooldown] = useState(false);
  const [status, setStatus] = useState<{
    online: boolean;
    players: number;
    loading: boolean;
  }>({
    online: false,
    players: 0,
    loading: true,
  });

  const handleCopy = useCallback(() => {
    if (isCooldown) return;

    navigator.clipboard.writeText(serverIP);
    setCopied(true);
    setIsCooldown(true);

    setTimeout(() => {
      setCopied(false);
      setIsCooldown(false);
    }, 2000);
  }, [serverIP, isCooldown]);

  useEffect(() => {
    let active = true;
    const abortController = new AbortController();

    const fetchStatus = async () => {
      try {
        const response = await fetch(`https://api.mcsrvstat.us/3/${serverIP}`, {
          signal: abortController.signal,
        });
        if (!response.ok) {
          throw new Error('Failed to fetch server status');
        }
        const data = await response.json();
        if (active) {
          setStatus({
            online: !!data.online,
            players: data.players?.online ?? 0,
            loading: false,
          });
        }
      } catch {
        if (active) {
          setStatus({
            online: false,
            players: 0,
            loading: false,
          });
        }
      }
    };

    fetchStatus();

    return () => {
      active = false;
      abortController.abort();
    };
  }, [serverIP]);

  return (
    <section className={styles.hero}>
      <div className={styles.hero__background}></div>

      <div className={clsx("container", styles.hero__content)}>
        <header className={styles.hero__header}>
          <h1 className={styles.hero__title}>
            <img src={logo} alt="Seraphyx SMP" className={styles.hero__logo} />
          </h1>
          <p className={styles.hero__subtitle}>
            A sanctuary for peaceful builders and adventurers.
          </p>
        </header>

        <div className={styles.hero__actions}>
          <button 
            className={clsx(styles.hero__ipCard, isCooldown && styles['hero__ipCard--disabled'])} 
            onClick={handleCopy}
            disabled={isCooldown}
            aria-label={copied ? "IP Copied" : "Copy server IP"}
          >
            <div className={styles.hero__ipLabel}>
              {copied ? "Copied to Clipboard!" : "Click to Copy Server Address"}
            </div>
            <div className={styles.hero__ipButton}>
              <span className={styles.hero__ipText}>
                {copied ? "✓" : serverIP}
              </span>
            </div>
          </button>

          {status.loading ? (
            <div className={styles.hero__status}>
              <span>Checking server status...</span>
            </div>
          ) : status.online ? (
            <div className={styles.hero__status}>
              <div className={styles.hero__statusIconGroup}>
                <img src={accountsIcon} alt="" className={styles.hero__playersIcon} />
                <img src={pingIcon} alt="Online" className={styles.hero__pingBadge} />
              </div>
              <span>
                {status.players} {status.players === 1 ? 'player' : 'players'} thriving online
              </span>
            </div>
          ) : null}
        </div>

        <div className={styles.hero__scrollIndicator}>
          <img src={downIcon} alt="" className={styles.hero__scrollIcon} />
          <span className={styles.hero__scrollText}>Scroll to Explore</span>
        </div>
      </div>
    </section>
  );
};
