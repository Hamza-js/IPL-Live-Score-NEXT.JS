async function getData() {
  const res = await fetch(
    `https://c621-160-202-38-214.ngrok-free.app/ipl/match-schedules`,
    {
      next: {
        revalidate: 60,
      },
    },
    {
      headers: {
        accept: "application/json", // Specify the expected media type for the response
      },
    }
  );

  // Parse the response as JSON
  return res.json();
}

const Schedule = async () => {
  const data = await getData();
  const matches = data.responseObject;
  console.log(data);
  console.log("Heloo");

  return (
    <div className=" w-screen bg-[#F5F5F5] justify-center flex items-center">
      <div className="flex items-center flex-col max-w-[700px]  w-full h-full bg-white">
        <div className="h-[60px] sm:h-[50px] w-full bg-purple-600 shadow-sm text-white flex items-center justify-center font-bold text-lg">
          <p>Schedule</p>
        </div>
        <div className="px-3 pt-8 font-semibold text-black flex flex-col justify-center items-center w-full sm:w-[550px]">
          <p>Indian Premier League 2023</p>

          <div className="flex flex-col">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          NO.
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Match Date
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Team 1
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Team 2
                        </th>
                        {/* Add more columns here as needed */}
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {matches.map((match, index) => (
                        <tr key={index}>
                          <td className="px-6 py-4 whitespace-nowrap">
                            {match.matches[0].matchInfo.matchDesc}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            {match.key}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            {match.matches[0].matchInfo.team1.teamSName}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            {match.matches[0].matchInfo.team2.teamSName}
                          </td>
                          {/* Add more columns here as needed */}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
