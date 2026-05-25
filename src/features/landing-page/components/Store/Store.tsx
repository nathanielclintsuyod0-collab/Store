import { clsx } from 'clsx';
import { useState, useEffect } from 'react';
import hunterRankLogo from '@/assets/images/hunter_rank_logo.png';
import titanRankLogo from '@/assets/images/titan_rank_logo.png';
import warriorRankLogo from '@/assets/images/warrior_rank_logo.png';
import knightRankLogo from '@/assets/images/knight_rank_logo.png';
import ultimateRankLogo from '@/assets/images/ultimate_rank_logo.png';
import overlordRankLogo from '@/assets/images/overlord_rank_logo.png';
import skyGodRankLogo from '@/assets/images/sky_god_rank_logo.png';
import styles from './Store.module.scss';

interface StoreItemTab {
  id: string;
  label: string;
  items: string[];
}

interface StoreItem {
  id: string;
  name: string;
  price: string;
  color: string;
  glow: string;
  icon: React.ReactNode;
  description: string;
  tabs: StoreItemTab[];
}

const STORE_DATA = {
  ranks: [
    {
      id: 'hunter',
      name: 'Hunter',
      price: '₱ 25.00',
      color: '#aaaaaa',
      glow: 'rgba(170,170,170,0.5)',
      icon: <img src={hunterRankLogo} alt="Hunter" />,
      description: 'Begin your hunt with basic permissions and kits.',
      tabs: [
        {
          id: 'kits',
          label: 'Kit Information',
          items: ['⚔️ Hunter Rank Kit']
        },
        {
          id: 'commands',
          label: 'Bonuses',
          items: ['2000 In-game Money', '1 Cosmetic Key']
        }
      ]
    },
    {
      id: 'warrior',
      name: 'Warrior',
      price: '₱ 65.00',
      color: '#ff5555',
      glow: 'rgba(255,85,85,0.5)',
      icon: <img src={warriorRankLogo} alt="Warrior" />,
      description: 'Gear up for battle with enhanced survival tools.',
      tabs: [
        {
          id: 'kits',
          label: 'Kits Information',
          items: ['⚔️ Warrior Rank Kit']
        },
        {
          id: 'commands',
          label: 'Bonuses',
          items: ['10000 In-game Money', '2 Cosmetic Keys']
        }
      ]
    },
    {
      id: 'knight',
      name: 'Knight',
      price: '₱ 100.00',
      color: '#55ffff',
      glow: 'rgba(85,255,255,0.5)',
      icon: <img src={knightRankLogo} alt="Knight" />,
      description: 'Command respect with knightly status and perks.',
      tabs: [
        {
          id: 'kits',
          label: 'Kit Information',
          items: ['⚔️ Knight Rank Kit']
        },
        {
          id: 'commands',
          label: 'Bonuses',
          items: ['20000 In-game Money', '3 Cosmetic Keys']
        }
      ]
    },
    {
      id: 'ultimate',
      name: 'Ultimate',
      price: '₱ 150.00',
      color: '#ffaa00',
      glow: 'rgba(255,170,0,0.5)',
      icon: <img src={ultimateRankLogo} alt="Ultimate" />,
      description: 'Unlock premium cosmetics and powerful commands.',
      tabs: [
        {
          id: 'kits',
          label: 'Kits Information',
          items: ['⚔️ Ultimate Rank Kits']
        },
        {
          id: 'commands',
          label: 'Perks',
          items: ['/feed (Command to instantly refill hunger)', '/craft (Command to open the crafting table)', '/nickname (Command to change your nickname)']
        },
        {
          id: 'cosmetics',
          label: 'Bonuses',
          items: ['100,000 In-game Money', '5 Cosmetic Keys']
        }
      ]
    },
    {
      id: 'titan',
      name: 'Titan',
      price: '₱ 300.00',
      color: '#55ff55',
      glow: 'rgba(85,255,85,0.5)',
      icon: <img src={titanRankLogo} alt="Titan" />,
      description: 'Stand tall with exclusive Titan kits and keys.',
      tabs: [
        {
          id: 'kits',
          label: 'Kit Information',
          items: ['⚔️ Titan Rank Kits']
        },
        {
          id: 'commands',
          label: 'Perks',
          items: ['/fly (Command to fly)', '/heal (Command to heal)', '/feed (Command to instantly refill hunger)']
        },
        {
          id: 'cosmetics',
          label: 'Bonuses',
          items: ['1,000,000 In-game Money', '8 Cosmetic Keys']
        }
      ]
    },
    {
      id: 'overlord',
      name: 'Overlord',
      price: '₱ 500.00',
      color: '#aa00aa',
      glow: 'rgba(170,0,170,0.5)',
      icon: <img src={overlordRankLogo} alt="Overlord" />,
      description: 'Rule the land with superior privileges and commands.',
      tabs: [
        {
          id: 'kits',
          label: 'Kit Information',
          items: ['⚔️ Overlord Rank Kits']
        },
        {
          id: 'commands',
          label: 'Perks',
          items: ['/command1', '/command2', '/command3']
        },
        {
          id: 'cosmetics',
          label: 'Bonuses',
          items: ['2,000,000 In-game Money', '10 Cosmetic Keys']
        }
      ]
    },
    {
      id: 'sky_god',
      name: 'Sky God',
      price: '₱ 1300.00',
      color: '#ff55ff',
      glow: 'rgba(255,85,255,0.5)',
      icon: <img src={skyGodRankLogo} alt="Sky God" />,
      description: 'Ascend to the heavens with the ultimate server rank.',
      tabs: [
        {
          id: 'kits',
          label: 'Kit Information',
          items: ['⚔️ Sky God Rank Kits']
        },
        {
          id: 'commands',
          label: 'Perks',
          items: ['/command1', '/command2', '/command3']
        },
        {
          id: 'cosmetics',
          label: 'Bonuses',
          items: ['10,000,000 In-game Money', '4 Full Cosmetic Sets']
        }
      ]
    }
  ] satisfies StoreItem[],
  keys: [
    {
      id: 'vote',
      name: 'Vote Key',
      price: 'Free',
      color: '#aaaaaa',
      glow: 'rgba(170,170,170,0.5)',
      icon: '🗝️',
      description: 'Reward for supporting the server daily.',
      tabs: [
        {
          id: 'rewards',
          label: 'Rewards',
          items: [
            '🗡️ Iron Sword (Unbreaking I)',
            '🏹 Recurve Bow & 16 Arrows',
            '🛡️ Chainmail Chestplate',
            '🧪 Potion of Healing',
            '🍖 Cooked Steak x8',
            '🪙 $50 In-Game Cash',
            '🌟 5 EXP Levels',
            '🔑 1 Vote Key Voucher'
          ]
        }
      ]
    },
    {
      id: 'rare',
      name: 'Rare Key',
      price: '$2.00',
      color: '#5555ff',
      glow: 'rgba(85,85,255,0.5)',
      icon: '🔑',
      description: 'Unlock rare items and medium tier gear.',
      tabs: [
        {
          id: 'rewards',
          label: 'Rewards',
          items: [
            '⚔️ Diamond Sword (Sharpness I)',
            '🛡️ Full Iron Armor Set',
            '🪓 Iron Axe (Efficiency I)',
            '🧪 Strength I Potion',
            '🥩 Cooked Beef x32',
            '🪙 $250 In-Game Cash',
            '🌟 15 EXP Levels',
            '🏷️ [Rare] Chat Tag Voucher'
          ]
        }
      ]
    },
    {
      id: 'epic',
      name: 'Epic Key',
      price: '$5.00',
      color: '#aa00aa',
      glow: 'rgba(170,0,170,0.5)',
      icon: '🗝️',
      description: 'High chance for epic tools and weapons.',
      tabs: [
        {
          id: 'rewards',
          label: 'Rewards',
          items: [
            '⚔️ Diamond Sword (Sharpness III)',
            '🛡️ Diamond Helmet & Boots',
            '⛏️ Diamond Pickaxe (Fortune I)',
            '⚡ Speed II Potion (3m)',
            '🍎 Golden Apples x4',
            '🪙 $1,000 In-Game Cash',
            '🌟 30 EXP Levels',
            '🎨 Epic Prefix Chat Customizer'
          ]
        }
      ]
    },
    {
      id: 'legendary',
      name: 'Legendary Key',
      price: '$10.00',
      color: '#ffaa00',
      glow: 'rgba(255,170,0,0.5)',
      icon: '🔑',
      description: 'Guaranteed top-tier enchantments and loot.',
      tabs: [
        {
          id: 'rewards',
          label: 'Rewards',
          items: [
            '⚔️ Netherite Sword (Sharpness IV)',
            '🛡️ Diamond Armor (Protection III)',
            '⛏️ Diamond Toolset (Unbreaking II)',
            '🍎 Enchanted Golden Apple x1',
            '🧪 Instant Health II Potions x3',
            '🪙 $5,000 In-Game Cash',
            '🌟 60 EXP Levels',
            '✨ Legendary Prefix & Chat Color'
          ]
        }
      ]
    },
    {
      id: 'mythic',
      name: 'Mythic Key',
      price: '$20.00',
      color: '#ff5555',
      glow: 'rgba(255,85,85,0.5)',
      icon: '🗝️',
      description: 'The absolute best rewards available on the server.',
      tabs: [
        {
          id: 'rewards',
          label: 'Rewards',
          items: [
            '⚔️ Mythic Sword (Sharpness V, Fire Aspect II)',
            '🛡️ God Armor Set (Enchanted Netherite Protection IV)',
            '🔱 God Trident (Riptide III)',
            '🍎 Enchanted Golden Apples x4',
            '🧪 Custom God Potions Pack',
            '🪙 $20,000 In-Game Cash',
            '🌟 120 EXP Levels',
            '👑 Mythic Title & Chat Color'
          ]
        }
      ]
    }
  ] satisfies StoreItem[]
};

interface StoreModalProps {
  item: StoreItem;
  onClose: () => void;
}

const StoreModal = ({ item, onClose }: StoreModalProps) => {
  const [activeTabId, setActiveTabId] = useState<string>(item.tabs[0]?.id || '');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const activeTab = item.tabs.find(t => t.id === activeTabId) || item.tabs[0];

  return (
    <div className={styles['store-modal']} onClick={onClose} role="dialog" aria-modal="true">
      <div
        className={styles['store-modal__container']}
        onClick={(e) => e.stopPropagation()}
        style={{
          '--color': item.color,
          '--glow': item.glow
        } as React.CSSProperties}
      >
        <button className={styles['store-modal__close']} onClick={onClose} aria-label="Close modal">
          x
        </button>

        <div className={styles['store-modal__layout']}>
          {/* Left Panel: Preview */}
          <div className={styles['store-modal__preview']}>
            <div className={styles['store-modal__badge']}>
              {item.icon}
            </div>
            <h2 className={styles['store-modal__title']} style={{ color: item.color }}>
              {item.name}
            </h2>
            <div className={styles['store-modal__price']}>{item.price}</div>
            <p className={styles['store-modal__description']}>{item.description}</p>
          </div>

          {/* Right Panel: Tabbed Information */}
          <div className={styles['store-modal__details']}>
            {item.tabs.length > 1 && (
              <div className={styles['store-modal__tabs']}>
                {item.tabs.map(tab => (
                  <button
                    key={tab.id}
                    className={clsx(styles['store-modal__tab'], activeTabId === tab.id && styles['store-modal__tab--active'])}
                    onClick={() => setActiveTabId(tab.id)}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            )}

            <div className={styles['store-modal__content']}>
              {activeTab && (
                <ul className={styles['store-modal__list']}>
                  {activeTab.items.map((perk, index) => (
                    <li key={index} className={styles['store-modal__item']}>
                      <span className={styles['store-modal__item-bullet']}>[+]</span>
                      <span className={styles['store-modal__item-text']}>{perk}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className={styles['store-modal__actions']}>
              <button className={styles['store-modal__buy-btn']}>
                Unlock Rank
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Store = () => {
  const [activeCategory, setActiveCategory] = useState<'ranks' | 'keys'>('ranks');
  const [activeIndex, setActiveIndex] = useState(3);
  const [selectedItem, setSelectedItem] = useState<StoreItem | null>(null);

  useEffect(() => {
    if (selectedItem) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedItem]);

  const items = STORE_DATA[activeCategory];

  return (
    <section className={styles.store} id="store">
      <div className={clsx("container", styles.store__container)}>
        <header className={styles.store__header}>
          <h2 className={styles.store__title}>Server Store</h2>
          <p className={styles.store__subtitle}>Support the server and unlock exclusive perks, ranks, and keys.</p>

          <div className={styles.store__tabs}>
            <button
              className={clsx(styles.store__tab, activeCategory === 'ranks' && styles['store__tab--active'])}
              onClick={() => {
                setActiveCategory('ranks');
                setActiveIndex(Math.floor(STORE_DATA.ranks.length / 2));
              }}
            >
              Ranks
            </button>
            <button
              className={clsx(styles.store__tab, activeCategory === 'keys' && styles['store__tab--active'])}
              onClick={() => {
                setActiveCategory('keys');
                setActiveIndex(Math.floor(STORE_DATA.keys.length / 2));
              }}
            >
              Crate Keys
            </button>
          </div>
        </header>

        <div className={styles.store__slider}>
          <div className={styles.store__track}>
            {items.map((item, idx) => {
              const offset = idx - activeIndex;
              const isActive = offset === 0;

              return (
                <div
                  key={item.id}
                  className={clsx(styles.store__card, isActive && styles['store__card--active'])}
                  onClick={() => setActiveIndex(idx)}
                  style={{
                    '--offset': offset,
                    '--abs-offset': Math.abs(offset),
                    '--color': item.color,
                    '--glow': item.glow
                  } as React.CSSProperties}
                >
                  <div className={styles['store__card-inner']}>
                    <header className={styles['store__card-header']}>
                      <h3 className={styles['store__card-title']}>{item.name}</h3>
                    </header>

                    <div className={styles['store__card-body']}>
                      <div className={styles['store__card-icon']}>{item.icon}</div>
                      <p className={styles['store__card-description']}>{item.description}</p>
                      <div className={styles['store__card-price']}>{item.price}</div>
                      {isActive && (
                        <button
                          className={styles['store__card-action']}
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedItem(item as StoreItem);
                          }}
                        >
                          View
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className={styles.store__controls}>
            <button
              className={styles['store__control-btn']}
              onClick={() => setActiveIndex(Math.max(0, activeIndex - 1))}
              disabled={activeIndex === 0}
            >
              ← Prev
            </button>
            <button
              className={styles['store__control-btn']}
              onClick={() => setActiveIndex(Math.min(items.length - 1, activeIndex + 1))}
              disabled={activeIndex === items.length - 1}
            >
              Next →
            </button>
          </div>
        </div>
      </div>
      {selectedItem && (
        <StoreModal item={selectedItem} onClose={() => setSelectedItem(null)} />
      )}
    </section>
  );
};
