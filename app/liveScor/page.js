async function getData() {
  const res = await fetch(
    `https://1e57-160-202-38-28.ngrok-free.app/api/ipl/`,
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

const liveScor = async () => {
  const data = await getData();
  const apiRes =
    data.responseObject.typeMatches[0].seriesAdWrapper[0].seriesMatches
      .matches[0];
  console.log(data.responseObject.typeMatches[0]);
  console.log("Heloo");

  return (
    <div className="h-screen w-screen bg-[#F5F5F5] justify-center flex items-center">
      <div className="flex items-center flex-col max-w-[700px]  w-full h-full bg-white">
        <div className="h-[60px] sm:h-[50px] w-full bg-purple-600 shadow-sm text-white flex items-center justify-center font-bold text-lg">
          <p>Live Scores</p>
        </div>
        <div className="px-8 pt-8 font-semibold text-black flex flex-col justify-center items-center w-full sm:w-[550px]">
          <p>{apiRes.matchInfo.seriesName}</p>
          {/* Scores */}
          <div className="flex justify-between w-full pt-7">
            <div className="flex flex-col items-center ">
              <p className="text-black text-lg font-normal hover:underline hover:cursor-pointer">
                {`${apiRes.matchInfo.team1.teamName}`}
              </p>
              <p className="text-black text-xl font-normal">{`${
                apiRes.matchScore.team1Score.inngs1.runs != null
                  ? apiRes.matchScore.team1Score.inngs1.runs
                  : 0
              }/${
                apiRes.matchScore.team1Score.inngs1.wickets != null
                  ? apiRes.matchScore.team1Score.inngs1.wickets
                  : 0
              }`}</p>
              <p className="text-black text-[10px] font-normal">{`(${
                apiRes.matchScore.team1Score.inngs1.overs != null
                  ? apiRes.matchScore.team1Score.inngs1.overs
                  : 0
              })`}</p>
            </div>
            <p className="mt-5 text-gray-500">VS</p>
            <div className="flex flex-col items-center">
              <p className="text-black text-lg font-normal hover:underline hover:cursor-pointer">
                {`${apiRes.matchInfo.team2.teamName}`}
              </p>
              <p className="text-black text-xl font-normal">{`${
                apiRes.matchScore.team2Score.inngs1.runs != null
                  ? apiRes.matchScore.team2Score.inngs1.runs
                  : 0
              }/${
                apiRes.matchScore.team2Score.inngs1.wickets != null
                  ? apiRes.matchScore.team2Score.inngs1.wickets
                  : 0
              }`}</p>
              <p className="text-black text-[10px] font-normal">{`(${
                apiRes.matchScore.team2Score.inngs1.overs != null
                  ? apiRes.matchScore.team2Score.inngs1.overs
                  : 0
              })`}</p>
            </div>
          </div>

          {/* Match status */}
          <div className="flex items-center flex-col w-full pt-8">
            <p className="text-black text-base font-normal hover:underline hover:cursor-pointer">
              {`${apiRes.matchInfo.status}`}
            </p>
            <p className="text-gray-500 text-[12px] font-light hover:underline hover:cursor-pointer">
              {`${apiRes.matchInfo.matchFormat} ${apiRes.matchInfo.matchDesc}`}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default liveScor;
