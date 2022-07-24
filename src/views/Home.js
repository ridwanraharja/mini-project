import profile from "../images/Profile.png";

function Home() {
  return (
    <div className="bg-white content center m-2 p-2 border w-9/10 ">
      <h1 className="text-center font-bold">My Profile</h1>
      <img className="w-72 center p-4 mx-auto" src={profile} alt="profile" />
      <div className="flex item-center ">
        <table className="">
          <tr>
            <td>Full Name:</td>
            <td>Muhammad Ridwan Ali Raharja</td>
          </tr>
          <tr>
            <td>Phone Number:</td>
            <td>0895378913061</td>
          </tr>
          <tr>
            <td>Home Address:</td>
            <td>Jalan Batu Ampar II No.5</td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default Home;
