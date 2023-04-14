
async function getData() {
  const res = await fetch(
    `https://c621-160-202-38-214.ngrok-free.app/api/ipl/points-table`,
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


  if (!res.ok) {
    throw new Error(
      `Failed to fetch data. Status: ${res.status} ${res.statusText}`
    );
  }

  // Parse the response as JSON
  return res.json();
}

const pointTable = async () => {
  const data = await getData();
  const apiRes = data.responseObject.pointsTable[0].pointsTableInfo;
  console.log(data);
  console.log("Heloo");

  return (
    <div className="h-screen w-screen bg-[#F5F5F5] justify-center flex items-center">
      <div className="flex items-center flex-col max-w-[700px]  w-full h-full bg-white">
        <div className="h-[60px] sm:h-[50px] w-full bg-purple-600 shadow-sm text-white flex items-center justify-center font-bold text-lg">
          <p>Point Table</p>
        </div>
        <div className="px-3 pt-8 font-semibold text-black flex flex-col justify-center items-center w-full sm:w-[550px]">
          <p>Indian Premier League 2023</p>

          <div className=" w-full ">
            <table className="w-full table-fixed border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="w-1/4 py-2 px-2 border border-gray-300">
                    Team
                  </th>
                  <th className="w-1/6 py-2 px-2 border border-gray-300">
                    Played
                  </th>
                  <th className="w-1/6 py-2 px-2 border border-gray-300">
                    Won
                  </th>
                  <th className="w-1/6 py-2 px-2 border border-gray-300">
                    Lost
                  </th>
                  <th className="w-1/6 py-2 px-2 border border-gray-300">
                    Points
                  </th>
                  <th className="w-1/4 py-2 px-2 border border-gray-300">
                    NRR
                  </th>
                </tr>
              </thead>
              <tbody>
                {apiRes.map((team, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                  >
                    <td className="py-2 px-4 border border-gray-300">
                      {team.teamName}
                    </td>
                    <td className="py-2 text-center px-2 border border-gray-300">
                      {team.matchesPlayed}
                    </td>
                    <td className="py-2 text-center px-2 border border-gray-300">
                      {`${team.matchesWon != null ? team.matchesWon : 0}`}
                    </td>
                    <td className="py-2 text-center px-2 border border-gray-300">
                      {team.matchesLost}
                    </td>
                    <td className="py-2 text-center px-2 border border-gray-300">
                      {`${team.points != null ? team.points : 0}`}
                    </td>
                    <td className="py-2 text-center px-2 border border-gray-300">
                      {team.nrr}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default pointTable;
