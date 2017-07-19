import Layout from '../components/Layout';
import { prodUrl as baseUrl } from '../variables';

export default () => (
  <Layout title="Old Fashioned | Home">
    <div className="container">
      <div className="py4 col-md-8 col-md-offset-2">
        <h1>Home Page</h1>
        <div>Whiskey & Bitters & Sugar & Ice</div>
        <img src={`${baseUrl}/static/img/sample.jpg`} alt="sample" />
      </div>
    </div>
  </Layout>
);
