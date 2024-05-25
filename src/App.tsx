import { useState } from "react";
import { Layout } from "./templates/Layout";
import { Header } from "./components/Header";
import { Card } from "./components/Card";
import { CardsLayout } from "./templates/CardsLayout";

const App: React.FC = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  const handlePricingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsMonthly(e.target.checked);
  };

  return (
    <Layout>
      <Header
        title="Our Pricing"
        checked={isMonthly}
        onCheck={handlePricingChange}
      />
      <CardsLayout>
        <Card
          details={["500 GB Storage", "2 Users Allowed", "Send up to 3 GB"]}
          price={isMonthly ? "19.99" : "199.99"}
          title="Basic"
        />
        <Card
          details={["1 TB Storage", "5 Users Allowed", "Send up to 10 GB"]}
          price={isMonthly ? "24.99" : "249.99"}
          title="Professional"
          isMain
        />
        <Card
          details={["2 TB Storage", "10 Users Allowed", "Send up to 20 GB"]}
          price={isMonthly ? "39.99" : "399.99"}
          title="Master"
        />
      </CardsLayout>
    </Layout>
  );
};

export default App;
