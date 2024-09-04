import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

const TermsOfService: React.FC = () => {
  return (
    <div className="container max-w-screen-md p-6 mx-auto text-justify text-slate-800">
      <h1 className="mb-6 text-3xl font-bold text-center">Terms of Service</h1>

      <p className="mb-4">
        <strong>Last Updated:</strong> September 01, 2024
      </p>

      <h2 className="mb-3 text-2xl font-semibold">1. Introduction</h2>
      <p className="mb-4">
        Welcome to Ti-Books! By accessing or using our website, you agree to be
        bound by these Terms of Service. If you do not agree with any part of
        these terms, you should not use our website.
      </p>

      <h2 className="mb-3 text-2xl font-semibold">2. Acceptance of Terms</h2>
      <p className="mb-4">
        By using our website, you acknowledge that you have read, understood,
        and agree to be bound by these Terms of Service. Your continued use of
        the website signifies your acceptance of any changes we may make to
        these terms.
      </p>

      <h2 className="mb-3 text-2xl font-semibold">3. User Responsibilities</h2>
      <p className="mb-4">
        You agree to use the website only for lawful purposes and in a way that
        does not infringe the rights of others or restrict or inhibit their use
        and enjoyment of the website. Prohibited behavior includes harassing or
        causing distress or inconvenience to any other user, transmitting
        obscene or offensive content, or disrupting the normal flow of dialogue
        within our website.
      </p>

      <h2 className="mb-3 text-2xl font-semibold">4. Intellectual Property</h2>
      <p className="mb-4">
        All content on this website, including text, graphics, logos, and
        images, is the property of Ti-Books or its content suppliers and is
        protected by copyright laws. You may not reproduce, distribute, or
        create derivative works based on this content without express written
        permission.
      </p>

      <h2 className="mb-3 text-2xl font-semibold">
        5. Disclaimer of Warranties
      </h2>
      <p className="mb-4">
        The content on Ti-Books is provided &quot;as is&quot; without any
        warranties of any kind, either express or implied. We do not warrant
        that the content will be accurate, reliable, or error-free, or that any
        defects will be corrected.
      </p>

      <h2 className="mb-3 text-2xl font-semibold">
        6. Limitation of Liability
      </h2>
      <p className="mb-4">
        In no event shall Ti-Books be liable for any indirect, incidental,
        special, consequential, or punitive damages arising out of or in
        connection with your use of the website. Our total liability to you for
        any claims arising from your use of the website shall not exceed the
        amount you paid, if any, to access this site.
      </p>

      <h2 className="mb-3 text-2xl font-semibold">7. Changes to the Terms</h2>
      <p className="mb-4">
        We reserve the right to modify these Terms of Service at any time. Any
        changes will be effective immediately upon posting on this page. We
        encourage you to review these terms periodically to stay informed of any
        updates.
      </p>

      <h2 className="mb-3 text-2xl font-semibold">8. Governing Law</h2>
      <p className="mb-4">
        These Terms of Service are governed by and construed in accordance with
        the laws of <span className="text-green-800">Madagascar/Malagasy</span>. Any disputes arising under these
        terms shall be subject to the exclusive jurisdiction of the courts of{" "}
        <span className="text-green-800">Madagascar/Malagasy</span>.
      </p>

      <h2 className="mb-3 text-2xl font-semibold">9. Contact Information</h2>
      <p className="mb-4">
        If you have any questions or concerns about these Terms of Service,
        please contact us in our{" "}
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

      <Link
        href="/"
        className={cn(buttonVariants({ variant: "default" }), "mt-6")}
      >
        Back to Home
      </Link>
    </div>
  );
};

export default TermsOfService;
