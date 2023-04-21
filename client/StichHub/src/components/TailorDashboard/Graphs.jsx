import React from "react";
import Chart from "react-apexcharts";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import ReactStars from "react-rating-stars-component";

const Graphs = () => {
  const data = {
    series: [
      {
        name: "Orders",
        data: [1, 5, 3, 9, 4, 12, 10, 13, 10],
      },
    ],
    options: {
      chart: {
        type: "area",
        height: "auto",
      },

      fill: {
        colors: ["#fff"],
        type: "gradient",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
        colors: ["#ff929f"],
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
      grid: {
        show: false,
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2018-09-19T00:00:00.000Z",
          "2018-09-19T01:30:00.000Z",
          "2018-09-19T02:30:00.000Z",
          "2018-09-19T03:30:00.000Z",
          "2018-09-19T04:30:00.000Z",
          "2018-09-19T05:30:00.000Z",
          "2018-09-19T06:30:00.000Z",
          "2018-09-19T07:30:00.000Z",
          "2018-09-19T08:30:00.000Z",
        ],
      },
      yaxis: {
        show: false,
      },
      toolbar: {
        show: false,
      },
    },
  };
  return (
    <div className="px-[3%] pt-5 bg-primary h-screen gap-4">
      {/* first block */}
      <div className="flex flex-row gap-4">
        <div className="bg-white rounded-xl w-[100%] h-fit  ">
          <div className="flex flex-row p-5">
            <div className="text-xl w-[90%]">Rating Observations</div>
            <div className=" text-blue-700 text-sm flex ">
              <a href="#">View All</a>
            </div>
          </div>
          {[...Array(3)].map((star, index) => {
            index += 1;
            return (
              <div className="flex ml-10 mb-5">
                <div className="flex w-[70%] lg:w-[8%] mt-5 ml-5 mr-5  ">
                  <CircularProgressbar
                    strokeWidth="12"
                    className=""
                    value="60"
                    text={`60%`}
                  />
                </div>
                <div className="mt-5">
                  <span>Harshal</span>
                  <br />
                  <span>24, April 2023 | 04:00 PM</span>
                </div>

                <div className="mt-5 ml-10">
                  <ReactStars
                    count={5}
                    value={4}
                    edit={false}
                    size={24}
                    isHalf={true}
                    activeColor="#ffd700"
                  />
                  ,
                </div>
                <div className="mt-5 ml-10 mb-5 rounded-xl bg-gray-200 py-1 px-4">
                  2 Days Ago
                </div>
              </div>
            );
          })}
        </div>
        {/* second block */}
        <div className="bg-white  rounded-xl  h-fit w-full ">dfhhfgh</div>
      </div>
      <div className="grid grid-col-3 gap-4 mt-5">
        {/* third block */}
        <div className="bg-white rounded-xl col-start-1 col-end-2 ">
          <Chart options={data.options} series={data.series} type="area" />
        </div>
        {/* forth block */}
        <div className="bg-white  col-start-2 col-end-4 rounded-xl  ">
          fghghfh
        </div>
      </div>
    </div>
  );
};

export default Graphs;
