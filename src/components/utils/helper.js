export function filtereddata(searchText, res) {
    const filtereddata = res.filter((x) =>
        x.data?.name?.toLowerCase()?.includes(searchText.toLowerCase())
    );
    
    return filtereddata;
  }