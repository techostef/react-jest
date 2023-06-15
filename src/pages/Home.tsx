import { css } from '@emotion/css';

import SearchSection from "../features/home/components/SearchSection";
import MainLayouts from '../features/shared/layouts/MainLayouts';

function Home () {
  return (
    <MainLayouts>
      <div className={styles.container}>
        <SearchSection />
      </div>
    </MainLayouts>
  )
}

const styles = {
  container: css({
    padding: 24,
    height: '100%'
  })
}

export default Home;