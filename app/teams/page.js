import Link from "next/link";

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

const teams = async () => {
  const data = await getData();
  const apiRes = data.responseObject.pointsTable[0].pointsTableInfo;
  console.log(data);
  console.log("Heloo");

  return (
    <div className=" w-screen bg-[#F5F5F5] justify-center flex items-center">
      <div className="flex items-center flex-col max-w-[700px]  w-full h-full bg-white">
        <div className="h-[60px] sm:h-[50px] w-full bg-purple-600 shadow-sm text-white flex items-center justify-center font-bold text-lg">
          <p>Teams</p>
        </div>
        <div className="px-3 pt-8 font-semibold text-black flex flex-col justify-center items-center w-full sm:w-[550px]">
          <p>Indian Premier League 2023</p>

          <div className="w-full justify-center items-center flex-col flex">
            {apiRes.map((team, index) => (
              <div
                key={index}
                className="flex justify-center items-center pt-2 w-1/2"
              >
                <Link
                  href={`/teams/${team.teamId}`}
                  className="text-white w-full bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 sm:py-3 py-5 mx-5 sm:max-w-[300px] text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
                >
                  <p>{team.teamName}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default teams;
