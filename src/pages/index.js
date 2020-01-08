import React from 'react';
import Button from '../components/Button';
import Card from '../components/Card';
import CustomerCard from '../components/CustomerCard';
import LabelText from '../components/LabelText';
import Layout from '../components/layout/Layout';
import SplitSection from '../components/SplitSection';
import StatsBox from '../components/StatsBox';
import customerData from '../data/customer-data';
import HeroImage from '../svg/HeroImage';
import SvgCharts from '../svg/SvgCharts';

export default () => (
  <Layout>
    <section className="pt-20 md:pt-40">
      <div className="container mx-auto px-8 lg:flex">
        <div className="text-center lg:text-left lg:w-1/2">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none">
            Medics for hire in Belfast
          </h1>
          <p className="text-xl lg:text-2xl mt-6 font-light">
            Professional, qualified and passionate medics for hire at your event anywhere in Northern Ireland.
          </p>
          <p className="mt-8 md:mt-12">
            <Button size="lg">Contact us</Button>
          </p>
          <p className="mt-4 text-gray-600">We value your privacy</p>
        </div>
      </div>
    </section>
    <section id="features" className="py-20 lg:pb-40 lg:pt-48">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl lg:text-5xl font-semibold">What we do best</h2>
        <div className="flex flex-col sm:flex-row sm:-mx-3 mt-12">
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">Sporting events</p>
              <p className="mt-4">
                We have expertise and knowledge to help with any sporting event you may have.
              </p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">Gigs and Concerts</p>
              <p className="mt-4">
                We have vast experience in attending and managing large gigs and concerts.
              </p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">MMA/Boxing</p>
              <p className="mt-4">
              We also specialise in combat based sports and offer a unique and safe service.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
    <SplitSection
      id="services"
      primarySlot={
        <div className="lg:pr-32 xl:pr-48">
          <h3 className="text-3xl font-semibold leading-tight">Professionally Qualified</h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            We are recognised and approved by a large number of professional bodies.
          </p>
          <h3 className="text-3xl font-semibold leading-tight pt-10">
          Great customer service
        </h3>
        <p className="mt-8 text-xl font-light leading-relaxed">
        We value our customers, our staff, our students and our patients. We also value the reputation for clinical excellence that we have worked so hard to achieve.
        </p>
        </div>
      }
      secondarySlot={<SvgCharts />}
    />

    <section className="container mx-auto my-20 py-24 bg-gray-200 rounded-lg text-center">
      <h3 className="text-5xl font-semibold">Ready to work with us?</h3>
      <p className="mt-8 text-xl font-light">
        We would love to hear from you, and will get back to you as soon as possible.
      </p>
      <p className="mt-8">
        <Button size="xl">Get in touch</Button>
      </p>
    </section>
  </Layout>
);
