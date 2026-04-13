import React from "react";

const StateSection = () => {
  return (
    <div className="bg-purple-500 text-center py-12">
      <div className="container mx-auto text-white ">
        <h2 className="font-bold text-4xl mb-4">
          Trusted by Millions, Built for You
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
          <div>
            <p>Total Downloads</p>
            <h2 className="font-bold text-3xl">29.6M</h2>
            <p>21% more than last month</p>
          </div>
          <div>
            <p>Total Reviews</p>
            <h2 className="font-bold text-3xl">906K</h2>
            <p>46% more than last month</p>
          </div>
          <div>
            <p>Active Apps</p>
            <h2 className="font-bold text-3xl">132+</h2>
            <p>31 more will Launch</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StateSection;
