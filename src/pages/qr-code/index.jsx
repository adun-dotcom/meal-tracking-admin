import React, { useState } from "react";
import Moment from "react-moment";
import "moment-timezone";
import Wrapper from "../../Layouts/Wrapper";

const QrCodePage = () => {
  const [switchTab, setSwitchTab] = useState("scan");

  return (
    <div>
      <Wrapper>
        <div className="px-20">
          <div className="flex h-screen">
            <div className="w-1/2 border-r border-gray-600">
              <div className="flex justify-between pr-20">
                <h2 className="text-gray-400 font-bold text-xl">
                  Scan Qr Code
                </h2>
                <div className="border-2 rounded border-gray-400 bg-white px-3 py-2">
                  <Moment format="DD/MM/YYYY ">{new Date()}</Moment>
                </div>
              </div>
              <div className="flex flex-col justify-center mt-14">
                <div className="rounded-lg h-376 w-361 bg-black"></div>
                <div className="border w-64 h-58 py-2 px-3 mt-5 flex justify-center border-neutral-200 bg-neutral-300 rounded-xl  ">
                  <div
                    onClick={() => setSwitchTab("scan")}
                    className={`${
                      switchTab === "scan"
                        ? "bg-orange-400 text-white"
                        : "bg-transparent text-gray-400"
                    } flex font-medium items-center justify-center text-center rounded-full w-1/2 `}
                  >
                    Scan
                  </div>
                  <div
                    onClick={() => setSwitchTab("stop")}
                    className={`${
                      switchTab === "stop"
                        ? "bg-orange-400 text-white"
                        : "bg-transparent text-gray-400"
                    } flex font-medium items-center justify-center text-center rounded-full w-1/2 `}
                  >
                    Stop
                  </div>
                </div>
              </div>

              <div className=""></div>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default QrCodePage;
