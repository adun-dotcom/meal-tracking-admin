import React, { useEffect, useRef, useState } from "react";
import Wrapper from "../../Layouts/Wrapper";
import OverviewBg from "../../assets/dashboard-bg.png";
import BusyOverlay from "../../Components/BusyOverlay";
import MaterialTable from "material-table";
import TableIcons from "../../Components/TableIcons";
import { getHistoryQuery } from "../../operations/mutation.def";
import { useQuery } from "react-query";
import Moment from "react-moment";
import "moment-timezone";

const DashboardPage = () => {
  const tableRef = useRef();
  const [historyData, setHistoryData] = useState([]);

  const { isLoading, error, data, refetch } = useQuery("history", () => {
    return getHistoryQuery(0);
  });

  const orderCount = data?.count;

  useEffect(() => {
    if (data) {
      setHistoryData(data?.data);
    }
  }, [data, historyData]);

  return (
    <div>
      <BusyOverlay loading={isLoading} />
      <Wrapper>
        <div className="px-20">
          <div className="flex  space-x-10">
            <div className="w-3/4 h-full">
              <img
                className="h-full object-cover w-full"
                src={OverviewBg}
                alt=""
              />
            </div>
            <div className="border-2 h-full flex flex-col space-y-4 border-orange-400 rounded-2xl py-10 px-6">
              <p className="text-neutral-500 text-base font-medium">
                No of ordered meals
              </p>
              <h2 className="text-orange-400 text-center font-bold text-xl">
                {orderCount}
              </h2>
            </div>
          </div>
          <div className="mt-20">
            <h3 className="text-2xl font-medium text-gray-400 mb-8">
              Ticket History
            </h3>
            <MaterialTable
              title=""
              icons={TableIcons}
              tableRef={tableRef}
              data={historyData}
              columns={[
                {
                  title: "Staff ID",
                  field: "staffId",
                  render: (data) => (
                    <div className="trackingId">{data?.staffId}</div>
                  ),
                },

                {
                  title: "Name",
                  field: "name",
                  render: (data) => <div>{data?.name}</div>,
                },
                {
                  title: "Date/Time",
                  field: "date/time",
                  render: (data) => (
                    <div>
                      <p>
                        {
                          <Moment format="DD-MMM-YY -  hh:mm A">
                            {new Date(data?.createdDate)}
                          </Moment>
                        }
                      </p>
                    </div>
                  ),
                },
                {
                  title: "Status",
                  field: "status",
                  render: (data) => (
                    <div className="">
                      <span className="border-2 w-20 border-neutral-700 bg-neutral-800 text-neutral-700 rounded text-sm  flex justify-center items-center px-3 py-1">
                        {data?.mealStatus}
                      </span>
                    </div>
                  ),
                },
              ]}
              options={{
                pageSize: 10,
                sorting: false,
                filtering: false,
                debounceInterval: 500,
                actionsColumnIndex: -1,
              }}
              // onRowClick={(event, rowData, togglePanel) => togglePanel?.()}
            />
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default DashboardPage;
