import Image from "next/image";
import Link from "next/link";

const player = async ({ params }) => {
  async function getData() {
    const res = await fetch(
      `https://1e57-160-202-38-28.ngrok-free.app/api/ipl/player-profile/${params.player}`,
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
  const data = await getData();
  const apiRes = data.responseObject;
  console.log(data);
  console.log("Heloo");

  return (
    <div className=" w-screen bg-[#F5F5F5] justify-center flex items-center">
      <div className="flex items-center flex-col max-w-[700px]  w-full h-full bg-white">
        <div className="h-[60px] sm:h-[50px] w-full bg-purple-600 shadow-sm text-white flex items-center justify-center font-bold text-lg">
          <p>Player Details</p>
        </div>
        <div className="px-3 pt-8 font-semibold text-black flex flex-col justify-center items-center w-full sm:w-[550px]">
          <Image
            src={apiRes.image}
            height={50}
            width={50}
            style={{
              objectFit: "contain",
              height: 80,
              width: 80,
              marginBottom: 20,
            }}
          />
          <h3>{apiRes.name}</h3>
          <div className="w-full flex pt-7">
            <div className="w-1/4 flex gap-1 flex-col">
              <p>Nick Name</p>
              <p>Birth Place</p>
              <p>Role</p>
              <p>Intl Team</p>
              <p>Test Bat Rank</p>
              <p>ODI Bat Rank</p>

              <p>T20 Bowl Rank</p>

              <p>Test Bat Rank</p>

              <p>ODI Bat Rank</p>
              <p>T20 Bat Rank</p>
            </div>
            <div className="w-1/2 flex gap-1 flex-col">
              <p>{apiRes.birthPlace}</p>
              <p>{apiRes.nickName}</p>
              <p>{apiRes.role}</p>
              <p>{apiRes.intlTeam}</p>
              <p>{apiRes.currRank.bat.testBestRank}</p>
              <p>{apiRes.currRank.bat.odiBestRank}</p>

              <p>{apiRes.currRank.bat.t20BestRank}</p>

              <p>{apiRes.currRank.bowl.testBestRank}</p>

              <p>{apiRes.currRank.bowl.odiBestRank}</p>
              <p>{apiRes.currRank.bowl.t20BestRank}</p>
            </div>
          </div>

          <p className="pt-7">{apiRes.bio}</p>
        </div>
      </div>
    </div>
  );
};

export default player;
