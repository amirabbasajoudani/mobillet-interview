import Pagination from "../../components/Pagination";
import Search from "../../components/Search";
import Table from "../../components/Table";
export default function Home() {
  return (
    <div className="container mx-auto px-4 sm:px-8">
      <div className="py-8">
        <div>
          <h2 className="text-2xl font-semibold leading-tight">Users</h2>
        </div>
        <Search />
        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
            <Table
              cols={["title1", "title2", "title3"]}
              rows={["row1", "row2", "row3"]}
            />
          </div>
        </div>
        <Pagination />
      </div>
    </div>
  );
}
