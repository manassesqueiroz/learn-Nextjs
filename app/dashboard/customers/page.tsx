import CustomersTable from '@/app/ui/customers/table';
import { fetchFilteredCustomers, } from '@/app/lib/data';

export default async function Page() {
    const Customers = await fetchFilteredCustomers('')
    return (
    <div className="w-full">
        <div className="flex w-full items-center justify-between">
            <CustomersTable customers={Customers} />
        </div>
    </div>
    )
}