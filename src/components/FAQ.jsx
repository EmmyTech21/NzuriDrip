import React from "react";

export default function FAQ() {
  return (
    <section className="py-20 px-6 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-12">Frequently Asked Questions</h1>

      <div className="space-y-8">

        {/* Question 1 */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Where are your products made?</h2>
          <p className="text-gray-400">
            All our hoodies and sets are crafted locally in Lagos using premium cotton blends and ethical production practices.
          </p>
        </div>

        {/* Question 2 */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Do you offer international shipping?</h2>
          <p className="text-gray-400">
            Yes! We ship worldwide. Delivery takes 3–7 business days depending on location.
          </p>
        </div>

        {/* Question 3 */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Are returns accepted?</h2>
          <p className="text-gray-400">
            Due to the limited nature of our drops, we do not accept returns unless there's a manufacturing defect.
          </p>
        </div>

        {/* Question 4 */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Can I track my order?</h2>
          <p className="text-gray-400">
            Yes. Once shipped, you’ll receive a tracking number via email.
          </p>
        </div>

        {/* Question 5 */}
        <div>
          <h2 className="text-xl font-semibold mb-2">How do I care for my NZURI hoodie?</h2>
          <p className="text-gray-400">
            Wash inside out in cold water. Tumble dry low. Do not iron directly on logo or tags.
          </p>
        </div>

      </div>
    </section>
  );
}