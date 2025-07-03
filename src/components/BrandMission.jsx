export default function VideoTestimonial() {
    return (
      <section className="py-16 bg-secondary px-6">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
          <video
            src="/assets/NZURI_Ad_Concept_Generation.mp4"
            controls
            className="w-full md:w-1/2 rounded-xl mb-6"
          />
          <blockquote className="italic text-lg mb-6">
            “I wear this to the office and out at night.”
          </blockquote>
          <button className="btn-outline">See More Fits</button>
        </div>
      </section>
    );
  }