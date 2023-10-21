import { barData, waveData } from "../../components/GraphCard/DataOptions";
import GraphCard from "../../components/GraphCard/GraphCard";
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
      <div className={classes.analysis}>
        <div className={classes.flex}>
          <Overview {...salesOverviewData} />
        </div>
        <div className={classes.flex}>
          <Overview {...inventorySummaryData} />
        </div>
        <div className={classes.flex}>
          <Overview {...purchaseOverviewData} />
        </div>
        <div className={classes.flex}>
          <Overview {...productSummaryData} />
        </div>
        <div className={classes.flex}>
          <GraphCard name="Sales & Purchase" data={barData} graphType="bar" />
        </div>
        <div className={classes.flex}>
          <GraphCard name="Order Summary" data={waveData} graphType="wave" />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
