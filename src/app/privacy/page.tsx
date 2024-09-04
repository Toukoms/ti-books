import Link from "next/link";
import React from "react";

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="container max-w-screen-md p-6 mx-auto text-justify text-slate-800">
      <h1 className="mb-6 text-3xl font-bold text-center">Privacy Policy</h1>

      <p className="mb-4">
        <strong>Last Updated:</strong> September 01, 2024
      </p>

      <p className="mb-4">
        At Ti-Books, we are committed to safeguarding the privacy of our users.
        This Privacy Policy outlines how we collect, use, and protect your
        information when you visit our website and use our services.
      </p>

      <h2 className="mb-3 text-2xl font-semibold">1. Information We Collect</h2>
      <p className="mb-4">
        <strong>Non-Personal Information:</strong> We do not collect any
        personal information from users who visit our website. The only data we
        gather is the number of clicks on the &quot;Read Book&quot; button for
        each storybook to determine the popularity of our content.
      </p>
      <p className="mb-4">
        <strong>Third-Party Tools:</strong> We use backend services to store
        click data. This data is anonymous and is only used to showcase the most
        popular storybooks on our website.
      </p>

      <h2 className="mb-3 text-2xl font-semibold">
        2. How We Use Collected Information
      </h2>
      <p className="mb-4">
        <strong>Content Optimization:</strong> The click data is used to display
        the top three most popular storybooks, helping us improve our offerings
        and tailor content to user preferences.
      </p>
      <p className="mb-4">
        <strong>No Personal Data Collection:</strong> We do not collect, store,
        or share any personal information such as names, email addresses, or
        other identifying details.
      </p>

      <h2 className="mb-3 text-2xl font-semibold">3. Third-Party Services</h2>
      <p className="mb-4">
        <strong>Backend Services:</strong> We use backend services to store
        anonymous click data. These services operate independently, and their
        privacy policies can be reviewed directly on their websites.
      </p>
      <p className="mb-4">
        <strong>External Tools:</strong> We use external tools to create and
        manage our digital storybooks. These tools do not collect or share any
        data with Ti-Books or its users.
      </p>
      <p className="mb-4">
        <strong>Brevo CRM and Formspree:</strong> We use Brevo CRM to manage
        customer relationships and Formspree to handle form submissions on our
        contact page. These tools may collect and store data such as email
        addresses when users contact us. We do not share this data with any
        third parties and use it solely to respond to user inquiries.
      </p>

      <h2 className="mb-3 text-2xl font-semibold">4. Images and Content</h2>
      <p className="mb-4">
        <strong>Image Sources:</strong> All images used on Ti-Books are sourced
        from{" "}
        <Link
          href="https://www.freepik.com/free-ai-image/scene-with-young-children-playing-nature-outdoors_186029747.htm#fromView=search&page=1&position=0&uuid=e294dd9f-117f-4d7e-9c53-4bf429b3f7bd"
          className="text-primary/80 hover:text-primary hover:underline"
        >
          Freepik
        </Link>
        , a platform offering high-quality, royalty-free images. We ensure
        compliance with{" "}
        <Link
          href="https://www.freepik.com/free-ai-image/scene-with-young-children-playing-nature-outdoors_186029747.htm#fromView=search&page=1&position=0&uuid=e294dd9f-117f-4d7e-9c53-4bf429b3f7bd"
          className="text-primary/80 hover:text-primary hover:underline"
        >
          Freepik
        </Link>
        &apos;s licensing agreements for all visual content used on our website.
      </p>

      <h2 className="mb-3 text-2xl font-semibold">5. Cookies and Tracking</h2>
      <p className="mb-4">
        We do not use cookies or other tracking mechanisms on our website.
      </p>

      <h2 className="mb-3 text-2xl font-semibold">6. Data Security</h2>
      <p className="mb-4">
        We prioritize the security of the data we collect. Although we only
        collect anonymous click data, we implement industry-standard security
        measures to protect all stored information from unauthorized access or
        disclosure.
      </p>

      <h2 className="mb-3 text-2xl font-semibold">
        7. Changes to This Privacy Policy
      </h2>
      <p className="mb-4">
        We may update this Privacy Policy from time to time to reflect changes
        in our practices or for other operational, legal, or regulatory reasons.
        We will notify users of any significant changes by posting the new
        policy on our website.
      </p>

      <h2 className="mb-3 text-2xl font-semibold">8. Contact Us</h2>
      <p className="mb-4">
        If you have any questions or concerns about this Privacy Policy, please
        contact us in our{" "}
        <Link
          href="/contact"
          className="text-primary/80 hover:text-primary hover:underline"
        >
          Contact page{" "}
        </Link>
        or send us mail at{" "}
        <Link
          href="mailto:contactti-books.com@proton.me"
          className="text-primary/80 hover:text-primary hover:underline"
        >
          contactti-books.com@proton.me
        </Link>
        .
      </p>
    </div>
  );
};

export default PrivacyPolicy;
