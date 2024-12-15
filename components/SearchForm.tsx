import Form from "next/form";
import SearchFormReset from "./SearchFormReset";
import { Search } from "lucide-react";

const SearchForm = ({ query }: { query?: string }) => {
  return (
    <Form action="/" scroll={false} className="search-form">
      <input
        type="text"
        name="query"
        defaultValue={query}
        className="serach-input"
        placeholder="Search Stratups"
      />

      <div className="felx gap-2">
        {query && <SearchFormReset />}
        <button type="submit" className="search-btn">
          <Search className="size-5" />
        </button>
      </div>
    </Form>
  );
};

export default SearchForm;
