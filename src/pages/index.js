import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Hero from '../components/hero';
import Tagline from '../components/tagline';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Tagline />
  </Layout>
);

export default IndexPage;
