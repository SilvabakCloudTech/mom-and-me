import LocationIcon from "./locationicon";
import PhoneIcon from "./phoneicon";

export default function MoreInformation() {
  return (
    <div className="bg-transparent font-mono text-font-bold text-sm sm:text-lg md:text-xl lg:text-2xl">
      <div>
        <span className="bg-pink-100 rounded-lg p-1">MORE INFORMATION</span>
      </div>
        <span>Sr Bongi Moralo</span>
        <div className="flex items-start">
          <LocationIcon />
          <p>6 Tandelsberg Street, Albertsdal</p>
        </div>
        <div className="flex items-center">
          <PhoneIcon />
          <p>+27 67 406 3606</p>
        </div>
    </div>
  );
}
