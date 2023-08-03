import css from './DashboardHeader.module.css';

const DashboardHeader = () => {
  return (
    <>
      <div className={css.testDashboard}>
        <div className={css.container}>
          <h2 className={css.dashboardTitle}>Board name</h2>
          <div className={css.dashboardFilter}>
            <div className={css.filterIcon}></div>
            <p className={css.filterText}>Fiter</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardHeader;
