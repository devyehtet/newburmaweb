"use client";

import Image from "next/image";
import { images } from "../../../constants";
import Header from "../components/Header";

export default function AboutPage() {
  return (
    <>
      <Header />
      <div className="bg-white pt-40 text-gray-900">
        {/* Content Section */}
        <div className="max-w-6xl mx-auto px-6 lg:px-12 py-16">
          {/* Who We Are */}
          <section className="mb-20">
            <h2 className="font-neutraface text-4xl font-bold text-center text-black mb-8">
              Who We Are
            </h2>
            <p className="text-lg leading-relaxed text-gray-700 text-center max-w-3xl mx-auto">
              A New Burma is an organization dedicated to empowering Burma's
              marginalized communities through creative resistance, advocacy,
              and public engagement. Founded with a vision of a peaceful,
              inclusive, and democratic future for Burma, we work to amplify the
              voices of those affected by military oppression, conflict, and
              systemic injustice. Our core mission is to challenge impunity,
              promote human rights, and foster community-led solutions that pave
              the way for long-term peace and reconciliation.
            </p>
          </section>

          {/* Our Mission */}
          <section className="mb-20">
            <h2 className="font-neutraface text-4xl font-bold text-center text-black mb-8">
              Our Mission
            </h2>
            <div className="flex flex-col lg:flex-row lg:gap-16 items-center">
              <Image
                src={images.img_a_new_burma}
                alt="Our Mission Image"
                className="rounded-lg shadow-lg w-full lg:w-1/2 mb-8 lg:mb-0 h-full object-cover"
              />
              <div className="lg:w-1/2 text-lg leading-relaxed text-gray-700">
                <p className="mb-6">
                  At A New Burma, we believe in the transformative power of
                  creativity, community, and resistance. Our mission is to:
                </p>
                <ul className="list-disc list-inside space-y-4">
                  <li>
                    Empower marginalized communities affected by conflict,
                    particularly survivors of military airstrikes and political
                    oppression.
                  </li>
                  <li>
                    Amplify voices through art, exhibitions, and storytelling
                    that capture the resilience and struggles of Burma’s people.
                  </li>
                  <li>
                    Advocate for justice by documenting human rights violations,
                    engaging in local and international advocacy, and promoting
                    solutions that bring about lasting peace and democracy.
                  </li>
                  <li>
                    Mobilize global support for Burma’s ongoing fight for
                    freedom, connecting local struggles with international
                    movements for peace and justice.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* What We Do */}
          <section className="mb-20">
            <h2 className="font-neutraface text-4xl font-bold text-center text-black mb-8">
              What We Do
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="bg-gray-100 rounded-lg p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-black mb-4">
                  Creative Resistance
                </h3>
                <p className="text-lg leading-relaxed text-gray-700">
                  We use art, photography, and exhibitions to bring attention to
                  Burma's ongoing struggles, turning creativity into a tool for
                  advocacy and resistance. Through projects like the When We See
                  the Planes campaign, we highlight the impact of airstrikes on
                  civilians and call for an end to violence.
                </p>
              </div>
              <div className="bg-gray-100 rounded-lg p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-black mb-4">
                  Advocacy and Awareness
                </h3>
                <p className="text-lg leading-relaxed text-gray-700">
                  We engage with local, regional, and international stakeholders
                  to raise awareness of human rights abuses in Burma. By
                  mobilizing communities and global allies, we bring attention
                  to the urgent need for humanitarian support and policy change.
                </p>
              </div>
              <div className="bg-gray-100 rounded-lg p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-black mb-4">
                  Community Empowerment
                </h3>
                <p className="text-lg leading-relaxed text-gray-700">
                  We work with grassroots organizations and marginalized groups,
                  particularly women and youth, providing platforms for their
                  stories and fostering leadership that drives positive change
                  in their communities.
                </p>
              </div>
            </div>
          </section>

          {/* Our Vision */}
          <section className="mb-20">
            <h2 className="font-neutraface text-4xl font-bold text-center text-black mb-8">
              Our Vision
            </h2>
            <p className="text-lg leading-relaxed text-gray-700 text-center max-w-4xl mx-auto">
              We envision a future where Burma is a thriving democracy, free
              from oppression and violence, where every individual has the
              freedom to express themselves, and where justice, human rights,
              and inclusion are the foundations of society. Through our creative
              and advocacy efforts, A New Burma seeks to build bridges between
              local communities and global movements for peace, ensuring that
              the voices of the oppressed are heard and that justice prevails.
            </p>
          </section>

          {/* Why A New Burma */}
          <section className="mb-20">
            <h2 className="font-neutraface text-4xl font-bold text-center text-black mb-8">
              Why A New Burma?
            </h2>
            <p className="text-lg leading-relaxed text-gray-700 text-center max-w-4xl mx-auto">
              Our work is rooted in the belief that art and creativity are
              powerful forces for change. In a world where military oppression
              silences many, we provide a platform for voices that refuse to be
              silenced. With a deep commitment to justice, peace, and
              solidarity, A New Burma stands at the intersection of advocacy,
              creativity, and resistance, shaping a new future for Burma, one
              voice at a time.
            </p>
          </section>

          {/* Get Involved */}
          <section className="text-center">
            <h2 className="font-neutraface text-4xl font-bold text-black mb-8">
              Get Involved
            </h2>
            <p className="text-lg leading-relaxed text-gray-700 max-w-4xl mx-auto mb-12">
              You can support A New Burma by attending our exhibitions, joining
              our campaigns, and amplifying the stories of Burma's people.
              Together, we can create a world where creative resistance and
              community-driven change bring about a brighter, freer future for
              all.
            </p>
            <button className="px-8 py-4 text-lg font-semibold text-white bg-black hover:bg-white hover:text-black rounded-full shadow-md transition duration-300">
              Join Our Movement
            </button>
          </section>
        </div>
      </div>
    </>
  );
}
