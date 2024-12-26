'use client';


export default async function Home() {
  const data = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=b4c1c42e939d40cc9a9170518242412&q=USA&days=2&aqi=no&alerts=no`);
  const posts = await data.json();
  const { location, current } = posts;
  return (
    <div className=" h-[100vh] p-4 py-[200px] flex items-center justify-center bg-img bg-no-repeat bg-contain bg-center">
      <div className="flex flex-col items-center w-[70%] px-[30px] justify-center text-center py-[40px] jdlhf rounded-[50px]">
        <div className="flex items-center justify-center">
          <img src={current.condition.icon} alt={location.name} width={150}/>
          <p className="text-white text-[100px] font-thin">{current.temp_c}
            <div className="text-white flex flex-col items-center justify-center">
            <span className="text-[40px]">C</span><span className="text-[40px]">F</span>
            </div>
          </p>
        </div>
        <div>
          <h1 className="text-white text-[30px] font-bold">{location.country}/{location.name}</h1>
          <p className="text-white text-[30px] font-medium">Updated as of {location.localtime}</p>
        </div>
        <div>
          <p className="text-white text-[30px] font-medium">{current.wind_kph} km/h</p>
        </div>
        <div>
          <h1 className="text-white text-[30px] font-bold">{current.humidity}%</h1>
        </div>
      </div>
      <div>
        
      </div>
    </div>
  );
}