import Card from "@/components/Card";
import Button from "@/components/Button";

const Landing: React.FC = () => {
  return (
    <div className="p-8 space-y-6">
      <h1 className="text-xl font-extralight">Landing Page</h1>

      <div className="space-x-4">
        <Button title="Small Button" className="text-sm rounded-sm" />
        <Button title="Medium Button" className="text-base rounded-md" />
        <Button title="Large Button" className="text-lg rounded-full" />
      </div>

      <div className="mt-6 space-y-4">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Landing;
