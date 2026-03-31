import Card from "@/components/common/NavCard";
import TestimonialSection from "@/components/ui/testimonials/TestimonialSection";
// import EasterSeriesSection from "@/components/ui/online/EasterSeriesSection"; // uncomment when Rose approves
import { workCards } from "@/content/work";

const Work = () => {
  return (
    <div>
      <div className="container">
        <h1>Work with Rose</h1>
        <p className="font-bold">
          Come and explore how your body, mind and breath work together. Open
          yourself to new dimensions of experience and personal growth.
        </p>

        <div className="lg:my-20 my-7">
          <div className="grid grid-cols-1 gap-3 lg:grid-cols-3">
            {workCards.map((card, index) => (
              <Card key={index} cardInfo={card} />
            ))}
          </div>
        </div>
      </div>
      <TestimonialSection />
      {/* EASTER SERIES — uncomment when Rose approves
      <div className="container">
        <EasterSeriesSection />
      </div>
      */}
    </div>
  );
};

export default Work;
