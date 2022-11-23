import { Icon } from "react-icons-kit";
import { ic_location_on_outline } from "react-icons-kit/md/ic_location_on_outline";
import { ic_king_bed_outline } from "react-icons-kit/md/ic_king_bed_outline";
import { ic_connected_tv } from "react-icons-kit/md/ic_connected_tv";
import { ic_bathtub_outline } from "react-icons-kit/md/ic_bathtub_outline";

export default function most() {
  return (
    <div className="px-8 -mt-10">
      <div
        className="flex flex-col border border-color-grey-light
       md:flex-row md:max-w-max mb-10 mt-20 p-2 rounded-lg items-center"
      >
        <picture>
          <source srcSet="/img/hotel.png" type="image/webp" />
          <img
            className="h-auto rounded-lg"
            src="/img/hotel.png"
            alt="picture"
          />
        </picture>
        <div className="p-3">
          <p className="text-[14px] text-color-blueDark font-medium">
            Metro Jayakatra Hotel & Spa{" "}
          </p>
          <p className="text-[11px] text-color-purpleBlue font-semibold">
            $269,000
          </p>
          <div className="grid-row my-1">
            <div>
              <div className="flex gap-1 text-color-gray-light font-medium text-[12px]">
                <Icon size={20} icon={ic_king_bed_outline} />
                <span>6</span>
              </div>
            </div>
            <div>
              <div className="flex gap-1 text-color-gray-light font-medium  text-[12px]">
                <Icon size={20} icon={ic_bathtub_outline} />
                <span>5</span>
              </div>
            </div>
            <div>
              <div className="flex gap-1 text-color-gray-light font-medium  text-[12px]">
                <Icon size={20} icon={ic_connected_tv} />
                <span>1</span>
              </div>
            </div>
          </div>
          <div className="flex gap-1">
            <Icon
              size={20}
              icon={ic_location_on_outline}
              className="text-color-grays font-medium"
            />
            <p className="text-[12px] text-color-blue font-medium">
              6391 Elgin St. Celina, Delaware <br /> 10299
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
