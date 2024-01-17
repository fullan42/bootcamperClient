const falanfilan = () => {
  return (
    <div className="flex flex-col items-center mt-8">
      <div className="w-full p-4 text-center">
        <h1 className="text-2xl md:text-3xl lg:text-4xl">
          The most effective way to land a job at your dream company!
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl">
          Our programs are completely sponsored by partner companies. <br />
          Successful graduates immediately get a job offer at the sponsor. <br />
          Good news: <strong>You NEVER pay anything!</strong>
        </p>
      </div>
      <div className="w-75 p-4">
        <img
          className=" h-full object-cover"
          src="https://images.squarespace-cdn.com/content/v1/5af35198266c07d9fd3ac4ff/6aae5877-7393-421a-b72d-e1d121190e26/porsche_914_6_GT_ClassicCars_Andorra"
          loading="lazy"
          alt="Patika bootcamp mezunlarından dört kişinin fotoğrafı"
        />
      </div>
    </div>
  );
};

export default falanfilan;
