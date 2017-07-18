import Layout from '../components/Layout';
import { prodUrl as baseUrl } from '../variables';

export default () => (
  <Layout title="Old Fashioned | Home">
    <div>Whiskey & Bitters & Sugar & Ice</div>
    <img src={`${baseUrl}/static/img/sample.jpg`} alt="sample" />
  </Layout>
);
