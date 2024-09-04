import React, { useMemo } from "react";
import Table from "../../../components/Table";
import dummyData from "../data/stocks/dummyData";
import columns from "../data/stocks/StockColumns";

const ExpiredStocks = () => {
  const topButton = {
    name: "All Stocks",
    path: "/stocks",
  }

  const currentDate = new Date();
  const data = dummyData.filter((item) => {
    const expDate = new Date(item.expDate);

    if (expDate.getTime() - currentDate.getTime() < 0) {
      return item
    }
  });
  return (
    <div>
      <Table
        data={data}
        columns={useMemo(() => [columns], [])}
        topButton={topButton}
      />
    </div>
  );
};

export default ExpiredStocks;
