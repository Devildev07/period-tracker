import { useEffect, useState } from "react";
import React from "react";
import "./App.css";

function App() {
  const [cycleLength, setCycleLength] = useState("");
  const [periodLength, setPeriodLength] = useState("");
  const [lastPeriodDate, setLastPeriodDate] = useState("");
  const [nextPeriodDate, setNextperiodDate] = useState("");
  const [daysUntilPeriod, setDaysUntilPeriod] = useState("");

  const handleCycleLengthChange = (event) => {
    setCycleLength(event.target.value);
  };
  const handlePeriodLengthChange = (event) => {
    setPeriodLength(event.target.value);
  };
  const handleLastPeriodDateChange = (event) => {
    setLastPeriodDate(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    const cycleLengthNum = parseInt(cycleLength);
    const periodLengthNum = parseInt(periodLength);
    const lastPeriodDateObj = new Date(lastPeriodDate);

    if (
      cycleLengthNum &&
      periodLengthNum &&
      lastPeriodDateObj instanceof Date &&
      !isNaN(lastPeriodDateObj)
    ) {
      const nextPeriodDateObj = new Date(
        lastPeriodDateObj.getTime() + cycleLengthNum * 24 * 60 * 60 * 1000
      );
      const daysUntilPeriodNum = Math.ceil(
        (nextPeriodDateObj.getTime() - Date.now()) / (24 * 60 * 60 * 1000)
      );

      setNextperiodDate(nextPeriodDateObj.toISOString().split("T")[0]);
      setDaysUntilPeriod(daysUntilPeriodNum);
    }
  };

  useEffect(() => {
    if (daysUntilPeriod >= "0" && daysUntilPeriod <= "3") {
      alert("Your Period is coming within 3 days!");
    }
  }, [daysUntilPeriod]);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h1 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Period Tracker
        </h1>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="cycle-length"
                className="block text-sm font-medium text-gray-700"
              >
                Cycle Length (in Days)
              </label>
              <div className="mt-1">
                <input
                  type="number"
                  name="cycle-length"
                  id="cycle-length"
                  className="p-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  value={cycleLength}
                  onChange={handleCycleLengthChange}
                  required
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="period-length"
                className="block text-sm font-medium text-gray-700"
              >
                Period Length (in Days)
              </label>
              <div className="mt-1">
                <input
                  type="number"
                  name="period-length"
                  id="period-length"
                  className="p-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  value={periodLength}
                  onChange={handlePeriodLengthChange}
                  required
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="last-period-date"
                className="block text-sm font-medium text-gray-700"
              >
                Last Period Date
              </label>
              <div className="mt-1">
                <input
                  type="date"
                  name="last-period-date"
                  id="last-period-date"
                  className="p-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  value={lastPeriodDate}
                  onChange={handleLastPeriodDateChange}
                  required
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="text-sm">
                <a
                  href="#"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Learn more about Periods
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm 
             font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Submit
              </button>
            </div>

            {nextPeriodDate  && (
              <div>
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Next Period Date
                </h3>
                <p className="mt-1 text-sm text-gray-500">{nextPeriodDate}</p>
              </div>
            )}

            {daysUntilPeriod !== '' && (
              <div>
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Days until Period
                </h3>
                <p className="mt-1 text-sm text-gray-500">{daysUntilPeriod}</p>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
