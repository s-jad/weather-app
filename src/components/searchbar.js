export default function SearchBar() {
  const search = document.createElement('input');
  search.className = 'search-weather';
  search.type = 'text';

  return search;
}
