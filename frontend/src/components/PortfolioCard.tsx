'use client';

import { forwardRef } from 'react';
import styles from './Portfolio.module.css';
import { Project } from './types';

interface Props {
  project: Project;
  onEnter: () => void;
  onLeave: () => void;
}

const PortfolioCard = forwardRef<HTMLDivElement, Props>(
  ({ project, onEnter, onLeave }, ref) => {
    return (
      <div
        ref={ref}
        className={styles.card}
        style={{ backgroundImage: `url(${project.image})` }}
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
      >
        <div className={styles.overlay} />
        <div className={styles.info}>
          <h4>{project.title}</h4>
          <button className={styles.infobtn}>View Project</button>
        </div>
      </div>
    );
  }
);

PortfolioCard.displayName = 'PortfolioCard';

export default PortfolioCard;
