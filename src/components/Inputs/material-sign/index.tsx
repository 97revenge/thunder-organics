import { Elem } from "./Elem";
import { ElemBanner } from "./ElemBanner";

export default function SignForm() {
  return (
    <>
      <section className="bg-white">
        <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
          <ElemBanner />
          <Elem children />
        </div>
      </section>
    </>
  );
}
