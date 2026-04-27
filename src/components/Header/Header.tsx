import styles from './Header.module.scss';

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <span className={styles.logo}>Econverse</span>
        <nav className={styles.nav}>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Produtos</a></li>
            <li><a href="#">Contato</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
