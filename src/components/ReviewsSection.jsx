export default function ReviewsSection() {
    const reviews = [
      {
        name: "Sarah",
        quote: "I bought this and people ask where it's from every time.",
        emoji: "😎",
      },
      {
        name: "John",
        quote: "The fit is perfect and the fabric feels amazing.",
        emoji: "💯",
      },
      {
        name: "Amina",
        quote: "Worth every penny!",
        emoji: "✨",
      },
    ];
  
    return (
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="section-header text-center mb-10">Customer Reviews</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <div key={idx} className="bg-secondary p-6 rounded-lg shadow-md">
              <p className="text-xl mb-2">{review.emoji}</p>
              <p className="italic mb-3">"{review.quote}"</p>
              <p className="font-semibold">{review.name}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }