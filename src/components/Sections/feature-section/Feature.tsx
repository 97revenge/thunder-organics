import { Carousel } from "grommet";
import { useContext } from "react";
import { feature } from "./Context";
import { Props } from ".";
import { FeatureContent } from "./FeatureContent";
import MaterialOfferBanner from "../../Layouts/offer-banner";

export const Feature = ({ slider, feed }: Props) => {
  const context: any = useContext(feature);

  return (
    <>
      <div className="  gap-4  lg:items-stretch rounded-lg">
        <div className="max-w-full  p-6 bg-gray-100 rounded-md place-content-center sm:p-8 ">
          <Carousel controls={false} play={6000}>
            <FeatureContent
              title={Object.keys(context)[0]}
              subTitle={Object.values(context)[0]}
              image={"https://source.unsplash.com/random/350x400/?family"}
            />
            <FeatureContent
              title={Object.keys(context)[1]}
              subTitle={Object.values(context)[1]}
              image={"https://source.unsplash.com/random/350x400/?salad"}
            />
            <FeatureContent
              title={Object.keys(context)[2]}
              subTitle={Object.values(context)[2]}
              image={"https://source.unsplash.com/random/350x400/?family"}
            />
            <FeatureContent
              title={Object.keys(context)[3]}
              subTitle={Object.values(context)[3]}
              image={"https://source.unsplash.com/random/350x400/?family"}
            />
          </Carousel>
        </div>
        <MaterialOfferBanner />
        {slider}
        {feed}
      </div>
    </>
  );
};
