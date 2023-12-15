import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { INITIAL_PATH } from '@/utils/const/const';
import styles from './header.module.scss';
import Btn from '@/components/Btn/Btn';
import Settings from '@/components/Settings/Settings';
import contentJson from '@/utils/jsons/HeaderContent/HeaderContent.json';
import { useAppSelector } from '@/store/hooks';
import { RootState } from '@/store/store';

const Header: React.FC = (): JSX.Element => {
  const [isSticky, setIsSticky] = useState(false);
  const isEn = useAppSelector((state: RootState) => state.languageSlice.eng);
  const content = isEn ? contentJson.eng : contentJson.ru;

  useEffect(() => {
    const handleScroll = (): void => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.onscroll = handleScroll;
    return (): void => {
      window.onscroll = null;
    };
  }, []);

  return (
    <>
      <header
        className={`${styles.header} ${isSticky ? styles['sticky'] : ''}`}
      >
        <div className={styles['header__wrapper']}>
          <div className={styles['header__left-side']}>
            <Link to={INITIAL_PATH}>
              <h2>{content.title}</h2>
            </Link>
          </div>
          <div className={styles['header__right-side']}>
            <Btn className={styles['header__btn']}>{content.btnSignOut}</Btn>
            <Settings parentClass={styles['header__settings']} />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
