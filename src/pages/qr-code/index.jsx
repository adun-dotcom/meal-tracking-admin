import React, { useState } from "react";
import Moment from "react-moment";
import "moment-timezone";
import Wrapper from "../../Layouts/Wrapper";
import QrCodeImg from "../../assets/qr-code.jpeg";
import ButtonComponent from "../../Components/button";
import { generateBarcode } from "../../operations/mutation.def";
import BusyOverlay from "../../Components/BusyOverlay";
import { useQuery } from "react-query";

const QrCodePage = () => {
  const [generateCode, setGenerateCode] = useState(false);
  const { isLoading } = useQuery("barcode", generateBarcode, {
    enabled: generateCode,
  });

  const handleGenerateBarCode = () => {
    setGenerateCode(true);
    window.open(
      `https://beertech-production.up.railway.app/v1/auth/barcode`,
      "_blank"
    );
  };
  return (
    <div>
      <BusyOverlay loading={isLoading} />

      <Wrapper>
        <div className="px-20 h-screen">
          <div className="w-full flex justify-end">
            <ButtonComponent
              btnText="Print QR Code"
              disabled={false}
              callToAction={handleGenerateBarCode}
            />
          </div>
          <div className="flex justify-center mt-10">
            <div className="qr-code-shadow bg-white rounded-2xl w-500 h-578 p-5">
              <div className="border-4 flex flex-col justify-between rounded-2xl p-4 border-dashed border-gray-400 h-full">
                <div className="border-4 border-gray-400 px-3 pt-3 rounded-2xl">
                  <img className="h" src={QrCodeImg} alt="" />
                </div>
                <h3 className="pt-6 text-center font-semibold text-gray-400 text-2xl px-6">
                  Scan to process today's meal
                </h3>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default QrCodePage;
