import Layout from '../../../components/common/Layout';
import EmployeeDetails from '../../../components/employees/EmployeeDetails';

export default function EmployeeDetailsPage({ params }) {
  const { id } = params;
  return (
    <Layout title="Employee Details">
      <div className="p-8">
        <h1 className="text-2xl font-bold mb-6">Employee Details</h1>
        <EmployeeDetails id={id} />
      </div>
    </Layout>
  );
} 