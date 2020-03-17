import React from 'react'
import { bool } from 'prop-types'
import { Retina } from 'foog-ui'

// Componentes
import Link from 'next/link'

// Styles
import styles from './Logo.scss'

const Logo = props => {
  const { isoType = '', center = ''} = props;

  return (
    <div className={`${styles.logo} ${center && styles.center} ${isoType && styles.isoType}`}>
      <link href="/" title="Codejobs">
        <a>
          <Retina src="/images/logo.png"></Retina>

          {!isoType && (
            <span className={styles.brand}>
              <span className={styles.code}>CODE</span>
              <span className={styles.jobs}>JOBS</span>
            </span>
          )}
        </a>
      </link>
    </div>
  );
};

Logo.propTypes = {
  center: bool,
  isoType: bool
}

export default Logo
