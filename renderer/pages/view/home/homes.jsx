import Layout from "../../../components/Template/Layout";
import { article } from "../../api/data/article";
import { articles } from "../../api/data/articles";
import Navbar from "../../../components/Organisms/navbar";
import { ic_king_bed_outline } from "react-icons-kit/md/ic_king_bed_outline";
import { Icon } from "react-icons-kit";
import { ic_connected_tv } from "react-icons-kit/md/ic_connected_tv";
import { ic_bathtub_outline } from "react-icons-kit/md/ic_bathtub_outline";
import { ic_location_on_outline } from "react-icons-kit/md/ic_location_on_outline";
import Most from "./most";

export default function Homes() {
  return (
    <Layout>
      <div className="app font-['Roboto'] h-full w-full">
        <Navbar />
        <div className="px-8 -mt-10">
          <div className="grid-place">
            {article.map((item) => (
              <div key={item.id}>
                <div className="max-w-sm rounded overflow-hidden shadow-2xl">
                  {item.img}
                  <div className="px-2 py-4">
                    <div className="font-medium text-[16px] mb-2">$269,000</div>
                    <div className="grid-row">
                      <div>
                        <div className="flex gap-1 text-color-gray-light font-medium">
                          <Icon size={20} icon={ic_king_bed_outline} />
                          <span>6</span>
                        </div>
                        <p className="text-sm font-medium text-color-blueLight">
                          Bedrooms
                        </p>
                      </div>
                      <div>
                        <div className="flex gap-1 text-color-gray-light font-medium">
                          <Icon size={20} icon={ic_bathtub_outline} />
                          <span>5</span>
                        </div>
                        <p className="text-sm font-medium text-color-blueLight">
                          Bathrooms
                        </p>
                      </div>
                      <div>
                        <div className="flex gap-1 text-color-gray-light font-medium">
                          <Icon size={20} icon={ic_connected_tv} />
                          <span>1</span>
                        </div>
                        <p className="text-sm font-medium text-color-blueLight">
                          Television
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="px-2 py-4">
                  <div className="flex gap-1">
                    <Icon
                      size={20}
                      icon={ic_location_on_outline}
                      className="text-color-grays font-medium"
                    />
                    <p className="text-[14px] text-color-blue font-medium">
                      {item.address}
                    </p>
                    <button className="bg-bg-purple rounded-lg p-1 h-10 w-32 font-medium text-color-white">
                      View
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Most />
      </div>
    </Layout>
  );
}
