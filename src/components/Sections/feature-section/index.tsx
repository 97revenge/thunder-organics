import { SliderSection as Slider } from "../slider-section/SliderSection";
import MaterialFeed from "../../Feed";
import { Feature } from "./Feature";
import React from "react";
import { MaterialBag } from "../bag-section/MaterialBag";

export type Props = { slider: React.ReactNode; feed: React.ReactNode };
export default function FeatureSection({
  children = <Feature slider={<Slider />} feed={<MaterialFeed />} />,
}) {
  return (
    <>
      <section>
        <div className="max-w-screen-md px-4 py-8 mx-auto sm:py-12 sm:px-6 lg:px-8 ">
          <MaterialBag />
          {children}
        </div>
      </section>
    </>
  );
}
