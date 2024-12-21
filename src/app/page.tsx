import BtnLogin from "./components/Login";

export default function Home() {
  return (
    <main className="flex bg-white w-full min-h-screen justify-center">
      <div className="bg-[url('./assets/restaurant-interior.jpg')] w-full max-h-[90vh] bg-cover bg-no-repeat bg-fixed bg-center ">
        <div className="flex flex-col items-center justify-center bg-black bg-opacity-50 w-full h-full">
            <p className="text-red-300">Agende sua visita quando quiser</p>
            <h1 className="text-[40px] mt-2 font-bold text-white ">Reserve.me</h1>
            <p className="text-white w-1/4 text-center mb-5">A solução perfeita para você! Reserve quando e onde quiser!</p>
            <BtnLogin text="Comece Já" />
        </div>
      </div>
      
    </main>
  );
}
