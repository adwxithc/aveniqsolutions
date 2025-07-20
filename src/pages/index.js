import Head from 'next/head';
import { FeatureSection } from '@/components/sections/FeatureSection';
import {
    Header,
    HeroSection,
    TestimonialSection,
    FaqSection,
    Footer,
    PricingSection,
    LargeFeatureSection,
    CareerSection,
    CtaSection,
} from '../components/sections';

import {
    header,
    faqs,
    testimonials,
    features,
    pricing,
    clients,
    footer,
} from '@/data';
import { values } from '@/data/values';

export default function Home() {
    return (
        <>
            <Head>
                <title>Aveniq</title>
            </Head>
            <Header
                logo={header.logo}
                links={header.links}
                buttons={header.buttons}
            />
            <HeroSection
                id="home"
                badge={{
                    href: '#',
                    icon: 'tabler:arrow-right',
                    label: "😻 Learn What's New",
                }}
                title="Aveniq Solutions"
                description="Driven by innovation and built for impact, we craft tailored digital solutions that help startups launch faster and enterprises scale smarter — across web, mobile, and cloud platforms."
                buttons={[
                    {
                        href: '#',
                        label: 'Start Free Trail',
                        color: 'dark',
                    },
                    {
                        href: '#',
                        label: 'Learn More',
                        color: 'transparent',
                        variant: 'link',
                        icon: 'tabler:arrow-right',
                    },
                ]}
                image={{
                    src: './tablet-mockup.png',
                    alt: 'Product Screenshot on Tablet',
                    className: 'w-full h-auto',
                }}
                clientsLabel="Trusted by 100+ Brands"
                clients={clients}
            />
            <FeatureSection
                id="services"
                title="What We Offer"
                description="Explore the services that power your business — from idea to scalable digital product, we provide full-cycle development and modern IT solutions tailored for startups and enterprises."
                features={features}
            />
            <CareerSection
                id="career"
                title="Join Our Team"
                description="At Aveniq Solutions, we're driven by innovation and a passion for building impactful digital solutions. From modern web apps to scalable cloud systems, we work on projects that matter.

Join a collaborative, fast-paced environment where your skills grow, your ideas are valued, and your work makes a real difference."
                buttons={[
                    {
                        href: '#',
                        label: 'Explore Our Culture',
                        color: 'dark',
                    },
                ]}
            />
                 <FeatureSection
                id="values"
                title="What We Stand For"
                description="At Aveniq Solutions, our values shape everything we do — from how we build products to how we work as a team. They guide our culture, drive innovation, and keep us focused on what truly matters."
                features={values}
            />
            {/* <LargeFeatureSection
        title="Stay on top of your business"
        description="Explore the services that power your business — from idea to scalable digital product, we provide full-cycle development and modern IT solutions tailored for startups and enterprises."
        list={features.slice(0, 3)}
        image={{
          src: "./phone-mockup.png",
          alt: "Image",
          className:
            "w-full aspect-square object-contain rotate-6 hover:rotate-0 duration-300 ease-in-out",
        }}
      />
      <LargeFeatureSection
        reverse={true}
        title="Stay on top of your business"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis similique"
        list={features.slice(0, 3)}
        image={{
          src: "./phone-mockup.png",
          alt: "Image",
          className:
            "w-full aspect-square object-contain -rotate-6 hover:rotate-0 duration-300 ease-in-out",
        }}
      /> */}
            {/* <PricingSection
        id="pricing"
        title="Pricing for Everyone"
        description="Choose a plan that works for you. All plans include a 7-day free trial."
        badge={{
          leading: true,
          icon: "tabler:credit-card",
          label: "Plans",
        }}
        pricing={pricing}
      /> */}
            {/* <TestimonialSection
                id="testimonials"
                title="Love from our customers"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis similique
        veritatis"
                badge={{
                    leading: true,
                    icon: 'tabler:heart',
                    label: 'TESTIMONIALS',
                }}
                testimonials={testimonials}
                button={{
                    icon: 'tabler:brand-x',
                    label: 'Share Your Feedback on',
                    href: '#',
                    color: 'white',
                }}
            /> */}
            <FaqSection
                id="faqs"
                title="Frequently Asked Questions"
                description="Got a question? We’ve compiled answers to some of the most common things our clients ask. If you need more details, feel free to contact us."
                buttons={[
                    {
                        label: 'Contact Support',
                        href: 'mailto:aveniqsolution@gmail.com',
                        color: 'primary',
                        variant: 'link',
                        icon: 'tabler:arrow-right',
                    },
                ]}
                faqs={faqs}
            />
            <CtaSection
                title="Have a project in mind? Let’s talk."
                description="We’d love to learn more about your business and how we can help. Reach out, and we’ll get back to you within 24 hours."
                buttons={[
                    {
                        label: 'Contact Us',
                        href: 'mailto:aveniqsolution@gmail.com?subject=Project%20Inquiry',
                        color: 'dark',
                    },
                ]}
            />
            <Footer
                id="footer"
                copyright={footer.copyright}
                logo={footer.logo}
                social={footer.social}
                links={footer.links}
            />
        </>
    );
}
