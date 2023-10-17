import {
  inventorySummaryData,
  productSummaryData,
  purchaseOverviewData,
  salesOverviewData,
} from "../../components/Overview/Data";
import Overview from "../../components/Overview/Overview";
import classes from "./DashboardPage.module.css";

import {
  IconUserPlus,
  IconDiscount2,
  IconReceipt2,
  IconCoin,
} from "@tabler/icons-react";

const icons = {
  user: IconUserPlus,
  discount: IconDiscount2,
  receipt: IconReceipt2,
  coin: IconCoin,
};

const DashboardPage = () => {
  return (
    <div>
      <div className={classes.row}>
        <Overview {...salesOverviewData} />
        <Overview {...inventorySummaryData} />
      </div>
      <div className={classes.row}>
        <Overview {...purchaseOverviewData} />
        <Overview {...productSummaryData} />
      </div>
      {/* <Overview data={salesData} /> */}
      {/* <Overview data={data} /> */}
    </div>
  );
};

export default DashboardPage;
