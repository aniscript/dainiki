import DateToday from "../components/DateToday";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Layout from "../components/Layout";
import Time from "../components/Time";

const Dashboard = () => {
  return (
    <Layout>
      <Header />
      <section className="flex flex-col items-center gap-4">
        <Time />
        <DateToday />
      </section>
      <Footer />
    </Layout>
  );
};

export default Dashboard;
