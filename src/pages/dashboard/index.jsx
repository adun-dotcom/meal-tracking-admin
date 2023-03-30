import React from "react";
import Wrapper from "../../Layouts/Wrapper";
import OverviewGraph from "../../assets/dashboard-graph.png";

const DashboardPage = () => {
  return (
    <div>
      <Wrapper>
        <div className="px-20">
          <div className="flex space-x-1/5">
            <div className="border-2 flex flex-col space-y-4 border-orange-400 rounded-2xl p-10">
              <p className="text-neutral-500 text-base font-medium">
                Total amount of food ordered
              </p>
              <h2 className="text-orange-400 font-bold text-xl">#450,000</h2>
            </div>

            <div className="border-2 flex flex-col space-y-4 border-orange-400 rounded-2xl p-10">
              <p className="text-neutral-500 text-base font-medium">
                Average amount requested
              </p>
              <h2 className="text-orange-400 font-bold text-xl">#450,000</h2>
            </div>
            <div className="border-2 flex flex-col space-y-4 border-orange-400 rounded-2xl p-10">
              <p className="text-neutral-500 text-base font-medium">
                No of meal requested
              </p>
              <h2 className="text-orange-400 font-bold text-xl">500</h2>
            </div>
          </div>
          <div className="mt-20">
            <img src={OverviewGraph} alt="" />
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default DashboardPage;
