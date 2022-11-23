export default function navbar() {
  return (
    <div className="px-8 mt-4 flex flex-row justify-between gap-48">
      <div>
        <h1 className="text-2xl font-medium">Good Morning, Thomas 🎉</h1>
        <p className="text-[15px] font-medium text-color-blue">
          Discover your home’s worth and track it over time
        </p>
        <p className="font-medium mt-7 text-[17px]">
      Find Your Best House 🏘
      </p>
      </div>
      <div>
        <picture>
          <source srcSet="/img/face.png" width={40} type="image/webp" />
          <img src="/img/face.png" alt="picture" width={40} />
        </picture>
        <div className="circle bg-color-gray-light border-r"></div>
      </div>
    
    </div>
  );
}
